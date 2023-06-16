import React from 'react';

const SignUp = () => {
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
    <div className="shadow-lg px-4 py-4 rounded-lg bg-gray-700 md:w-[80%] lg:w-[30%] w-[90%] h-[40vh] border-2">
    <h1>SignUp</h1>
            {/* Todo search start */}
            <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
              <input
                type="text"
                placeholder="Enter Title"
                className="bg-gray-100 pl-4 rounded-md text-[16px] h-full w-full"
              />
            </div>
            <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
              <input
                type="text"
                placeholder="Enter Description"
                className="bg-gray-100 pl-4 rounded-md text-[16px] h-full w-full"
              />
            </div>
            
            <div className="flex items-center justify-end">
              {" "}
              <button className="bg-orange-400 text-[18px] px-[50px] py-[5px] rounded-lg text-white h-full shadow-xl ">
                SignUp
              </button>
            </div></div>      
        </div>
  );
}

export default SignUp;
