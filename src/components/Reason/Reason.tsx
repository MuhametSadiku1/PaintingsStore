import React from 'react';

import styles from './Reason.module.scss'

interface ReasonProps {
  imageSrc: string;
  reason: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ imageSrc, reason, description }) => {
  return (
    <div className={styles.reason}>
      <img src={imageSrc} alt="" />
      <h3>{reason}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Reason;
