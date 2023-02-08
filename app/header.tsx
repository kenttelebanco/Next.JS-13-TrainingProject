import '../styles/header.css';
import Link from 'next/link';
import React from 'react';


function header() {
  return (
    <header className='head_directory p-4 bg-black text-white'>
      <p>Welcome To NextJS</p>
      <div className="head_nav">
      <Link href="/" className="p-4 text-white">Home</Link>
      <Link href="/todos/" className="p-4 text-white">Todos</Link>
      <Link href="/search/" className="p-4 text-white">Search</Link>
      </div>
      </header>
  );
}

export default header;
