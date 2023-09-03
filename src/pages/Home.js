import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataLoading,
  dataSuccess,
  dataError,
} from "../redux/actions/dataAction";
import axios from "axios";
import DisplayData from "../components/DisplayData";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const word = useSelector((state) => state.data);

  const dispatch = useDispatch();

  function getData() {
    dispatch(dataLoading());
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch}`)
      .then((response) => {
        dispatch(dataSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => dispatch(dataError(error.message)));
  }

  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          className="searchinput"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button onClick={getData}>Search</button>
      </div>

      {/* <p>{JSON.stringify(word)}</p> */}
      {word && word.length > 0 ? (
        <DisplayData wordDefinetion={word[0]} />
      ) : null}
    </div>
  );
};

export default Home;
