import React, { useState } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BiPlusMedical } from "react-icons/bi";
// import "./Dashboard.css"
import Navbar from './Navbar';

function Dashboard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="bg-slate-200 h-screen fixed top-0 left-0 w-full z-10 mt-20 ">
        <div className="flex justify-evenly flex-row gap-10 mt-20 "> 
          {/* <a href="http://localhost:3000/Events">
            <div
              className={`card ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}                          
            >
              <div className="card hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-22 h-52">
                <div className="card-body">
                  <h2 className="card-header">Event Permissions</h2>
                  <p className="text-content2">
                  Are you looking for conducting an event in the college?
                  </p>
                  <div className="text-6xl flex flex-row-reverse hover:text-blue-950">
                    <HiOutlineArrowLongRight />
                  </div>
                </div>
              </div>
            </div>
          </a> */}
          {/* <a href="http://localhost:3000/Attendance">
            <div className="card hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-22 h-52">
              <div className="card-body">
                <h2 className="card-header">Attendance permission</h2>
                <p className="text-content2">
                Are you looking for Attendance permission for an event?
                </p>
                <div className="text-6xl flex flex-row-reverse hover:text-blue-950  ">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </div>
          </a> */}

          {/* <a href="http://localhost:3000/Pr">
            <div className="card hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-22 h-52">
              <div className="card-body">
                <h2 className="card-header">Pr permission</h2>
                <p className="text-content2">
                Are you looking public relation permission for an event?
                </p>
                <div className="text-6xl flex flex-row-reverse hover:text-blue-950 ">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </div>
          </a> */}
          </div> 
          <div className='flex justify-evenly flex-row gap-10 mt-20'>
           <a href="http://localhost:3000/Audi">
            <div className="card hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-22 h-52">
              <div className="card-body">
                <h2 className="card-header">Auditorium booking</h2>
                <p className="text-content2">
                Are you looking for booking an Auditorium for an event?
                </p>
                <div className="text-6xl flex flex-row-reverse hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </div>
          </a> 
          <a href="http://localhost:3000/AddPermissionLetter">
            <div className="card hover:bg-gray-200 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-96 h-52">
              <div className="card-body">
                <h2 className="card-header"></h2>
                <p className="text-content2 text-5xl pt-4 flex justify-center items-center w-full h-full hover:text-blue-950 ">
                <BiPlusMedical />
                </p>
                
              </div>
            </div>
          </a> 
           </div>
      </div>
    </div>
  );
}
export default Dashboard;
