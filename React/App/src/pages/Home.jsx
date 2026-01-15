import Banner from '../component/BoxImage.jsx'
import SecondHero from '../component/secondHero.jsx';


function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row font-sans">


      <div className="w-full md:w-[60%] flex md:justify-center">
        <p className="font-normal text-3xl md:text-6xl p-6 md:p-12 w-full md:w-[60%] leading-tight">
          Unleash your fashionable side today.
        </p>
      </div>


      <div className="w-full md:w-[40%] flex flex-col justify-center p-6 md:p-10 gap-4">
        <p className="text-base md:text-lg font-light max-w-md">
          Praesent justo consectetur interdum commodo. Est tellus sodales lacus
          bibendum eleifend. Faucibus quam malesuada egestas viverra enim.
        </p>

        <button className="w-fit border-b-2 border-black hover:opacity-70 transition">
          Visit Collection
        </button>
      </div>
    </div>

    <Banner />
    <SecondHero />
    </>


  );
}

export default Home;
