import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../APIs/api'
import Book from './book';

export default function Bage() {
    const [books, setBooks]=useState(null)
    let { bage } = useParams();
  useEffect(()=>{
    fetchData(`https://gutendex.com/books?page=${bage}`)
    .then((res)=>{
      setBooks(res.results)
    })
  },[bage])
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Welcome to Project Gutenberg</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {books !=  null && books.map(book=>{
        return ( <Book key={book.id} data={book} />)
        })}
        </div>
      </div>
    </div>

  )
}
