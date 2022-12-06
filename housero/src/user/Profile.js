import React from "react"
import { useGlobalState } from "../context/GlobalState";
import Criteria from "../components/Criteria";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  if (state.currentUser) {
      return (
        <div>
          <h1>{state.currentUser.user_id}</h1>
          <Criteria />
        </div>
      )
  }
}

export default Profile