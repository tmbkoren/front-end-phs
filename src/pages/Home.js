import LocalizedStrings from 'react-localization';
import home_loc from '../assets/localization/home_loc';
import { useSelector } from 'react-redux';
import DiscordBanner from '../components/DiscordBanner';

const Home = () => {
  const strings = new LocalizedStrings(home_loc);
  const lang = useSelector((state) => state.lang.lang);
  strings.setLanguage(lang);

  return (
    <main className='main'>
      <div className='home-page'>
        <div className='header-container'>
          <h1 className='heading-primary'>{strings.welcome}</h1>
        </div>
        <div className='home-page__discord-banner'></div>
      </div>
    </main>
  );
};

export default Home;
