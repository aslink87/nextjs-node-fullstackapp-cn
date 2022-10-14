import Link from 'next/link';
import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../Assistance.module.scss';

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <h1>Educational Assistance</h1>
      <h2>Education Videos</h2>
      <div className={styles.videoContainer}>
        <div className={styles.videoElement}>
          <div className={styles.videoCaption}>
            <h2>Budgeting Course</h2>
            <p>
              In this 6-part course we work with you so that you can take better
              control of your finances. We discuss what makes up a budget to
              include income and expenses. We continue by pointing out a few
              techniques to manage your expenses. Then conclude with a practice
              budget build. If you&apos;d like to work with us on your budget or
              to continue this discussion please reach out to us.
            </p>
            <p>
              View the full playlist here:{' '}
              <Link href="https://vimeo.com/showcase/7323588">
                <a>Budgeting Course Playlist</a>
              </Link>
            </p>
          </div>
          <div className={styles.videoContainer}>
            <ReactPlayer
              className="playlistPlayer"
              url="https://vimeo.com/showcase/7695266/"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
        <div className={styles.videoElement}>
          <div className={styles.videoCaption}>
            <h2>All Our Educational Videos</h2>
            <p>
              Here is the playlist that includes all of our education videos. We
              work very hard on these hoping that they can help our neighbors.
              If you know of someone who would enjoy watching one of these
              please share.
            </p>
            <p>
              View the full playlist here:{' '}
              <Link href="https://vimeo.com/showcase/7323588">
                <a>All our Education Video</a>
              </Link>
            </p>
          </div>
          <div className={styles.videoContainer}>
            <ReactPlayer
              className="playlistPlayer"
              url="https://vimeo.com/showcase/7323588/"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.educationLower}>
        <h2>
          We strive to educate our clients and our community through several
          methods...
        </h2>
        <p>Everyone is welcome - no residency restriction.</p>
        <h2>Take Control Classes</h2>
        <p>
          Six week course on basic financial skills offered throughout the year.
          Receive a gas voucher after each class you attend (1 per household)
        </p>
        <h2>Financial Mentoring</h2>
        <p>
          One-to-one confidential financial counsel from trained volunteers. How
          you would like to improve your finances. You will then be matched up
          with a trained volunteer to assist you with reaching your goals.
        </p>
        <h2>A Matter of Balance: Managing Concerns About Falls</h2>
        <p>
          Award winning program designed to manage falls and increase activity
          levels. Call for more information and future classes.
        </p>
        <h2>Connections</h2>
        <p>
          Skill building and social opportunities offered 6-8 times a year. The
          goal is to spend time together, doing something fun, while learning
          something new. These are all FREE with supplies provided. All events
          are held at Christian Neighbors, 282 12th Street, Plainwell, MI 49080,
          unless otherwise noted{' '}
          <strong>
            If you are interested in any of these events contact us at:{' '}
            <a href="mailto:info@christianneighbors.org">
              info@christianneighbors.org
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Education;
