import LocalizedStrings from "react-localization";
import error_loc from "../assets/localization/error_loc";
import { useSelector } from "react-redux";

const Error = ({ error }) => {
  const strings = new LocalizedStrings(error_loc);
  const lang = useSelector((state) => state.lang.lang);
  strings.setLanguage(lang);

  const detectError = (error) => {
    switch (error) {
      case 404:
        return strings.error404_msg;

      default:
        return strings.errorUnknown;
    }
  };

  const error_msg = detectError(error);

  return (
    <main className='error'>
      <h1>{`${strings.error} ${error}`}</h1>
      <p>{error_msg}</p>
    </main>
  );
};

export default Error;
