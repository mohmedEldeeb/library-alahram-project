import './App.css';
import { useEffect, useState } from 'react';

import Pagination from './component/pagination';
import { fetchData } from './APIs/api';
import { Routes, Route } from 'react-router-dom';
import Bage from './component/bage';
import { Home } from './component/home';
import Header from './component/header';
import Search from './component/search';

function App() {
  const [books, setBooks]=useState(null)
  const [next, setNext]=useState(null)
  const [previous, setPrevious]=useState(null)
  const [ howManyBooks , setHowManyBooks]=useState()
  const [ ifSearchBage ,setfsearchBage]=useState(false)

  useEffect(()=>{
    fetchData("https://gutendex.com/books")
    .then((res)=>{
      setBooks(res.results)
      setNext(res.next)
      setPrevious(res.previous)
      setHowManyBooks(res.count)
    })
  },[howManyBooks])

  const handelNext=()=>{
    if(next == null){
      return
    }
    fetchData(next)
    .then((res)=>{
      setBooks(res.results)
      setNext(res.next)
      setPrevious(res.previous)
      setHowManyBooks((res.count / 32))
    })
  }
  const handelPrevious=()=>{
    if(previous == null){
      return 
    }
    fetchData(previous)
    .then((res)=>{
      setBooks(res.results)
      setNext(res.next)
      setPrevious(res.previous)
      setHowManyBooks((res.count / 32))
    })
  }
  return (
    <div >
      <Header />
      <Routes>
          <Route   path="/" element={<Home books={books} />} />
          <Route exact path="books/:bage" element={<Bage />} />
          <Route  path="search" element={<Search />} />
      </Routes>
      {
        window.location.href !== "http://localhost:3000/search" && 
      <Pagination handelPrevious={handelPrevious} handelNext={handelNext} count={howManyBooks} />
      }
    </div>
  );
}

export default App;
