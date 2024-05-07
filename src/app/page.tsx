/* eslint-disable @typescript-eslint/no-unsafe-call */

import { PreprSdk } from '@/server/prepr';

import HeroImage from './components/Hero/HeroImage';
import NewestBlogs from './components/NewestBlogs/NewestBlogs';

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const { Page } = await PreprSdk.SinglePage({ slug: '/' });
  const { Blogs } = await PreprSdk.Blogs({ limit: 3 });
  // console.log(Blogs.items[0]?.categories.slug);

  return (
    <main>
      
      <HeroImage
        title={Page.page_header.title}
        description={Page.page_header?.text}
        image={Page?.page_header?.image}
        bannerHeight={'large'}
      />

      <NewestBlogs blogs={Blogs?.items} />
    </main>
  );
}
