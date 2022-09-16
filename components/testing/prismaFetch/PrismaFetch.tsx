import React from 'react';

export interface Hero {
  id?: string;
  content?: string;
}

export interface IPrismaPlaygroundProps {
  heroes: Hero[];
}

const PrismaFetch: React.FC<IPrismaPlaygroundProps> = (props) => {
  return (
    <>
      <ul>
        {props.heroes.map((hero) => {
          return <li key={hero.id}>{hero.content}</li>;
        })}
      </ul>
    </>
  );
};

export default PrismaFetch;
