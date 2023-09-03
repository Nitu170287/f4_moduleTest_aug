import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import DisplayData from "./DisplayData";

const HistoryWord = () => {
  const { w } = useParams();
  const history = useSelector((state) => state.history);
  const [wordHistory, setWordHistory] = useState({});

    useEffect(() => {
      
      setWordHistory(history.find((h) => h.word === w));
     
    }, [w, history]);

  return (
    <div>
      {/* {JSON.stringify(history)} */}
      {
        history.length > 0 ? <DisplayData wordDefinetion={wordHistory} /> : null
      }
      
    </div>
  );
};
export default HistoryWord;
