import React from "react"
import { useGlobalState } from "../context/GlobalState";
import Criteria from "../components/Criteria";
import Homes from "../components/Homes";

const PropertySearch = () => {


  const [ state, dispatch ] = useGlobalState();

  if (state.currentUser) {
      return (
        <div>
          <div className="container-fluid">       
            <Criteria />
          </div>
        </div>
        
      )
  }
}

export default PropertySearch