import React, { useState } from 'react'
import { useEffect } from "react";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { Link } from "react-router-dom";

export default function Homes({ data }) { 

  const [ state, dispatch ] = useGlobalState();

  let admins = require('../homes.json');
  let homes = admins.homes
  
  console.log(homes[0])

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
      <div id={`Card${i}`} key={item.mlsId.value} className="col-12 col-md-4 col-xl-3 mt-5" style={{'height': 300}}>
        <Link to={'/listing/'}>
        <div className="card text-center">
          <div className="card-header">Price: ${item.price.value.toLocaleString('en-US')}</div>
          <div className="card-body">
            <h5 className="card-title">Beds: {item.beds} Baths: {item.baths}</h5>
            <p className="card-text">{item.listingRemarks}</p>
          </div>
          <div className="card-footer text-muted">{item.location.value}</div>
        </div>
    </Link>
      </div>
    )
  })
}
