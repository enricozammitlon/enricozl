import React, { useState } from 'react';
import '../css/blog.css';
import BlogPost from '../components/blogPost';

export default function Blog() {
  const [hiddenInfo, setHiddenInfo] = useState(true);

  function showInfo() {
    setHiddenInfo(!hiddenInfo);
  }

  return (
    <div>
      <div className="title-bar">
        <h2>My Thought Repository</h2>
        <i
          className="fa icon alt fa-question-circle"
          style={{ paddingLeft: '10px' }}
          onClick={() => showInfo()}
        />
      </div>

      <p className={hiddenInfo ? 'hidden' : ''}>
        This is a place where I write about any projects I have currently going on but also any
        experiences or thoughts I might have. As of now, I think I&apos;m going to keep this space
        purely about technology or technology related topics and not a personal journal. That does
        not mean I will not riddle the blog posts with personal opinions and thoughts. Enjoy!
      </p>
      <BlogPost folderName="arduino-auto-watering-system" />
    </div>
  );
}
