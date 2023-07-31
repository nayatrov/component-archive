import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './BlogList.module.css';

const cx = classNames.bind(styles);

interface Blog {
  id: number;
  title: string;
}

interface BlogListProps {
  blogs: Blog[] | null | undefined;
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  // Check if blogs is undefined or null
  if (!blogs) {
    return null; // Return null or a placeholder component if blogs is not available
  }

  return (
    <div className={cx('bl-container')}>
      <ul className={cx('bl-ul')}>
        {blogs.map((blog) => (
          <li key={blog.id} className={cx('blog-list-item')}>
            <span className={cx('blog-title')}>{blog.title}</span>
            {/* Use the whole list item as the link */}
            <Link href={`/blog/${blog.id}`} passHref>
              <div className={cx('blog-link')} tabIndex={0}>
                Read
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
