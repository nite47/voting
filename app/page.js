import React from "react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center px-20 bg-[url('/bg.png')] bg-cover bg-center text-black">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-[400] text-blue-600 flex flex-col justify-center gap-4 ">
           Electronic 
           <span className="font-[700] text-[1.3em]">Voting</span>
        </h1>
        <hr className="w-[11vw] border border-black"/>
        <p className="text-sm">
          <strong className="text-blue-700">Why Choose Us?</strong><br />
          Electronic voting is revolutionizing the way we engage in democratic processes.
          With our user-friendly platform, we're making voting accessible to everyone, everywhere.
        </p>
        <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 h-10">
  Get Started   
        </a>
      </div>
      <div className="">
        <img  src={"/VOTE.jpg"} alt="vote.jpg"className="w-[100rem]" />
      </div>
    </main>
  );
}