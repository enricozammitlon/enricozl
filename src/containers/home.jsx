import React from 'react';
import Terminal from '../components/terminal';

export default function Home() {
  return (
    <div>
      <div id="signature" />
      <div className="middle-circle">
        <h1 className="giant">Hi there!</h1>
        <p className="large">
          I&apos;m
          <strong> Enrico. </strong>
          &nbsp;I love creating, unpacking, analysing and tinkering with any technologies and
          devices. Make sure to ask the chatbot below questions about me if you want to find out
          more. Please let me know if you find any bugs and if you want to reach out or work on
          something, please do contact me. I&apos;m always looking for something to do!
        </p>
        <Terminal />
      </div>
    </div>
  );
}
