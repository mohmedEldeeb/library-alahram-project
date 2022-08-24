import React, { Suspense, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
export default function Pagination(props) {
    const [total ,setTotal]=useState()
    const [item,setitem]=useState([1,2,3,4,5,6,7,8,9,10])

    useEffect(()=>{
        setTotal(parseInt(props.count /32 || 0))
    },[])

    const onNext=()=>{
        if(item[9] == total){
          alert("this last bage")
            return
        }
        let bages=[]
        item.map(x=>{
            bages.push(x+10)
        })
        setitem(bages)
    }
    const onPrevious=()=>{
        if(item[0] == 1){
          alert("this ferst bage")
            return
        }
        let bages=[]
        item.map(x=>{
            bages.push(x-10)
        })
        setitem(bages)
    }
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
        onClick={props.handelPrevious}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <span onClick={props.handelNext}>Next</span> 
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{total}</span> of{' '}
            <span className="font-medium">{props.count}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span  onClick={onPrevious} className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              
                    {
                        item.map((x)=>{
                        return(<div className='inline-block' key={x}>
                          <NavLink to={`books/${x}`} >
                          {/* <i> */}
                            <i
                            aria-current="page"
                            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                            {x}
                            </i>    
                            {/* </i> */}
                        </NavLink>
                        </div>)
                        }
                        )}
                   
            
            <a
            onClick={onNext}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
