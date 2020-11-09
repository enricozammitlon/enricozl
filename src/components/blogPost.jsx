import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import yaml from 'js-yaml';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function BlogPost(props) {
  const { folderName } = props;
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

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

  async function loadPost(fN) {
    let result = await fetch(`/blog/${fN}/info.yml`);
    const metaData = yaml.safeLoad(await result.text());
    setTitle(metaData.title);
    setDate(metaData.date);
    console.log(metaData.images);
    setImages(metaData.images);
    result = await fetch(`/blog/${fN}/post.md`);
    const postContent = await result.text();
    setContent(postContent);
  }

  useEffect(() => {
    if (!loaded) {
      loadPost(folderName).then(() => {
        setLoaded(true);
      });
    }
  }, [loaded, folderName]);

  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: mql ? 'column' : 'row', alignItems: 'flex-end' }}
      >
        <h1>{title}</h1>

        <span style={{ paddingLeft: '10px' }}>
          <h3>
            <u>{date}</u>
          </h3>
        </span>
      </div>
      <ImageGallery items={images} />
      <ReactMarkdown renderers={renderers} linkTarget="_blank">
        {content}
      </ReactMarkdown>
    </div>
  );
}
BlogPost.propTypes = {
  folderName: PropTypes.string.isRequired,
};
