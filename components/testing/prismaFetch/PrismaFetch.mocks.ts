import { Hero, IPrismaPlaygroundProps } from "./PrismaFetch";

const heroes = [{
  id: '1',
  content: 'Check out this awesome content',
} as Hero];

const props: IPrismaPlaygroundProps = {
  heroes
}

export const mockPrismaFetchProps = {
  props,
};
