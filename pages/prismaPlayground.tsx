import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import PrismaFetch, { IPrismaPlaygroundProps } from '../components/testing/prismaFetch/PrismaFetch';

import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';



const PrismaPlayground: NextPageWithLayout = (props) => {
  return (
    <div>
      <div>
        Hello from Prisma Playground
      </div>
      <br />
      <PrismaFetch {...props as IPrismaPlaygroundProps} />
    </div>
  );
};

export default PrismaPlayground;

PrismaPlayground.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export const getServerSideProps = async () => {
  const heroes = await prisma.hero.findMany({
  })
  return {
    props: { heroes: makeSerializable(heroes) },
  }
}
