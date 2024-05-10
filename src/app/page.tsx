/* eslint-disable @typescript-eslint/no-unsafe-call */

import { PreprSdk } from '@/server/prepr';

import NewestBlogs from './components/BlogsGroup/BlogsGroup';
import HeroImage from './components/Hero/HeroImage';

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const { Page } = await PreprSdk.SinglePage({ slug: '/' });
  const { Blogs } = await PreprSdk.Blogs({ limit: 3 });

  return (
    <>
      <HeroImage
        title={Page?.page_header?.title}
        description={Page?.page_header?.text}
        image={Page?.page_header?.image.url || ''}
        bannerHeight={'large'}
      />

      <NewestBlogs blogs={Blogs?.items} title="De nieuwste blogs" />
    </>
  );
}
