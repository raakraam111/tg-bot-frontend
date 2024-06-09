import React from 'react';

const DataDisplay = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item, index) => (
        <div key={index} className="data-item">
          <p className="description">{item.description}</p>
          <p className="value">{item.value}</p>
        </div>
      ))} 
    </div>
  );
};

export default DataDisplay;
