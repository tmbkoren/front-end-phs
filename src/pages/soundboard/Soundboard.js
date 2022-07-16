import LocalizedStrings from "react-localization";
import soundboard_loc from "../../assets/localization/soundboard_loc";
import { useSelector } from "react-redux";
import sounds from "./sounds";
import { useState } from "react";
import SinglePersonBoard from "./SinglePersonBoard";

const Soundboard = () => {

    const [currPerson, setCurrPerson] = useState('');
    console.log(sounds);
    console.log(currPerson);

    return (
        <main className="main">
            {sounds.map((item) => {
                return(
                    <button key={item.id} onClick={() => setCurrPerson(item.name)}>{item.name}</button>
                );
            })}
            <SinglePersonBoard name={currPerson} />
        </main>
    );
}

export default Soundboard;