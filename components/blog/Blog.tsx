import React from 'react';
import { IBlogData } from 'pages/blog';
import styles from './Blog.module.scss';

const BlogComponent: React.FC<IBlogData> = ({ blogs }) => {
  return <div className={styles.container}>Hello from blogs</div>;
};

export default BlogComponent;
