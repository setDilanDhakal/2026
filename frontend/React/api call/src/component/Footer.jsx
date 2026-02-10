import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-slate-200 w-full p-6 md:p-10 mt-10">
      
      <div className="flex flex-col md:flex-row items-center gap-5">
        <p className="text-3xl md:text-4xl font-sans">ActiviTee</p>

        <div className="flex gap-4 md:ml-auto">
          <CiFacebook size={32} />
          <CiInstagram size={32} />
          <FaSquareXTwitter size={32} />
        </div>
      </div>

      <hr className="h-px bg-slate-400 border-0 mt-6" />


      <div className="flex flex-col lg:flex-row gap-10 my-10">


        <div className="lg:w-[40%]">
          <p className="text-xl md:text-2xl mb-4">
            Subscribe our newsletter to get the latest trends news
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[70%] border-b border-slate-500 bg-transparent p-2 outline-none"
          />
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 flex-1">

          <div>
            <p className="text-neutral-500 mb-3">Main page</p>
            <div className="flex flex-col gap-3">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 mb-3">Inner page</p>
            <div className="flex flex-col gap-3">
              <a href="">Service</a>
              <a href="">Blog</a>
              <a href="">Project</a>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 mb-3">Inner page</p>
            <div className="flex flex-col gap-3">
              <a href="">Team</a>
              <a href="">Collection</a>
              <a href="">Collection details</a>
            </div>
          </div>

          <div>
            <p className="text- mb-3">Utility page</p>
            <div className="flex flex-col gap-3">
              <a href="">404 not found</a>
              <a href="">Changelog</a>
              <a href="">Password protected</a>
            </div>
          </div>

        </div>
      </div>

      <hr />


      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 text-sm">
        <p className="sm:mr-auto">Design by Dilan Dhakal</p>

        <div className="flex items-center gap-2">
          <p>Licenses</p>
          <PiLineVertical size={18} />
          <p>Style guide</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
