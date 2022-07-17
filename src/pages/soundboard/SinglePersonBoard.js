import sounds from "./sounds";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlay, FaRandom } from "react-icons/fa";
import soundboard_loc from "../../assets/localization/soundboard_loc";
import LocalizedStrings from "react-localization";
import { useSelector } from "react-redux";

const SinglePersonBoard = ({ name }) => {
  const strings = new LocalizedStrings(soundboard_loc);
  const lang = useSelector((state) => state.lang.lang);
  strings.setLanguage(lang);

  const currPerson = sounds.filter((item) => item.name === name)[0];
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    setCurrIndex(0);
  }, [name]);

  const playSound = (audio) => {
    new Audio(audio).play();
  };

  const prevIndex = () => {
    if (currIndex === -1) {
      setCurrIndex(currPerson.sounds.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const nextIndex = () => {
    if (currIndex === currPerson.sounds.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const randomIndex = () => {
    const temp = currIndex;
    const rand = Math.floor(Math.random() * currPerson.sounds.length);
    if (rand !== temp) {
      setCurrIndex(rand);
    } else if (currPerson.sounds.length > 1) {
      randomIndex();
    } else {
      setCurrIndex(rand);
    }
    console.log(rand);
  };

  if (!name) {
    return (
      <section>
        <h3>press a button</h3>
      </section>
    );
  }

  return (
    <div className='soundboard__playback-container'>
      <h2 className='soundboard__playback-container--title'>
        {currPerson.name}
      </h2>
      <h3 className="soundboard__playback-container--amount">
        {`${strings.total} : ${currPerson.sounds.length}`}
      </h3>
      {/*currPerson.sounds.map((item, index) => {
        return <button onClick={() => playSound(item)}>{index + 1}</button>;
      })*/}
      <div className='soundboard__playback-container--control-btn-box'>
        <button
          className='soundboard__playback--control-btn soundboard__button'
          onClick={() => prevIndex()}
        >
          <FaArrowLeft />
        </button>
        <span className='soundboard__playback--index-display'>
          {currIndex + 1}
        </span>
        <button
          className='soundboard__playback--control-btn soundboard__button'
          onClick={() => nextIndex()}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className='soundboard__playback--play-btn-container'>
        <button
          className='soundboard__playback--control-btn soundboard__button'
          onClick={() => randomIndex()}
        >
          <FaRandom />
        </button>
        <button
          className='soundboard__playback--play-btn soundboard__button' 
          onClick={() => playSound(currPerson.sounds[currIndex])}
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default SinglePersonBoard;
