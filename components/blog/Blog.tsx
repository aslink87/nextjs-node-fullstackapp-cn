import React, { useEffect, useState } from 'react';
import { IBlog } from '../../lib/types';
import { IBlogData } from 'pages/blog';
import styles from './Blog.module.scss';
import Image, { ImageLoaderProps } from 'next/image';

const BlogComponent: React.FC<IBlogData> = ({ blogs }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const imageLoader = ({ src }: { src: ImageLoaderProps | string }) => {
    return `${src}`.split('/')[6];
  };

  return (
    <div className={styles.blogContainer}>
      {hasWindow
        ? blogs
            .sort((a: IBlog, b: IBlog) => {
              return a.date < b.date ? 1 : a.date < b.date ? 1 : 0;
            })
            .map((blog: IBlog) => (
              <div className={styles.blogElement} key={blog.id}>
                <div className={styles.blogTitle}>
                  <h2>{blog.title}</h2>
                </div>
                {blog.img ? (
                  <div className={styles.blogImage}>
                    <Image
                      className={styles.image}
                      src={blog.img}
                      loader={imageLoader}
                      layout="fill"
                      alt="Blog Post Image"
                    />
                  </div>
                ) : null}
                <div className={styles.blogContent}>
                  <p>{blog.content}</p>
                </div>
                {blog.link ? (
                  <div className={styles.blogLink}>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.link.slice(12)}
                    </a>
                  </div>
                ) : null}
                <div className={styles.blogMeta}>
                  <p>Posted on: {blog.date}</p>
                </div>
              </div>
            ))
        : null}
    </div>
  );
};

export default BlogComponent;
