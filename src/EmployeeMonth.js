import React, { useState, useEffect, useRef } from 'react';
import {useLocation} from 'react-router-dom';
import './EmployeeMonth.css';

export default function Index() {
  const location = useLocation();

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
          <img src={location.state.photo} alt="avatar" className="card-img-top" />
        </div>
        <div className="card-desc">
          <p className="name">{location.state.name}</p>
          <p><b>Position: </b> {location.state.job}</p>
          <p><b>Join Date: </b> {location.state.joinDate}</p>
          <p><b>Email: </b> joe@app.dev</p>
        </div>
      </div> 
    </div>
  );
}
