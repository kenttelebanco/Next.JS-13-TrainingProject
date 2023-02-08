import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { Suspense } from 'react';

function Home() {
  return (
    <Suspense fallback={<p>Loading Page...</p>}>

  <div className="card card_display">
    <div className="card-body">
    <h3 className="card-title">WELCOME TO NEXTJS 13</h3>
    <p className="card-text">A Training Project Developed by Kent Telebanco</p>
  </div>
</div>
    </Suspense>
  )
}

export default Home
