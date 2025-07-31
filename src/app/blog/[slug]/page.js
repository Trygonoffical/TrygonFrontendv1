import BlogPostPage from '@/components/pages/BlogPostPage';

export async function generateMetadata({ params }) {
  // In a real app, you'd fetch the blog post data here
  return {
    title: `Blog Post | Trygon`,
    description: 'Read our latest insights on technology and web development.',
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}