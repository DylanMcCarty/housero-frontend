// import React, { useState } from 'react'
import { useEffect, useState } from "react";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";
import './Homes.css'


export default function Homes({ data }) { 

  const [ state, dispatch ] = useGlobalState();


  let admins = require('../homes.json');
  let homes = admins.homes

  let userHomes = homes
  
  if (data) {
    userHomes = userHomes.filter((item) => 
      item.beds >= data.beds
      &&
      item.baths >= data.baths 
      &&
      item.price.value >= data.min_price
      &&
      item.price.value <= data.max_price
      &&
      item.sqFt.value >= data.sqft
    )
  }




  return userHomes.map((home, i) => {
    return (
      <div id={`Card${i}`} key={home.mlsId.value} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5" >
        {/* <Link to={'/listing/'}> */}
        <div className="card border" id='home-card'>
          <img class="card-img-top" src="./images/placeholder.jpg" alt="Card image cap"/>
          <div className="card-body">
            <div className='row'>
              <div className='col'>
                <h3 className="card-title">${home.price.value.toLocaleString('en-US')}</h3>
              </div>
            </div>
            <div className='row align-text-center gap-2'>
              <div className='col-3'>
                <p>{home.beds} Beds</p>
              </div>
              <div className='col-3'>
                {home.baths} Baths
              </div>
              <div className='col col-sm-9 col-lg-4 col-xl-4' >
                Sq. Ft. {home.sqFt.value}
              </div>
                <p>Address: {home.streetLine.value}</p>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-home">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#listing${i}`} aria-expanded="false" aria-controls="collapseOne">
                    Property View
                  </button>
                </h2>
                <div id={`listing${i}`} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <iframe src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyApA5AQxWh6eE5mTySdjV_OpdHm1IqAsIw&location=${home.latLong.value.latitude},${home.latLong.value.longitude}&heading=210&pitch=10&fov=25`} width="300" height="200" style={{"border": 0}} allowfullscreen="True" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">Price per SquareFt: ${home.pricePerSqFt.value}</div>
        </div>
      {/* </Link> */}

      </div>
    )
  })
}
