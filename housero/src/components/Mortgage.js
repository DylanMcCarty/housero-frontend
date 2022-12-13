// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import React from 'react'

// export default function Mortgage() {

//     const [data, setData] = useState({
//         homeValue : '',
//         downPayment : '',
//         interestRate : '',
//         duration : '',
//         hoa : '',
//         annualTax : '',
//         annualInsurance : ''
//     })

//     function getMortgage(homeValue, downPayment, interestRate, duration, hoa, annualTax, annualInsurance) {
//         axios.get(`https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${(homeValue - downPayment)}&interest_rate=${interestRate}&duration_years=${duration}&downpayment=${downPayment}&home_value=${homeValue}&monthly_hoa=${hoa}&annual_property_tax=${annualTax}&annual_home_insurance=${annualInsurance}`,
//             {headers: { 
//                 'X-Api-Key': 'DopBAR/v93lcL1VsmnmxYA==V2mfPlBqcab8VniU'
//             }})
//             .then((resp) => {
//                 console.log(resp.data)
//             })
//     }
        
//     const handleChange = (key, value) => {
//         setData({
//             ...data,
//             [key]: value
//             })
//         }
        
    

//   return (
//     <div>
//         <form onSubmit={() => {getMortgage(data.homeValue, data.downPayment, data.interestRate, data.duration, data.hoa, data.annualTax, data.annualInsurance)}} className="row p-4 text-center justify-content-between bg-primary rounded shadow fs-5 text-white fw-bold align-items-center" >
//         <div className="col-2">
//             <label>Home Value</label><br/>
//             <input
//             type={'number'}
//             className='form-control form-control-lg shadow'
//             placeholder={0}
//             onChange={(e) => handleChange('homeValue', e.target.value)}
//             >
//             </input>
//             </div>


//             <div className="col-2">
//             <label>Down Payment</label><br/>
//             <input
//             type={'number'}
//             className='form-control form-control-lg shadow'
//             placeholder={0}
//             onChange={(e) => handleChange('downPayment', e.target.value)}
//             >
//             </input>
//             </div>


//             <div className="col-2">
//             <label>Interest Rate</label>
//             <input
//             placeholder={0}
//             className='form-control form-control-lg shadow'
//             type={'number'}
//             onChange={(e) => handleChange('interestRate', e.target.value)}>   
//             </input>
//             </div>


//             <div className="col-2">
//             <label>Loan Term</label>
//             <select
//             className='form-control form-control-lg shadow'
//             onChange={(e) => handleChange('duration', e.target.value)}>  
//                 <option value={10}>10</option> 
//                 <option value={15}>15</option> 
//                 <option value={20}>20</option> 
//                 <option value={30}>30</option> 
//             </select>
//             </div>


//             <div className="col-2">
//             <label>HOA Fees</label>
//             <input 
//             placeholder={0}
//             type={'number'}
//             className='form-control form-control-lg shadow'
//             onChange={(e) => handleChange('hoa', e.target.value)}
//             ></input>
//             </div>


//             <div className="col-2">
//             <label>Property Tax</label>
//             <input 
//             placeholder={0}
//             type={'number'}
//             className='form-control form-control-lg shadow'
//             onChange={(e) => handleChange('annualTax', e.target.value)}
//             ></input>
//             </div>


//             <div className="col-2">
//             <label>Insurance</label>
//             <input 
//             placeholder={0}
//             type={'number'}
//             step={"any"}
//             min={0}
//             className='form-control form-control-lg shadow'
//             onChange={(e) => handleChange('annualInsurance', e.target.value)}
//             ></input>
//             </div>

//             <input type={'submit'} value={'Get Mortgage'}></input>
//         </form>
//     </div>
//   )
// }
