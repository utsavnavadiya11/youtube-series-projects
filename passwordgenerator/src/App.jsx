import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charactersallowed, setCharactersallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (charactersallowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charactersallowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charactersallowed, passwordGenerator]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // UseRef hook
  const passwordRef = useRef(null);
  return (
    <>
      <div className="w-full max-w-screen-sm mx-auto shadow-md rounded-lg px-10 my-15 pb-4 pt-4 mt-10 text-orange-600 bg-gray-700">
        <h1>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            ref={passwordRef}
            value={password}
            className="outlined-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyPasswordToClip}
            className="outlined-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactersallowed}
              id="charactersInput"
              onChange={() => {
                setCharactersallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
