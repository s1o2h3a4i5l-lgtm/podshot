import PackagesTabs from '@/components/sections/PackagesTabs';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import { marketingPlans } from '@/data/packages';
import { faqGroups } from '@/data/faqs';

export const metadata = {
  title: 'Packages and Pricing',
  description: 'Simple monthly marketing plans from PodShot in Pune. SEO, social media, ads and websites, with no hidden costs.',
};

export default function PackagesPage() {
  return (
    <>
      <div className="inner_top_gap" />
      <PackagesTabs
        subtitle="Packages"
        title="Simple plans for your marketing, with no hidden costs."
        groups={[
          { name: 'Marketing', plans: marketingPlans, note: 'Monthly plans. Ad spend is paid directly to Google or Meta. Save with quarterly billing.' },
        ]}
      />
      <Faq title="Questions about packages" items={faqGroups.packages.items} border />
      <Cta title="Need a custom plan?" message="Hi PodShot, I would like a custom package." />
    </>
  );
}
