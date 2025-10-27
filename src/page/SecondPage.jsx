import React from "react";


const SecondPage = () => {
  return (
    <div className="mb-25 md:mb-40 flex justify-center mt-10 md:mt-25 px-4 sm:px-6 w-full">
      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="mb-4 md:mb-6">
            <img src="/img/second1.png" className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="Branding" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">Branding</h1>
            <p className="text-sm md:text-base font-medium text-gray-600">
              We aim at helping businesses establish a strong brand presence and
              connect with their target audience.
            </p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="mb-4 md:mb-6">
            <img src="/img/second2.png" className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="Approaching" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">Approaching</h1>
            <p className="text-sm md:text-base font-medium text-gray-600">
              We help established brands reimagine themselves and build from the
              ground up.
            </p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="mb-4 md:mb-6">
            <img src="/img/second3.png" className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="Thinking" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">Thinking</h1>
            <p className="text-sm md:text-base font-medium text-gray-600">
              We help in brainstorming, ideation, concept dev & strategic planning
            </p>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="mb-4 md:mb-6">
            <img src="/img/second4.png" className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="Execution" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">Execution</h1>
            <p className="text-sm md:text-base font-medium text-gray-600">
              We are geared towards delivering flawless execution & achieving
              business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;