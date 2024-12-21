import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/utsavnavadiya11")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-orange-600 text-white text-3xl rounded-lg shadow-lg p-4 m-6 text-center">
      Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Profile Picture" width={300} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/utsavnavadiya11");
  return response.json();
};
