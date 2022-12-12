// import React, { useState } from 'react'
import { useEffect, useState } from "react";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";
import './Homes.css'
import openheart from '../Assets/heart-solid.png'
import closedheart from '../Assets/closedheart.png'


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




  return userHomes.map((item, i) => {
    return (
      <div id={`Card${i}`} key={item.mlsId.value} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5" >
        {/* <Link to={'/listing/'}> */}
        <div className="card border" id='home-card'>
          <img class="card-img-top" src="./images/placeholder.jpg" alt="Card image cap"/>
          <button id='like-btn' onClick={() => {}}></button>
          <div className="card-body">
            <div className='row'>
              <div className='col'>
                <h3 className="card-title">${item.price.value.toLocaleString('en-US')}</h3>
              </div>
            </div>
            <div className='row align-text-center gap-2'>
              <div className='col-3'>
                <p>{item.beds} Beds</p>
              </div>
              <div className='col-3'>
                {item.baths} Baths
              </div>
              <div className='col col-sm-9 col-lg-4 col-xl-4' >
                Sq. Ft. {item.sqFt.value}
              </div>
                <p>Address: {item.streetLine.value}</p>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#listing${i}`} aria-expanded="false" aria-controls="collapseOne">
                    Property Details
                  </button>
                </h2>
                <div id={`listing${i}`} class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {item.propertyId}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">Home Location: {item.location.value}</div>
        </div>
      {/* </Link> */}

      </div>
    )
  })
}
