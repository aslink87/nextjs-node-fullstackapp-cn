import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h2>Address</h2>
          <p>282 12th Street Plainwell, MI 49080 PO Box 53</p>
          <h2>Phone</h2>
          <p>1-269-685-4166</p>
          <h2>Fax</h2>
          <p>1-269-685-4178</p>
        </div>
        <div className={styles.footerCenter}>
          <p>Christian Neighbors, &copy;2023</p>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/ChristianNeighborsPlainwell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.icon}
                size="3x"
              />
            </a>
            <a
              href="https://www.instagram.com/christian_neighbors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="fa-icon"
                size="3x"
              />
            </a>
          </div>
        </div>
        <div className={styles.footerRight}>
          <h2>Hours</h2>
          <p>
            <strong>Mon:</strong> 10-Noon, 4-6
          </p>
          <p>
            <strong>Tue:</strong> 10-Noon
          </p>
          <p>
            <strong>Wed:</strong> Closed
          </p>
          <p>
            <strong>Thu:</strong> 2-5
          </p>
          <p>
            <strong>Fri:</strong> Closed
          </p>
          <Link href="/login">
            <a>Staff Login</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
