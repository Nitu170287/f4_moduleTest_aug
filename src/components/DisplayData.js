

const DisplayData = ({ wordDefinetion }) => {
  

  return (
    <div>
      <h2>{wordDefinetion.word}</h2>
      <p>{wordDefinetion.phonetic}</p>
      {wordDefinetion.phonetics && wordDefinetion.phonetics.map((p) => (
        <>
          <audio controls>
            <source src={p.audio} type="audio/mp3" />
          </audio>
          <p>{p.text}</p>
        </>
      ))}

      {wordDefinetion.meanings && wordDefinetion.meanings.map((meaning) => (
        <>
          <h3>{meaning.partOfSpeech}</h3>
          {meaning.definitions  && meaning.definitions.map((d) => (
            <p>{d.definition}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default DisplayData;
