import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import { IBlog } from '../lib/types';
import prisma from '../lib/prisma';
import styles from '../styles/Home.module.scss';
import BlogComponent from 'components/blog/Blog';

export interface IBlogProps {
  date: string;
  title: string;
  doc: string;
  index: number;
}

export interface IBlogData {
  blogs: IBlog[];
}

const Blog: NextPageWithLayout<IBlogData> = ({ blogs }) => {
  return (
    <section className={styles.home} data-testid="blog-page">
      <BlogComponent blogs={blogs} />
    </section>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const blogs = await prisma.blog.findMany();

  return {
    props: {
      blogs,
    },
    revalidate: 120,
  };
}
