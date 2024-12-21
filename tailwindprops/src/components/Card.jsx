import React from 'react'

export default function Card(props) {
    console.log(props)
  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-4">
            <img
            src={props.image|| ""}
            alt=""
            className="object-cover object-center w-full rounded-xl h-40 bg-gray-500"
          />
            <div className=" bg-black sm:p-10 p-6 rounded-xl">
              <div className="">
                <h5 className="mt-2 text-sm text-gray-400">{props.title||""}</h5>
      
                <p className="mt-2 text-sm text-gray-400">
                  {props.description||""}
                </p>
              </div>
            </div>
          </div>
  )
}
