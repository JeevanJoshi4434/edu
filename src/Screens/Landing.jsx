import React from 'react';
import { VerticalConfig } from '../Components/Configs/NavConfig';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const Landing = () => {

  return (
  <>
  <div className='flex'>
        <div className='h-screen w-1/4 bg-indigo-950'>
        <div class="flex flex-col">
        
        <button className='bg-indigo-950 p-3 hover:bg-indigo-800 text-xl text-white'>student issues</button>
        <button className='bg-indigo-950 p-3 mt-2 hover:bg-indigo-800 text-xl text-white '>student issues</button>
        <button className='bg-indigo-950 p-3 mt-2 hover:bg-indigo-800 text-xl text-white'>student issues</button>
        <button className='bg-indigo-950 p-3 mt-2 hover:bg-indigo-800 text-xl text-white'>student issues</button>
       </div>
       
        </div>
        <div className='h-14 bg-white shadow-xl w-full'>
          
                <div className='ml-9 grid grid-cols-4 mt-24 gap-4 text-xl'>
                  
                        <div className='bg-white h-40 w-40  rounded-lg  shadow-xl flex flex-col items-center justify-center'>
                          <h1 >register mentor</h1>
                        </div>
                        <div className=' bg-white h-40 w-40  rounded-lg shadow-xl flex flex-col justify-center items-center'>
                          <h1 >create event </h1>
                        </div>
                        <div className='bg-white h-40 w-40  rounded-lg shadow-xl flex flex-col justify-center items-center'>
                          <h1 >provide resources</h1>
                        </div>
                        <div className='bg-white w-40 rounded-lg h-40 shadow-xl flex flex-col justify-center items-center'>
                          <h1>
                            zonal details
                          </h1>
                        </div>
                 
                </div>
                <div className='ml-9 mt-7 h-60 w-11/12 '>
                 <img src="https://datavizcatalogue.com/methods/images/top_images/area_graph.png" alt="" className='shadow-xl' />
                </div>
           
        </div>
  </div>
  </>
   
  )
}

export default Landing
