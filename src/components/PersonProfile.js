const PersonProfile = (props) => {
  const { img, name, age, desc } = props;
  return (
    <div className='person-profile'>
      <div className='person-profile__container person-profile__container--img'>
        <img className='person-profile__img' src={img} alt={name} />
      </div>
      <div className=' person-profile__container person-profile__container--data'>
        <p>
          Позывной : {name}. Возраст: {age}. {desc}
        </p>
      </div>
    </div>
  );
};

export default PersonProfile;
