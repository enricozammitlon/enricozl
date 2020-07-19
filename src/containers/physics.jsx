/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import '../css/module.css';
import Section from '../components/section';
import config from '../config';

export default function Physics() {
  const [currentActive, setCurrentActive] = useState('aims');
  const [direction, setDirection] = useState('down');
  const [modulesLoading, setModulesLoading] = useState(false);
  const [infoLoading, setInfoLoading] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [prevId, setPrevId] = useState('');
  const [modules, setModules] = useState([]);
  const [moduleInfo, setModuleInfo] = useState({});

  const renderModuleRow = () => {
    const content = [];
    for (let i = 0; i <= modules.length - 1; i += 1) {
      content.push(
        <tr
          id={modules[i].id}
          className={currentId === modules[i].id ? 'active' : ''}
          onClick={(e) => setCurrentId(e.target.parentNode.id)}
        >
          <td data-th="Module-ID">{modules[i].id}</td>
          <td data-th="Name">{modules[i].name}</td>
          <td data-th="Year">{modules[i].year}</td>
        </tr>
      );
    }
    return content;
  };

  const compareDescending = (a, b) => {
    if (a.year > b.year) {
      return -1;
    }
    if (a.year < b.year) {
      return 1;
    }
    return 0;
  };

  const compareAscending = (a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  };

  const reOrder = () => {
    const oldOrder = modules;
    let newOrder;
    if (direction === 'down') {
      newOrder = [...oldOrder].sort(compareAscending);
      setDirection('up');
      setModules(newOrder);
    } else {
      newOrder = [...oldOrder].sort(compareDescending);
      setDirection('down');
      setModules(newOrder);
    }
  };

  const renderTable = () => {
    return (
      <table id="tab" className="rwd-table">
        <thead>
          <tr>
            <th>Module ID</th>
            <th>
              Name
              <i id="showInfoText" className="fa fa-info-circle" style={{ fontSize: '20px' }} />
            </th>
            <th id="sortYear">
              Year
              <span
                role="switch"
                aria-checked={direction === 'up'}
                tabIndex={0}
                onKeyDown={reOrder}
                onClick={reOrder}
                id="sortYearIcon"
              >
                <i className={`fa fa-chevron-${direction}`} />
              </span>
            </th>
          </tr>
        </thead>
        {modulesLoading ? (
          <div style={{ textAlign: 'center' }}>
            <i className="fa fa-cog fa-spin fa-1x fa-fw" />
            <p>Loading...</p>
          </div>
        ) : (
          <tbody>{renderModuleRow()}</tbody>
        )}
      </table>
    );
  };

  const showSectionNames = () => {
    const content = [];
    const sections = moduleInfo
      ? Object.keys(moduleInfo).sort((a, b) => {
          return a < b ? -1 : a > b ? 1 : 0;
        })
      : [];
    if (infoLoading) {
      return (
        <li>
          <i className="fa fa-cog fa-spin fa-1x fa-fw" />
          <p>Loading...</p>
        </li>
      );
    }
    for (let i = 0; i <= sections.length - 1; i += 1) {
      const currentSection = sections[i];
      content.push(
        <Section
          tabIndex={i}
          currentActive={currentActive}
          sectionName={currentSection}
          toggleFocus={(name) => {
            setCurrentActive(name);
          }}
        />
      );
    }
    return content;
  };

  const renderList = (list) => {
    const content = [];
    for (let i = 0; i <= list.length - 1; i += 1) {
      content.push(<li>{list[i]}</li>);
    }
    return content;
  };

  const renderInfo = () => {
    return (
      <div id="abstract" className="abstract">
        <div className="wrapper">
          <div className="grid clearfix">
            <div className="right">
              <div className="content">
                <div className="tab-content">
                  <ul className="list-inline clearfix">{showSectionNames()}</ul>
                  {infoLoading ? (
                    <div style={{ textAlign: 'center' }}>
                      <i className="fa fa-cog fa-spin fa-1x fa-fw" />
                      <p>Loading...</p>
                    </div>
                  ) : (
                    <p id="result">
                      {moduleInfo
                        ? typeof moduleInfo[currentActive] === 'object'
                          ? renderList(moduleInfo[currentActive])
                          : moduleInfo[currentActive]
                        : ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (modules.length === 0) {
      const xmlhttp = new XMLHttpRequest();
      setModulesLoading(true);
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          setModulesLoading(false);
          const result = JSON.parse(xmlhttp.responseText).sort(compareDescending);
          setModules(result);
          setCurrentId(result[0].id);
        }
      };
      xmlhttp.open('GET', config.API_URL, true);
      xmlhttp.send();
    }
  }, [modules]);

  useEffect(() => {
    if (prevId !== currentId) {
      const xmlhttp = new XMLHttpRequest();
      setInfoLoading(true);
      setPrevId(currentId);
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const result = JSON.parse(xmlhttp.responseText);
          setModuleInfo(result.data);
          setInfoLoading(false);
        }
      };

      xmlhttp.open('GET', `${config.API_URL}/${currentId}`, true);
      xmlhttp.send();
    }
  }, [currentId, prevId]);
  return (
    <div>
      <h2>My Physics Portfolio</h2>
      <p>
        I graduated with an Upper Second Class Honours in (MPhys) Physics with Theoretical Physics
        in July, 2020 from The University of Manchester.
      </p>
      <h3>My University Modules</h3>
      <p>
        Below is an interactive table of the modules I took at university. The list is still
        non-exhaustive since there is no API I could use so I had to manually scrape them and that
        takes time I do not have!. Please click on the name of a module to see information about it.
      </p>
      <div className="panel">
        {renderInfo()}
        {renderTable()}
      </div>
    </div>
  );
}
