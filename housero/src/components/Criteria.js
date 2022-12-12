import React from 'react'
import { useGlobalState } from "../context/GlobalState";
import { useEffect, useState } from 'react';
import request from '../services/api.request';
import Homes from './Homes';


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
    console.log(resp)
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
<>
    <div className='container p-3'>
      <form onSubmit={update} className="row p-4 text-center justify-content-between bg-primary rounded shadow fs-5 text-white fw-bold align-items-center" >
      <div className="col-2">
        <label>Beds:</label><br/>
        <select
        className='form-control form-control-lg shadow'
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
        </div>
        <div className="col-2">
        <label>Baths:</label><br/>
        <select
        className='form-control form-control-lg shadow'
        value={data.baths}
        onChange={(e) => handleChange('baths', e.target.value)}
        >
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
        </div>
        <div className="col-2">
        <label>Max Price</label>
        <input
        maxlength="15"
        min="0" 
        max="999999999999999"
        className='form-control form-control-lg shadow'
        type={'number'}
        placeholder={data.max_price}
        list='prices'
        onChange={(e) => handleChange('max_price', e.target.value)}>   
        </input>
        </div>
        <div className="col-2">
        <label>Min Price</label>
        <input
        maxlength="15"
        min="0" 
        max="999999999999999"
        className='form-control form-control-lg shadow'
        type={'number'}
        placeholder={data.min_price}
        onChange={(e) => handleChange('min_price', e.target.value)}>   
        </input>
        </div>
        <div className="col-2">
        <label>Square Feet</label>
        <input 
        maxlength="15"
        min="0" 
        max="99999"
        type={'number'}
        className='form-control form-control-lg shadow'
        placeholder={data.sqft}
        onChange={(e) => handleChange('sqft', e.target.value)}
        ></input>



        
        </div>

        <div className='p-3'>
          <input className='btn btn-secondary' value={'save to profile'} type='submit'></input>
        </div>

      </form>
    </div>

    
    <div className='container-fluid'>
      <div className='row'>
        <Homes data={data} />
      </div>
    </div>
    </>
  )
}
