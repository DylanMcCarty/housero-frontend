import React from "react"
import { useGlobalState } from "../context/GlobalState";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  if (state.currentUser) {
      return (
        <div>
          <h1>{state.currentUser.first_name}</h1>
        </div>
      )
  }
}

export default Profile