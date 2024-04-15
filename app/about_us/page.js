import React from 'react';
import Image from "next/image";

import SideP from "../../public/sidepic.jpg";


export default function Page() {
  return (
    <main id="bg" className="min-h-screen w-full  justify-center items-center px-20  bg-cover bg-center text-black">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="max-w-3xl mx-auto lg:order-2">
          <img src='/ABOUTUS.jpg' alt="About Us" className="w-[100rem] h-[30rem]"/>
        </div>
        <div className="lg:ml-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            At our electronic voting platform, we are passionate about leveraging technology to empower citizens and strengthen democratic processes. 
            With a commitment to integrity, transparency, and inclusivity, we strive to provide innovative electronic voting solutions that ensure every voice is heard and every vote counts.
          </p>
          <p className="mb-4">
            Our team is dedicated to continuous improvement and innovation. We work tirelessly to enhance the accessibility, security, and user experience of our platform, 
            ensuring that it remains at the forefront of modern democratic processes. Through collaboration and partnership, we aim to drive positive change and 
            contribute to the advancement of democratic values worldwide.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 py-8 w-full">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Story</h2>
          <p className="mb-4">
            Our journey began in [Year] with a vision to redefine democracy in the digital age. Founded by a team of dedicated individuals, our mission was clear: to create a secure, accessible, and transparent electronic voting platform that empowers citizens and enhances the integrity of elections worldwide. From humble beginnings to becoming a trusted leader in the field of electronic voting, our story is a testament to the power of technology to transform societies and empower individuals to shape their futures.
          </p>
        </div>
      </div>
      <div className=" px-4 mt-8 flex">
        <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="flex flex-wrap justify-center">
             <div className="w-full lg:w-1/2 p-4">
               <h3 className="text-lg font-bold mb-2">Transparency</h3>
               <p> We are committed to transparency in our operations, decision-making, and communication. We believe that transparency fosters trust and confidence among voters, election officials, and the public, ensuring the legitimacy and credibility of our electoral processes.</p>
            </div>
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-lg font-bold mb-2">Flexibility</h3>
            <p>We understand the importance of flexibility in adapting to the diverse needs and requirements of different electoral contexts. We strive to provide customizable solutions that can be tailored to meet the unique challenges and preferences of our users.</p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-lg font-bold mb-2">Accuracy</h3>
            <p>We prioritize accuracy in every aspect of our electronic voting platform, from voter registration and ballot casting to result tabulation and reporting. We employ rigorous testing and validation processes to ensure the reliability and integrity of our systems.</p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h3 className="text-lg font-bold mb-2">Quality</h3>
            <p>We are dedicated to delivering high-quality electronic voting solutions that meet the highest standards of performance, security, and user experience. We continuously monitor and improve our products and services to exceed the expectations of our users and stakeholders.</p>
          </div>
        </div>
        </div>

        <div>
            <Image src={SideP} alt="About Us" className="w-[150rem] h-[27rem]"/>
        </div>
      </div>
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <div className="flex justify-center">
          <div className="flex justify-between">
            <div className="w-1/2">
              <h3 className="text-lg font-bold mb-2">Contents</h3>
              <div className="flex flex-wrap">
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">Team</h4>
                </div>
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">About Us</h4>
                </div>
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">Services</h4>
                </div>
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">Contact Us</h4>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <div className="flex flex-wrap">
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">Terms and Conditions</h4>
                </div>
                <div className="w-1/2 p-2">
                  <h4 className="text-sm font-bold mb-1">Privacy Policy</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </main>
  );
}
