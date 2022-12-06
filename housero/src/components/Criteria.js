import React from 'react'
import axios from 'axios'
import { useGlobalState } from "../context/GlobalState";
import { useEffect, useState } from 'react';
import request from '../services/api.request';

export default function Criteria() {

    const [ state, dispatch ] = useGlobalState();
    const [data, setData] = useState({
        baths: "",
        beds: "",
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
      console.log(resp.data)
    }

    getCriteria()
//     axios.get(`https://8000-dylanmccart-houseroback-jwpcvpftuv2.ws-us77.gitpod.io/api/criteria/`)
//         .then((response) => {
            
//             console.log(response.data)
//             setData(response.data);

//         }, (error) => {

//         console.log(error);

//         });
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
    url : `/criteria/4/`,
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
      
        <label>Baths</label>
        <input 
        value={data.baths}
        onChange={(e) => handleChange('baths', e.target.value)}
        ></input>

        <label>Beds</label>
        <input
        value={data.beds}
        onChange={(e) => handleChange('beds', e.target.value)}
        ></input>

        <label>max_price</label>
        <input 
        value={data.max_price}
        onChange={(e) => handleChange('max_price', e.target.value)}
        ></input>

        <label>min_price</label>
        <input 
        value={data.min_price}
        onChange={(e) => handleChange('min_price', e.target.value)}
        ></input>

        <label>sqft</label>
        <input 
        value={data.sqft}
        onChange={(e) => handleChange('sqft', e.target.value)}
        ></input>

        <input type='submit'></input> 

      </form>
    </div>
  )
}
