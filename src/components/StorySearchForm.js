import React, { useState } from "react";

const StorySearchForm = ({ onInputSearch }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleInputChange = (evt) => {
    setSearchWord(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const wordToSearch = searchWord.trim();
    if (!searchWord) {
      return;
    }

    onInputSearch(wordToSearch);
    setSearchWord("");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form-label" htmlFor="search">
        Filter articles by keyword:
      </label>
      <input
        className="search-form-input"
        type="text"
        id="search"
        placeholder="Enter keyword"
        value={searchWord}
        onChange={handleInputChange}
        required
      ></input>
      <input className="form-submit" type="submit"></input>
    </form>
  );
};

export default StorySearchForm;
