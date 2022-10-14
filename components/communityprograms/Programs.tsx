import React from 'react';
import { programsData, IProgramProps } from './programsData';
import styles from './Programs.module.scss';
import Link from 'next/link';

const Programs: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Community Programs</h1>
      <ul>
        <>
          {programsData.map((program: IProgramProps) => (
            <li key={program.id}>
              <Link href={program.link}>
                <a>{program.title}</a>
              </Link>
              <p>{program.caption}</p>
            </li>
          ))}
        </>
      </ul>
    </section>
  );
};

export default Programs;
