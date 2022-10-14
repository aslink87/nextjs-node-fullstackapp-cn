import React from 'react';
import styles from './AboutGrid.module.scss';

interface IGridProps {
  text: string;
}

interface IGrid {
  title: string;
  content: IGridProps[];
}

const AboutGrid: React.FC = () => {
  const boardProps: IGrid = {
    title: 'Our Board',
    content: [
      { text: 'Board President: Art Hartman' },
      { text: 'Vice President: Edith Reitkerk' },
      { text: 'Secretary: Jane Adams' },
      { text: 'Treasurer: Dorothy Cool' },
      { text: 'Facilities Management: Larry Hill' },
      { text: 'Education / Resources: Donna Doctor' },
      { text: 'Pastoral Adviser: Joe Shaler' },
      { text: 'Plainwell School Representative: Matt Montange' },
      { text: 'Otsego School Representative: Jeff Haase' },
      { text: 'Business Support: Karen Darby' },
      { text: 'Executive Director: Terri Shaler' },
    ],
  };

  const resourceTeamProps: IGrid = {
    title: 'Resource Development Team',
    content: [
      { text: 'Tim Kellogg' },
      { text: 'Edith Rietkerk' },
      { text: 'Kim Shafer' },
      { text: 'Terri Shaler' },
      { text: 'Shannon Zabaldo' },
    ],
  };

  const financeTeamProps: IGrid = {
    title: 'Finance Team',
    content: [
      { text: 'Dorothy Cool' },
      { text: 'Donna Doctor' },
      { text: 'Art Hartman' },
      { text: 'Larry Wilson' },
      { text: 'Todd Harrell' },
    ],
  };

  return (
    <section className={styles.container} data-testid="aboutgrid-component">
      <div className={styles.content}>
        <h2>{boardProps.title}</h2>
        <div className={styles.gridContainer}>
          {boardProps.content.map((element: IGridProps) => (
            <div key={element.text} className={styles.gridElement}>
              <p>{element.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h2>{resourceTeamProps.title}</h2>
        <div className={styles.gridContainer}>
          {resourceTeamProps.content.map((element: IGridProps) => (
            <div key={element.text} className={styles.gridElement}>
              <p>{element.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h2>{financeTeamProps.title}</h2>
        <div className={styles.gridContainer}>
          {financeTeamProps.content.map((element: IGridProps) => (
            <div key={element.text} className={styles.gridElement}>
              <p>{element.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
