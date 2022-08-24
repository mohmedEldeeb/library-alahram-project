import React, { useEffect, useState } from 'react'
import { fetchData } from '../APIs/api'

export default function Search(props) {
    const [authorName, setAuthorName]=useState("")
    const [title, setTitle]=useState("")
    const [ books,setBooks]=useState([])
    const [ next , setNext]=useState()
    const [previous ,setPrevious]=useState()
    const [ count ,setCount]=useState()

    useEffect(()=>{
        fetchData(`https://gutendex.com/books?search=${authorName}%20${title}`)
        .then((res)=>{
          setBooks(res.results)
          setNext(res.next)
          setPrevious(res.previous)
          setCount(res.count)
        })
      },[authorName,title])

    const handelAuthorName =(e)=>{
        setAuthorName(e.target.value)
    }
    const handelTitle =(e)=>{
        setTitle(e.target.value)
    }
    
    const handelNext=()=>{
        if(next == null){
          alert("this last bage")
            return
        }
        fetchData(next)
        .then((res)=>{
          setBooks(res.results)
          setNext(res.next)
          setPrevious(res.previous)
          setCount(res.count)
        })
    }
    const handelPrevious=()=>{
        if(previous == null){
          alert("this ferst bage")
            return 
        }
        fetchData(previous)
        .then((res)=>{
          setBooks(res.results)
          setNext(res.next)
          setPrevious(res.previous)
          setCount(res.count)
        })
    }
  return (
    <div>
        <div className='mx-3'>
            <input className='w-[100%]' type="text" onChange={handelAuthorName} value={authorName} placeholder="Search by  author names "  />
            <hr/>
            <input className='w-[100%]' type="text" onChange={handelTitle} value={title} placeholder="Search by title  "  />
            <br/><br/>
        </div>
        {books.length > 0 && <h1 className='text-center'><span>{count}</span> results</h1>}
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Welcome to Project Gutenberg</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {books.map(book=>{
                        return(
                            <div key={book.id}   className="group relative">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                              <img
                                src={book.formats['image/jpeg']}
                                alt="hi"
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                              />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{book.authors[0]?.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{book.title}</p>
                          </div> 
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='flex flex-row mx-4 justify-between mb-9' >
            <button className='block w-16 h-10 text-center rounded-sm border-cyan-50 bg-slate-200' onClick={handelPrevious}>previous</button>
            <button className='block w-16 h-10 text-center rounded-sm border-cyan-50 bg-slate-200' onClick={handelNext} >next</button>
        </div>
    </div>
  )
}
