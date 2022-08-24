import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-green-400 h-28 w-[100%]'>
        <h1 className='text-white text-bold text-3xl leading-loose text-center'>Books</h1>
        <div className='flex mx-4 flex-row justify-between' >
            <NavLink to="/"><button className='block w-16 h-10 text-center rounded-sm border-cyan-50 bg-slate-200'>Home</button></NavLink>
            <NavLink to="search"><button className='block w-16 h-10 text-center rounded-sm border-cyan-50 bg-slate-200'>searsh</button></NavLink>
        </div>
    </div>
  )
}
