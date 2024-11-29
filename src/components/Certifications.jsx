import React from "react";
import Certificate from "../assets/2.jpg";

function Certifications() {
  return (
    <div className=" border-neutral-800 pb-8 mb-24">
      <h2 className="my-20 text-center text-4xl">Certifications</h2>
      <div className="flex flex-row flex-wrap justify-center px-6">
        {/* card */}
        <div className="flex flex-col rounded-lg sm:max-w-full md:max-w-full lg:max-w-xl sm:mr-auto md:mr-auto lg:mr-6 mb-4 backdrop-blur-md bg-white/5">
          <div>
            <img className="rounded-lg" src={Certificate} />
          </div>
          <div className='px-4 my-4 space-y-2'>
            <div>
              <h5 className="text-2xl">Introduction to Python</h5> 
            </div>
            <div>
              <h5 className="text-xl">by SoloLearn</h5>
            </div>
            <div>
              <p className="text-sm">04/05/2023</p>
            </div>
            <div>
              <button className="rounded px-4 py-1 bg-indigo-600">View</button>
            </div>
          </div>
        </div>
        {/* card End */}

        {/* card Start */}
        <div className="flex flex-col rounded-lg sm:mr-auto md:mr-auto lg:mr-6 mb-4 sm:max-w-full md:max-w-full lg:max-w-xl backdrop-blur-md bg-white/5">
          <div>
            <img className="rounded-lg" src={Certificate} />
          </div>
          <div className='px-4 my-4 space-y-2'>
            <div>
              <h5 className="text-2xl">Introduction to Python</h5>
            </div>
            <div>
              <h5 className="text-xl">by SoloLearn</h5>
            </div>
            <div>
              <p className="text-sm">04/05/2023</p>
            </div>
            <div>
              <button className="rounded px-4 py-1 bg-indigo-600">View</button>
            </div>
          </div>
        </div>
        {/* card End */}

        {/* card Start */}
        <div className="flex flex-col rounded-lg sm:mr-auto md:mr-auto lg:mr-6 mb-4 sm:max-w-full md:max-w-full lg:max-w-xl backdrop-blur-md bg-white/5">
          <div>
            <img className="rounded-lg" src={Certificate} />
          </div>
          <div className='px-4 my-4 space-y-2'>
            <div>
              <h5 className="text-2xl">Introduction to Python</h5>
            </div>
            <div>
              <h5 className="text-xl">by SoloLearn</h5>
            </div>
            <div>
              <p className="text-sm">04/05/2023</p>
            </div>
            <div>
              <button className="rounded px-4 py-1 bg-indigo-600">View</button>
            </div>
          </div>
        </div>
        {/* card End */}
      </div>
    </div>
  );
}

export default Certifications;
