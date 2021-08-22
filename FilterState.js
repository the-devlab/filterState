import React, { useState } from 'react';

export const FilterState = () => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  return (
    <div style={styles.cardStyle}>
      <h4>What's your favourite coding language?</h4>
      <span>Filter Options</span>
      <select style={styles.select} value={filter} onChange={handleChange}>
        <option value="" disabled="disabled">
          Select Filter Option
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="PHP">PHP</option>
        <option value="Ruby">Ruby</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="Java">Java</option>
      </select>
      <p>
        You Selected: <span style={styles.span}>{filter}</span>
      </p>
    </div>
  );
};

const styles = {
  cardStyle: {
    padding: '1rem 4rem',
    margin: '1rem',
    borderRadius: '15px',
    background: 'rgb(0, 119, 182)',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.4)',
    color: 'rgb(202, 240, 248)',
    fontSize: '1.4rem'
  },
  select: {
    marginLeft: '.5rem',
    padding: '.3rem',
    fontSize: '1.1rem'
  },
  span: {
    color: 'yellow'
  }
};
