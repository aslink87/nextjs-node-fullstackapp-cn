import React, { useState } from 'react';
import styles from './Navigation.module.scss';

const MobileToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggle = isOpen ? styles.mobileButtonOpen : styles.mobileButton;
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobile}>
      <button
        className={mobileToggle}
        id="mobile-toggle"
        onClick={onClickHandler}
      >
        <span className={styles.mobileBar1} />
        <span className={styles.mobileBar2} />
      </button>
    </div>
  );
};

export default MobileToggle;
