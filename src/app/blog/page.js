import { BlogFeatured, BlogGrid } from '@/components/sections/blog/BlogSections';
import Cta from '@/components/sections/Cta';
import { posts, blogFilters } from '@/data/blog';

export const metadata = {
  title: 'Blog: Marketing and Content Tips for Pune Brands',
  description: 'Practical tips on SEO, ads, social media, UGC, product shoots and ad films, written for business owners in Pune.',
};

export default function BlogPage() {
  return (
    <>
      <div className="inner_top_gap" />
      <BlogFeatured subtitle="Ideas and tips" title="Marketing tips for local brands" posts={posts.slice(0, 3)} />
      <BlogGrid title="All posts" posts={posts} filters={blogFilters} />
      <Cta title="Want help with this?" message="Hi PodShot, I read your blog and want help with my marketing." />
    </>
  );
}
