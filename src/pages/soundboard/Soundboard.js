import LocalizedStrings from "react-localization";
import soundboard_loc from "../../assets/localization/soundboard_loc";
import { useSelector } from "react-redux";
import sounds from "./sounds";
import { useState } from "react";
import SinglePersonBoard from "./SinglePersonBoard";

const Soundboard = () => {
  const [currPerson, setCurrPerson] = useState("badai4");
  console.log(sounds);
  console.log(currPerson);

  return (
    <main className='main'>
      <section className='soundboard'>
        <div className='soundboard__button-container'>
          {sounds.map((item) => {
            return (
              <button
                className='soundboard__button soundboard__button--person'
                key={item.id}
                onClick={() => setCurrPerson(item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <SinglePersonBoard name={currPerson} />
      </section>
    </main>
  );
};

export default Soundboard;
