import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';
import * as Icon from 'react-feather';
import './Login.css';
const Login = () => {
  return (
    <>
    <div class="p-6 bg-slate-200 h-screen flex justify-center items-center">
      <div class="p-5 flex flex-col h-3/4 w-1/3 bg-white rounded-md shadow-2xl">
        <h1 className='text-xl'>Login </h1>
           <form class=" flex flex-col mt-3" >
            <h1 class="mb-3">user name :</h1>
            <div className=' bg-slate-200 rounded-lg p-3 flex items-center'>
            <Icon.User />
            <input type="text" placeholder='enter user name' className="ml-1 bg-slate-200 input-login" />
            </div>
            <h1 class="mt-3">password :</h1>
            <div className='bg-slate-200 rounded-lg p-3 mt-3 flex items-center'>
            <Icon.Lock />
            <input type="password" placeholder='enter password' class="bg-slate-200 mt-1 ml-1 input-login"/>
            </div>
            <div className='flex flex-col items-start'>
            <input type="submit" class="p-1  border-slate-300 border-2 bg-slate-500 text-white hover:bg-slate-700 rounded-2xl w-1/3 mt-4 cursor-pointer " />
            </div>
             </form>
             <div class="ml-2 mt-3">
             <div className='flex flex-col items-start '>
                <a href='#' class="text-sm">Forgot password ?</a>
            </div>
            <div className='flex flex-col items-start mt-1 '>
                <a href='#' class="text-sm">Get your mentor ID?</a>
            </div>
             </div>
            
      </div>
    </div>
    
    </>
    
  )
}

export default Login
