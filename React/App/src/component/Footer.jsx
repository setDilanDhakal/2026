import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer(){
    return (
        <>
            <div class="bg-slate-200 w-full  p-10 mt-10 ">
                <div className="flex font-sans items-center"> 
                    <p className="text-4xl">ActiviTee</p>
                    <div className="flex justify-end w-full"> 
                        <CiFacebook size={32} />
                        <CiInstagram  size={32} />
                        <FaSquareXTwitter size={32} />
                    </div>
                </div>
                <hr className="h-px bg-slate-500 border-0 mt-5" />
                <div class="flex">
                    <div>
                        <p>Subscribe our news letter to get the latest trends news</p>
                        
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>

    )
}
export default Footer;