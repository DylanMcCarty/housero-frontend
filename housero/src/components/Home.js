import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import Mortgage from "./Mortgage";

function Home() {



  const [ state, dispatch ] = useGlobalState();

  const [data, setData] = useState([])

  useEffect(() => {
    async function getCriteria() {
      let options = {
        url : `/user/${state.currentUser.user_id}`,
        method : 'GET',
      }
      let resp = await request(options)
      console.log(resp.data)
      setData(resp.data)
    }
    getCriteria()
  }, [])

  if (!state.currentUser) 
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                alt="hero"
                className="img-fluid card-img-top"
                src="./images/herobanner.jpg"
              />

              <div className="card-img-overlay mt-4">
                  <div className="col">
                    <h1>We'd like to help you find a Rental Property</h1>
                    <h3 className=" mt-5">Sign Up or Login to start</h3>
                  </div>
                <div style={{'height': 400}} className="row d-flex text-center mt-5 justify-content-center align-content-center">
                  <div className="col-2">
                      <Link className="btn bg-primary pt-3 px-5 pb-3"  to="/login">
                        Login
                      </Link>
                  </div>
                  <div className="col-2">
                    <Link style={{'width': 135}} className="btn bg-primary pt-3 pb-3" to='/register'>
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="row d-flex text-center">
            <div className="col">
                HELLO HERE ARE MY PICTURES
            </div>
        </div>

        <div className="row d-flex text-center">
            <div className="col">
                HELLO HERE ARE MY CARDS
            </div>
        </div> */}
      </div>
    </main>
  );

  else return (
    <main>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <img
              alt="hero"
              className="img-fluid card-img-top"
              src="./images/herobanner.jpg"
            />

            <div className="card-img-overlay mt-4">
              <div className="row d-flex text-center mt-5">
                <div className="col">
                  <h1 className="text-white">Welcome Back {data.first_name}</h1>
                </div>
                <div>
                  <h4 className="mt-5 text-white">Let's jump right into finding your dream property</h4>
                </div>
                <div>
                  <Link className="btn bg-primary text-white mt-5" to="/propertysearch">
                  Property Search 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Home;
