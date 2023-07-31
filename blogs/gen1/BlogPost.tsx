import React from 'react';
import { useRouter } from 'next/router';
import BlogPosts from '../blogData';
import styles from './BlogPost.module.css';
import Image from 'next/image';
import Namecard from './Namecard';

// blogData is a js object containing ID, title, and author of each blog post
// blog posts are saved in their own folder as a content array, and named
// [id number].js, so blogData helps pull identifying info for each

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogPost = BlogPosts.find((post) => post.id === parseInt(id as string));

  // Use dynamic import for BlogContent
  const BlogContent: React.FC[] | null = React.useMemo(() => {
    return id ? require(`../blogPosts/${id}.js`).default : null;
  }, [id]);

  if (!BlogContent) {
    // Handle loading state if BlogContent is not yet loaded
    return <div>Loading...</div>;
  }

  // since we only have two authors we include the two descriptions
  // and images here instead of altering every single object in
  // blogData to include them
  const authorInfo: { [key: string]: { description: string; image: string } } = {
    "Jane Doe": {
      description: "Forager, gardener, mother, and devout mycelium enthusiast.",
      image: "/blogPhotos/janedoe.jpeg",
    },
    "John Doe": {
      description: "Landscape architect with a passion for sustainable design.",
      image: "/blogPhotos/johndoe.jpeg",
    },
  };

  const authInfo = authorInfo[blogPost?.author || ''];

  return (
    <div className={styles['blog-post-container']}>
      <h2 className={styles['bp-title']}>{blogPost?.title}</h2>
      <Image
        src={`/blogPhotos/${id}.jpeg`}
        alt={`Blog Post ${id}`}
        className={styles['blog-post-image']}
        height={500}
        width={750}
      />
      <Namecard
        author={blogPost?.author || ''}
        description={authInfo?.description || ''}
        image={authInfo?.image || ''}
      />
      {BlogContent.map((section, index) => (
        <div key={index} className={styles['blog-content']}>
          <h3 className={styles['bp-heading']}>{section.heading}</h3>
          <p className={styles['bp-p']}>{section.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
