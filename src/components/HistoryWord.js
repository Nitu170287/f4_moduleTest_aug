import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import DisplayData from "./DisplayData";

const HistoryWord = () => {
  const { w } = useParams();
  const history = useSelector((state) => state.history);
  const [wordHistory, setWordHistory] = useState({});

  //   useEffect(() => {
  //     console.log(history);
  //     setWordHistory(history.find((h) => h.word === w));
  //     console.log(wordHistory);
  //   }, [w, history]);

  return (
    <div>
      {JSON.stringify(history)}
      {/* <DisplayData wordDefinetion={wordHistory} /> */}
    </div>
  );
};
export default HistoryWord;
