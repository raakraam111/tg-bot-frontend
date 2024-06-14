import React from 'react';
import images from '../constants/images';
import { FaArrowRight } from 'react-icons/fa';

export const FullWidthCard = ({ icon, label, progress }) => {
  return (
    <div className="full-width-card">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={icon} alt="icon" />
        <div>
          <div className='fullwidth-card-label'>{label}</div>
          {/* <div className='fullwidth-card-progress'>{progress}</div> */}
        </div>
      </div>
      {/* <button>
        <img src={images.rightArrow} alt="right arrow" />
      </button> */}
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <FaArrowRight size={20} color="white" />
        </button>

    </div>
  );
};
