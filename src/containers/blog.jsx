import React, { useState, useEffect } from 'react';
import * as uuid from 'uuid';
import yaml from 'js-yaml';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/blog.css';
import BlogPost from '../components/blogPost';

export default function Blog(props) {
  const { firebaseRef } = props;
  const history = useHistory();
  const [hiddenInfo, setHiddenInfo] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function showInfo() {
    setHiddenInfo(!hiddenInfo);
  }

  async function readFile(url) {
    //const arrangedUrl = `https://cors-anywhere.herokuapp.com/${url}`;
    const result = await axios.get(url);
    return result.data;
  }

  function compare(a, b) {
    const a1 = a.split('/').reverse().join('');
    const b1 = b.split('/').reverse().join('');
    return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
  }

  useEffect(() => {
    async function loadPostDetails(storageChildRef) {
      const metaDataURL = await storageChildRef.child('info.yml').getDownloadURL();
      const metaData = yaml.safeLoad(await readFile(metaDataURL));
      return { title: metaData.title, date: metaData.date, slug: storageChildRef.location.path };
    }

    const loadAllPosts = async () => {
      const storageRef = firebaseRef.storage.ref();
      const allContents = await storageRef.list({ maxResults: 5 });
      return allContents.prefixes;
    };
    const loadAllPostDetails = async (blogPostDetails) => {
      const result = await Promise.all(blogPostDetails.map(loadPostDetails));
      console.log(result);
      return result;
    };
    if (!loaded) {
      loadAllPosts()
        .then((allBlogPosts) => {
          setAllPosts(allBlogPosts);
          setLoaded(true);
          return allBlogPosts;
        })
        .then((allBlogPosts) => {
          loadAllPostDetails(allBlogPosts).then((allPostDetails) => {
            setPostDetails(allPostDetails);
          });
        });
    }
  }, [firebaseRef, loaded]);

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
      <div style={{ display: 'flex' }}>
        <div style={{ maxWidth: '65%' }}>
          {allPosts
            ? allPosts.map((postRef) => {
              return (
                <BlogPost
                  shortVersion
                  slugOverride={postRef.location.path}
                  key={uuid.v4()}
                  firebaseRef={firebaseRef}
                  storageChildRef={postRef}
                />
              );
            })
            : []}
        </div>
        <div className="postMenu" style={{ maxWidth: '25%' }}>
          All Posts:
          <ul>
            {postDetails
              ? postDetails.sort(compare).map((postDetail) => {
                return (
                  <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => history.push(`blog/${postDetail.slug}`)}
                  >
                    <u>
                      {postDetail.title}
                      {`(${postDetail.date})`}
                    </u>
                  </li>
                );
              })
              : []}
          </ul>
        </div>
      </div>
    </div>
  );
}
