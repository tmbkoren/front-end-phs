import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langIndex: 1,
  langs: ["en", "ru"],
  lang: "ru",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      if (state.langIndex === 1) {
        state.langIndex = 0;
      } else {
        state.langIndex += 1;
      }
      state.lang = state.langs[state.langIndex];
    },
  },
});

export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;
