import PersonProfile from '../../components/PersonProfile';
import data from './data';

const Band = () => {
  return (
    <main className='main'>
      <div className='band-page'>
        {data.map((item) => {
          const { id, img, name, age, desc } = item;
          return (
            <PersonProfile
              key={id}
              img={img}
              name={name}
              age={age}
              desc={desc}
            />
          );
        })}
        <div className='band-page__invite'>
          <h2 className='heading-secondary'>Вы могли бы быть тут!</h2>
        </div>
      </div>
    </main>
  );
};

export default Band;
