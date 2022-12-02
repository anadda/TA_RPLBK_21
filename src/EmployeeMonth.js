import React, { useState, useEffect, useRef } from 'react';
import './EmployeeMonth.css';

export default function Index() {

  return (
    <div
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 1
      }}
    >
      <div className='card-detail'>
        <div className="avatar">
          <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="avatar" className="card-img-top" />
        </div>
        <div className="card-desc">
          <p className="name">Muhammad Alifa Ramdhan</p>
          <p><b>Position: </b> CEO</p>
          <p><b>Join Date: </b> 2022-11-05</p>
          <p><b>Email: </b> joe@app.dev</p>
        </div>
      </div> 
    </div>
  );
}
