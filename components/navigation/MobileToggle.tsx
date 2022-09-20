import React from 'react';
import styles from './Navigation.module.scss';

interface IMobileToggleProps {
  // eslint-disable-next-line no-unused-vars
  setMobileActive: (open: boolean) => void;
}

const MobileToggle: React.FC<IMobileToggleProps> = ({ setMobileActive }) => {
  const onClickHandler = () => {
    setMobileActive(true);
  };

  return (
    <div className={styles.mobile}>
      <button
        className={styles.mobileButton}
        id="mobile-toggle"
        onClick={onClickHandler}
      >
        <span className={styles.mobileBar} />
        <span className={styles.mobileBar} />
        <span className={styles.mobileBar} />
      </button>
    </div>
  );
};

export default MobileToggle;
