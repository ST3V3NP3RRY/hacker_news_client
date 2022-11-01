import React from "react";
import "./Story.css";

const Story = ({ story }) => {
  return (
    <li className="story-item" key={story.id}>
      <p>
        <strong>Title:</strong> {story.title}
      </p>
      <p>
        <strong>Author:</strong> {story.by}{" "}
        <a href={story.url}> Read Now &gt; </a>
      </p>
    </li>
  );
};

export default Story;
