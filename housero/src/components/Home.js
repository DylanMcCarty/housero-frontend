import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";

function Home() {



  const [ state, dispatch ] = useGlobalState();

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
                <div className="row d-flex text-center mt-5">
                  <div className="col">
                    <button
                      href="/login"
                    >
                      <Link className="btn text-white" to="/login">
                        LOGIN
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex text-center">
            <div className="col">
                HELLO HERE ARE MY PICTURES
            </div>
        </div>

        <div className="row d-flex text-center">
            <div className="col">
                HELLO HERE ARE MY CARDS
            </div>
        </div>
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
                  <h1 className="text-white">Welcome Back {state.currentUser.user_id}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex text-center">
          <div className="col">
              HELLO HERE ARE MY PICTURES
          </div>
      </div>

      <div className="row d-flex text-center">
          <div className="col">
              HELLO HERE ARE MY CARDS
          </div>
      </div>
    </div>
  </main>
  )
}

export default Home;
