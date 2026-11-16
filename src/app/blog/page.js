import { BlogHero, BlogGrid } from '@/components/sections/blog/BlogSections';
import Cta from '@/components/sections/Cta';
import { posts, blogFilters } from '@/data/blog';

export const metadata = {
  title: 'Blog: Marketing and Content Tips for Pune Brands',
  description: 'Practical tips on SEO, ads, social media, UGC, product shoots and ad films, written for business owners in Pune.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} filters={blogFilters} />
      <Cta title="Want help with this?" message="Hi PodShot, I read your blog and want help with my marketing." />
    </>
  );
}
