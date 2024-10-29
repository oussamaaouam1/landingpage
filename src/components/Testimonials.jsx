import { testimonials } from "../constants"
const Testimonials = () => {
  return (
    <div>
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl mt-12 tracking-wide lg:my-20">What People Are Saying</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start ">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-200" 
                src={testimonial.image} 
                alt={testimonial.user}/>
                <div className="">
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                </div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
