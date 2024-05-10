/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { getBlogs } from '@/server/actions/getBlogs';
import { PreprSdk } from '@/server/prepr';

import Client from '../components/ClientComponent/Client';
import HeroImage from '../components/Hero/HeroImage';

export default async function Blogs({ searchParams }: { searchParams?: { query?: string } }) {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['test'],
  //   queryFn: () => getBlogs(),
  // });
  const query = searchParams?.query || '';
  console.log('query', query);

  const { Page } = await PreprSdk.SinglePage({ slug: 'blog' });
  const { Blogs } = await PreprSdk.Blogs({ where: { _search: query } });
  const categories = Blogs?.items.map((blog) => blog.categories[0]?.slug) || [];

  // eslint-disable-next-line unicorn/no-array-reduce
  const reducedCategories = categories.reduce<string[]>((result, category) => {
    if (!result.includes(category)) {
      result.push(category);
    }
    return result;
  }, []);

  return (
    <>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <HeroImage
        title={Page && Page.page_header?.title}
        description={Page && Page.page_header?.text}
        image={Page?.page_header?.image}
      />

      <Client categories={reducedCategories} blogs={Blogs}></Client>
      {/* </HydrationBoundary> */}
    </>
  );
}
