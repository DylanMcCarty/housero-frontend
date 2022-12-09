import React from "react"
import { useGlobalState } from "../context/GlobalState";
import Criteria from "../components/Criteria";
import Homes from "../components/Homes";

const Profile = () => {


  const [ state, dispatch ] = useGlobalState();

  if (state.currentUser) {
      return (
        <div>
          <h1>{state.currentUser.user_id}</h1>
          <Criteria />
          <div className="container-fluid">
            <div className="row">
            </div>
          </div>
        </div>
      )
  }
}

export default Profile