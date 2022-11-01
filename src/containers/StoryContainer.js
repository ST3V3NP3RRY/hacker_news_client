import React, { useState, useEffect } from "react";
import StoryHeader from "../components/StoryHeader";
import StoryList from "../components/StoryList";
import StorySearchForm from "../components/StorySearchForm";

const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => res.json())
      .then((data) => setStoryIds(data));

    const promises = storyIds.splice(0, 49).map((storyId) => {
      return fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      ).then((res) => res.json());
    });

    Promise.all(promises).then((data) => {
      setStories(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //search story.title for wordToSearch
  //if wordTosearch in story.Title return story

  const onInputSearch = (wordToSearch) => {
    const copyStories = [...stories];
    const filteredStories = copyStories.filter((story) =>
      story.title.includes(wordToSearch)
    );
    setStories(filteredStories);
  };

  return (
    <>
      <StoryHeader />
      <StorySearchForm onInputSearch={onInputSearch} />
      <StoryList stories={stories} />
    </>
  );
};

export default StoryContainer;
