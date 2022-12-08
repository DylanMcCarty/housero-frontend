import React from 'react'
import { useGlobalState } from "../context/GlobalState";
import { useEffect, useState } from 'react';
import request from '../services/api.request';


export default function Criteria() {


  const [rowID, setRowID] = useState()
  const [ state, dispatch ] = useGlobalState();
  const [data, setData] = useState({
      beds: "",
      baths: "",
      max_price: "",
      min_price: "",
      sqft: "",
  })

 


useEffect(() => {
  async function getCriteria() {
    let options = {
      url : `/criteria/`,
      method : 'GET',
      params: {
        'user_id': state.currentUser.user_id,
      }
    }
    let resp = await request(options)
    setData(resp.data[0])
    setRowID(resp.data[0].id)
    console.log(resp.data)
  }
  getCriteria()
}, [])



const handleChange = (key, value) => {
  setData({
    ...data,
    [key]: value
    })
}


async function update(e) {
  e.preventDefault()
  let options = {
    url : `/criteria/${rowID}/`,
    method : 'PATCH',
    data,
  }
  let resp = await request(options)
  setData(resp.data)
  console.log(resp.data)
}

  if (!data) return null



  return (
    <div>
      <form onSubmit={update} >
      
        <label>Beds</label>
        <select
        value={data.beds}
        onChange={(e) => handleChange('beds', e.target.value)}
        >
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5+</option>
          <option value={6}>6+</option>
        </select>

        <label>Baths</label>
        <select
        value={data.baths}
        onChange={(e) => handleChange('baths', e.target.value)}
        >
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>

        <label>max_price</label>
        <input
        type={'number'}
        placeholder={data.max_price}
        onChange={(e) => handleChange('max_price', e.target.value)}>   
        </input>
        <select 
        onChange={(e) => handleChange('max_price', e.target.value)}
        >
          <option value={null}>Any</option>
          <option value={100000}>100,000+</option>
          <option value={200000}>200,000+</option>
          <option value={300000}>300,000+</option>
          <option value={400000}>400,000+</option>
          <option value={500000}>500,000+</option>
        </select>

        <label>min_price</label>
        <input
        type={'number'}
        placeholder={data.min_price}
        onChange={(e) => handleChange('min_price', e.target.value)}>   
        </input>
        <select 
        onChange={(e) => handleChange('min_price', e.target.value)}
        >
          <option value={null}>Any</option>
          <option value={100000}>100,000</option>
          <option value={200000}>200,000</option>
          <option value={300000}>300,000</option>
          <option value={400000}>400,000</option>
          <option value={500000}>500,000</option>
        </select>

        <label>sqft</label>
        <input 
        placeholder={data.sqft}
        onChange={(e) => handleChange('sqft', e.target.value)}
        ></input>

        <input type='submit'></input> 

      </form>
    </div>
  )
}
