/* eslint-disable @typescript-eslint/no-unsafe-call */
import { log } from 'console';

import { PreprSdk } from '@/server/prepr';

import HeroImage from './components/Hero/HeroImage';
import NewestBlogs from './components/NewestBlogs/NewestBlogs';

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const homePage = await PreprSdk.SinglePage({ slug: '/' });
  const { Blogs } = await PreprSdk.Blogs({ limit: 3 });
  // console.log(Blogs.items[0]?.categories.slug);
  

  return (
    <main>
      <HeroImage
        title={homePage.Page.page_header.title}
        description={homePage.Page.page_header?.text}
      />
      <NewestBlogs blogs={Blogs?.items} />
    </main>
  );
}
