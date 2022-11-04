import React from 'react'

export default function Hero() {
    return (
        <div className="max-w-[1024px] h-96 w-full mx-auto mt-20 rounded-lg col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 flex items-center">
            <div className="pl-8 w-80">
                <h2 className="text-white text-4xl">Adsla</h2>
                <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore?</p>

                <button className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</button>
            </div>
        </div>
    )
}
