

const DisplayData = ({ wordDefinetion }) => {
  

  return (
    <div>
      <h2>{wordDefinetion.word}</h2>
      <p>{wordDefinetion.phonetic}</p>
      {wordDefinetion.phonetics && wordDefinetion.phonetics.map((p,ind) => (
        <div key={"p"+ind}>
          <audio controls>
            <source src={p.audio} type="audio/mp3" />
          </audio>
          <p>{p.text}</p>
        </div>
      ))}

      {wordDefinetion.meanings && wordDefinetion.meanings.map((meaning,ind) => (
        <div key={"meaning-"+ind}>
          <h3>{meaning.partOfSpeech}</h3>
          {meaning.definitions  && meaning.definitions.map((d,index) => (
            <p key={"d-"+index}>{d.definition}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
