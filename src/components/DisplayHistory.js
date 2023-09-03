import React from "react";
import { useSelector } from "react-redux";

const DisplayHistory = () => {
  const history = useSelector((state) => state.history);

  return (
    <div>
      {/* {JSON.stringify(history)} */}
      <h1>Search History</h1>
      {history.map((h) => (
        <div>
          <a href={"/word"}>{h.word}</a>
        </div>
      ))}
    </div>
  );
};

export default DisplayHistory;
