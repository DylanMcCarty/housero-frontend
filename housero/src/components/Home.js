import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                className="img-fluid card-img-top"
                src="./images/house.jpg"
              />

              <div className="card-img-overlay mt-4">
                <div className="row d-flex text-center mt-5">
                  <div className="col">
                    <button
                      className="btn btn-primary mt-5 px-5 py-2 border border-5 border-white"
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
}

export default Home;
