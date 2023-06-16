import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { BiEdit} from 'react-icons/bi';

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="shadow-lg px-4 py-4 rounded-lg bg-gray-700 md:w-[80%] lg:w-[30%] w-[90%] h-[80vh] border-2">
        <h1>Softevia</h1>
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
        <div className="flex flex-col items-center w-full h-[35px] border-2 my-4  rounded-lg">
          <input
            type="date"
            placeholder="Enter Title"
            className="bg-gray-100 text-black pl-4 rounded-md text-[16px] h-full w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          {" "}
          <button className="bg-orange-400 text-[18px] px-[50px] py-[5px] rounded-lg text-white h-full shadow-xl ">
            Add
          </button>
        </div>

        <div className="w-full h-[1px] bg-gray-100 my-8"></div>
        {/* Todo search end */}
        {/* Todo List start */}
        <div className="w-full py-4 h-fit border-2 rounded-lg relative">
         <ul className="flex items-center px-4 justify-start flex-col  text-[16px]">
            <li className="w-full flex items-center ">Title:- <input type="text" value="Abinash" className="bg-transparent " /></li>
            <li className="w-full w-full flex items-center">Desc:- <input type="text" value="Abinash" className="bg-transparent" /></li>
            <li className="w-full w-full flex items-center">Date:- <input type="text" value="Abinash" className="bg-transparent" /></li>
         </ul>
         <div className="flex absolute bottom-0 right-0 my-4 items-center justify-end gap-10"> <AiFillDelete/>
         <TiTick/>
         <BiEdit/></div>
        
        </div>

        {/* Todo list end */}
      </div>
    </div>
  );
};

export default Home;
