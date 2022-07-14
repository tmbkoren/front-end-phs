import { useSelector, useDispatch } from "react-redux";
import { toggleLang } from "../features/langSlice";

const LangSelector = () => {
  const currLang = useSelector((state) => state.lang.lang);
  const languages = ["en", "ru"];
  const dispatch = useDispatch();

  return (
    <div className='lang'>
      <button className='lang__btn' onClick={() => dispatch(toggleLang())}>{currLang}</button>
    </div>
  );
};

export default LangSelector;