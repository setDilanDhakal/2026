import {useState} from 'react'
import { Toaster,toast } from 'react-hot-toast';


function Card( props) {


  const [friend, isFriend] = useState(false);
  

  function check(){

    isFriend(!friend);
    if(!friend){
      toast.success("Successfully added to card");
      
    }else{
      toast.error("removed from card")
    }
  }

    const message = !friend ? "Add to card" : "Remove from card";


  return (
    <>
    <Toaster />
    <div className="pl-5">
    <div className="bg-amber-100 p-4 w-72 rounded-lg ">
      <div
        className="h-80 w-full bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>

      <h2 className="font-sans text-xl font-bold mt-2">{props.name}</h2>
      <p className="text-sm">{props.address}</p>

      <button className="mt-2 px-4 py-1 bg-white border rounded" onClick={()=>check()}>
        {message}
      </button>
    </div></div>
    </>
  );
}

export default Card;
