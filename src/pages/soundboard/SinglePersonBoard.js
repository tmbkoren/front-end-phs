import sounds from "./sounds";

const SinglePersonBoard = ({ name }) => {
  console.log(name);
  const currPerson = sounds.filter((item) => item.name === name);
  console.log(currPerson);

  const playSound = (audio) => {
    new Audio(audio).play();
  };

  if (!name) {
    return (
      <section>
        <h3>press a button</h3>
      </section>
    );
  }

  return (
    <section>
      {name}
      {currPerson[0].sounds.map((item, index) => {
        return <button onClick={() => playSound(item)}>{index + 1}</button>;
      })}
    </section>
  );
};

export default SinglePersonBoard;
