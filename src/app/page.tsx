/* eslint-disable @typescript-eslint/no-unsafe-call */
import { log } from 'console';

import { PreprSdk } from '@/server/prepr';

import HeroImage from './components/Hero/HeroImage';
import NewestBlogs from './components/NewestBlogs/NewestBlogs';

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const x = await PreprSdk.Pages({ pageId: '91cf676e-7d9f-45f5-95b4-dc6f6b183b8f' });
  // const y = await PreprSdk.Blogs({ limit: 3 });

  const homePage = await PreprSdk.SinglePage({ slug: '/' });
  const { Blogs } = await PreprSdk.Blogs({ limit: 3 });
  console.log(Blogs);

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
