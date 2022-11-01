import React from "react";
import Story from "./Story";
import "./StoryList.css";

const StoryList = ({ stories }) => {
  const storyItems = stories.map((story) => {
    return <Story key={story.id} story={story} />;
  });

  return (
    <>
      <ul className="story-list">{storyItems}</ul>
    </>
  );
};

export default StoryList;
