import { CiShoppingCart } from "react-icons/ci";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { PiLineVertical } from "react-icons/pi";

function Head() {
  return (
    <div className="px-10 py-5 flex items-center text-black  w-full justify-between">
      

      <div className="flex flex-1 items-center gap-2">
        <RiBarChartHorizontalLine size={20} />
        <PiLineVertical size={20} />
        <CiShoppingCart size={20} />
      </div>


      <div className="flex flex-1 justify-center font-sans">
        <a href="/" className="font-light text-4xl">
          ActiviTee
        </a>
      </div>

      <div className="flex flex-1 justify-end gap-3">
        <a href="/contact">Contact</a>
      </div>

    </div>
  );
}

export default Head;
