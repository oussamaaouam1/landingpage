import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:6xl lg:text-7xl text-center tracking-wide">
        <span className="text-orange-200 font-medium">VirCode</span>
        build tools 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">for developers</span>
      </h1>
      <p className="mt-10 text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 mx-3 rounded-md px-3 tracking-wide hover:text-black transition duration-500" href='#'> Start for fee</button>
        <button className="py-3 px-4 rounded-md border hover:bg-orange-300 hover:text-black transition duration-500" href='#'> Documentation</button>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-md w-1/2  border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video1} type='video/mp4'/>
          Your browser does not support video tag .
        </video>
                <video autoPlay loop muted className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video2} type='video/mp4'/>
          Your browser does not support video tag .
        </video>
      </div>
    </div>
  )
}

export default HeroSection
