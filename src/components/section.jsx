import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Section(props) {
  const mapping = {
    name: 'Course Name',
    year: 'Year',
    aims: 'Aims',
    credits: 'Credits',
    prereq: 'Prerequisites',
    lecturer: 'Lecturer/s',
    classes: 'Structure',
    followup: 'Followup Courses',
    syllabus: 'Syllabus',
    txtbooks: 'Textbooks',
    assesment: 'Assesment',
  };
  const { currentActive, tabIndex, sectionName, toggleFocus } = props;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (currentActive === sectionName) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentActive, sectionName]);

  return (
    <li className={active ? 'active' : 'inactive'}>
      <div
        role="option"
        aria-selected={active}
        tabIndex={tabIndex}
        onKeyDown={() => toggleFocus(sectionName)}
        onClick={() => toggleFocus(sectionName)}
      >
        {mapping[sectionName]}
      </div>
    </li>
  );
}
Section.propTypes = {
  currentActive: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  sectionName: PropTypes.string.isRequired,
  toggleFocus: PropTypes.func.isRequired,
};
