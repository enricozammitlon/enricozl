import React, { useState } from 'react';
import '../css/terminal.css';
import { v4 as uuidv4 } from 'uuid';

export default function Terminal() {
  const [history, setHistory] = useState([
    'Chatbot says: "Hi! I\'m a chatbot here to answer any questions you might have about Enrico."',
  ]);
  const [elementAnchor, setElementAnchor] = useState(null);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const renderHistory = () => {
    const components = history.map((command) => {
      return <li key={uuidv4()}>{command}</li>;
    });
    if (elementAnchor) {
      elementAnchor.scrollIntoView({ behavior: 'smooth' });
    }
    return components;
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      setIsLoading(true);
      setHistory((oldHistory) => [...oldHistory, `You said: "${currentCommand}"`]);
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          setIsLoading(false);
          const result = JSON.parse(xmlhttp.responseText);
          setHistory((oldHistory) => [...oldHistory, `Chatbot says: "${result}"`]);
          if (history.length > 5) {
            history.splice(0, 2);
          }
          setCurrentCommand('');
        } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
          setIsLoading(false);
          setHistory((oldHistory) => [
            ...oldHistory,
            `Chatbot says: "Error with status ${xmlhttp.status} returned from chatbot API."`,
          ]);
          setCurrentCommand('');
        }
      };

      xmlhttp.open(
        'POST',
        'https://us-central1-personal-chatbot-793a5.cloudfunctions.net/chat',
        true
      );
      let myMessage = { message: currentCommand };
      if (currentCommand === '') {
        myMessage = { message: 'Empty' };
      }
      const blob = new Blob([JSON.stringify(myMessage, null, 2)], { type: 'application/json' });
      xmlhttp.send(blob);
    }
  };

  return (
    <div className="terminal">
      <div className="history">
        <ul style={{ margin: 0, marginBlockStart: 0, paddingInlineStart: 0, marginBlockEnd: 0 }}>
          {renderHistory()}
        </ul>
      </div>

      <div className="currentCommand">
        <ul style={{ margin: 0, marginBlockStart: 0, paddingInlineStart: 0, marginBlockEnd: 0 }}>
          <li>
            {isLoading ? (
              [
                <i className="fa fa-cog fa-spin fa-1x fa-fw" />,
                <span className="sr-only">Loading...</span>,
              ]
            ) : (
              <input
                id="command"
                ref={(el) => {
                  setElementAnchor(el);
                }}
                type="text"
                placeholder="Type here..."
                onKeyDown={(event) => handleKeyDown(event)}
                onChange={(event) => setCurrentCommand(event.target.value)}
                value={currentCommand}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
