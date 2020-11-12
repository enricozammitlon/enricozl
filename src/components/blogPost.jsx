import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import yaml from 'js-yaml';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';

import 'react-image-gallery/styles/css/image-gallery.css';
import Firebase from './Firebase';

export default function BlogPost(props) {
  const { firebaseRef, shortVersion } = props;
  const history = useHistory();
  let { slug } = useParams();
  let slugOverride;
  if (!slug) {
    slugOverride = props.slugOverride;
    slug = slugOverride;
  }
  const storageChildRef = firebaseRef.storage.ref().child(slug);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function readFile(url) {
    const arrangedUrl =
      process.env.REACT_APP_ENV === 'prod' ? url : `https://cors-anywhere.herokuapp.com/${url}`;
    const result = await axios.get(arrangedUrl);
    return result.data;
  }

  const mql = window.matchMedia('(max-width:400px)').matches;

  const renderers = {
    code: ({ value }) => {
      return (
        <SyntaxHighlighter
          showLineNumbers
          style={dark}
          language="cpp"
          customStyle={{
            fontSize: '14px',
          }}
          codeTagPros={{
            style: {
              fontSize: 'inherit',
            },
          }}
        >
          {value}
        </SyntaxHighlighter>
      );
    },
  };

  const shorten = (text) => {
    return text.substring(text.indexOf('##'), text.indexOf('##', text.indexOf('##') + 2));
  };

  useEffect(() => {
    async function loadPost() {
      let metaDataURL;
      try {
        metaDataURL = await storageChildRef.child('info.yml').getDownloadURL();
      } catch (error) {
        history.push('/blog');
      }
      const metaData = yaml.safeLoad(await readFile(metaDataURL));
      setTitle(metaData.title);
      setDate(metaData.date);

      const blogPostURL = await storageChildRef.child('post.md').getDownloadURL();
      let postContent = await readFile(blogPostURL);
      if (shortVersion) {
        postContent = shorten(postContent);
      }
      setContent(postContent);

      const imageRefs = await storageChildRef.child('assets').listAll();
      Promise.all(
        imageRefs.items.map(async (imageRef) => {
          return { original: await imageRef.getDownloadURL() };
        })
      ).then((imageList) => {
        setImages(imageList);
      });
    }
    if (!loaded) {
      loadPost().then(() => {
        setLoaded(true);
      });
    }
  }, [storageChildRef, loaded, date, history, shortVersion, title]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: mql || shortVersion ? 'column' : 'row',
          alignItems: 'flex-end',
        }}
      >
        <h1 style={{ cursor: 'pointer' }} onClick={() => history.push(slugOverride || slug)}>
          {shortVersion ? '> ' : ''}
          <u>{title}</u>
        </h1>

        <span style={{ paddingLeft: '10px' }}>
          <h3>
            <u>{date}</u>
          </h3>
        </span>
      </div>
      {shortVersion ? (
        images.length > 0 && (
          <img src={images[0].original} style={{ maxWidth: '75%' }} alt="Setup" />
        )
      ) : (
        <ImageGallery items={images} />
      )}
      <ReactMarkdown renderers={renderers} linkTarget="_blank">
        {content}
      </ReactMarkdown>
    </div>
  );
}
BlogPost.defaultProps = {
  shortVersion: false,
};
BlogPost.propTypes = {
  shortVersion: PropTypes.bool,
  firebaseRef: PropTypes.instanceOf(Firebase).isRequired,
};
