import React from "react";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <>
      <h1 className="font-sans text-8xl font-extralight text-center my-20">
        Get in touch
      </h1>

      <div className="flex gap-10 justify-center m-5 ">
        <div class="w flex flex-col ">
          <h1 className="font-sans text-3xl mb-10">Our office info</h1>
          <div className="flex flex-col gap-10">
            <div className="flex gap-3">
              <FaSquarePhoneFlip size={30} />
              <div>
                <p>Phone</p>
                <p>635-314-0511</p>
              </div>
            </div>
            <div className="flex gap-2">
              <AiTwotoneMail size={30} />
              <div>
                <p>E-mail</p>
                <p>Example@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlineContacts size={30} />
              <div>
                <p>Address</p>
                <p>95980 Caitlyn Trace</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-gray-300  mx-5"></div>

        <div className="flex flex-col w-100 gap-5 ">
          <input
            type="text"
            placeholder="Enter your full name"
            className=" border-b-1 font-light text-sm p-2 "
          ></input>
          <input
            type="text"
            placeholder="Enter your phone"
            className=" border-b-1 font-light text-sm p-2 "
          ></input>
          <input
            type="text"
            placeholder="Enter your e-mail"
            className=" border-b-1 font-light text-sm p-2 "
          ></input>
          <input
            type="textbox"
            placeholder="Enter your message"
            className=" border-b-1 font-light text-sm p-2 "
          ></input>
          <BsFillSendFill size={24} className="mt-5" />
        </div>
      </div>


      <div className="flex justify-center gap-5 mt-20 ">

        <div className="w-[30%] flex flex-col justify-center">
          <p className="text-center font-light text-4xl">Discover our fashion blog</p>
        </div>


        <div
          className="w-[30%] h-100  bg-center bg-cover rounded-lg"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6719f2906f74c002c2f730a0/673e3690a2985e05791ba308_blog%2001.png')",
          }}
        ></div>


        <div className="w-[30%] flex flex-col items-center justify-center gap-2">
          <button className="border rounded-full text-sm font-light px-4 py-2">
            Sustainability
          </button>
          <p className="text-center font-light text-4xl">
            Reduce fashion waste with style
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
