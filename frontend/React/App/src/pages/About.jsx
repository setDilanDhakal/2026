import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function About (){

    const [count,setCount] = useState(12)
    const [lightOn,setLightOn] = useState(true)
    const message = lightOn ? ("Light on") : ("light Off");


    const clicked = ()=>{
        lightOn? toast.success("light on") : toast.error("light off");
        setLightOn(!lightOn)
    }

    const [bgcolor,setBgcolor] = useState('bg-black');



    

    const addCounter = ()=>{
        count>=30?
            toast.error(`You have reach limit of ${count}`):setCount(count+1);
        }

    const subCounter= ()=>{
        count<=-10?toast.error(`you have reach limit of ${count}`):setCount(count-1);
    }
    return(
        <>
            <div className="flex justify-center items-center m-10">
                <Toaster />
                {count}
                <button className="border py-2 px-4 bg-white text-black border-black  mx-5" onClick={addCounter}>Increse</button>
                {count}
                <button className="border py-2 px-4 bg-white text-black border-black  mx-5" onClick={subCounter}>Decrese</button>
                {count}
            </div>    
            <div className="flex justify-center">
                <button className="border py-2 px-4 bg-white text-black border-black  mx-5" onClick={clicked}>{message}</button>
            </div>




            <div className={`flex justify-evenly p-5 m-5 ${bgcolor}`}>
                <div className="h-20 w-20 bg-red-500 border border-white" onClick={()=>setBgcolor("bg-red-500")}></div>
                <div className="h-20 w-20 bg-green-500 border border-white" onClick={()=>setBgcolor("bg-green-500")}></div>
                <div className="h-20 w-20 bg-pink-500 border border-white" onClick={()=>setBgcolor("bg-pink-500")}></div>
                <div className="h-20 w-20 bg-purple-500 border border-white" onClick={()=>setBgcolor("bg-purple-500")}></div>
                <div className="h-20 w-20 bg-yellow-500 border border-white" onClick={()=>setBgcolor("bg-yellow-500")}></div>

            </div>
        </>
    )
}

export default About;