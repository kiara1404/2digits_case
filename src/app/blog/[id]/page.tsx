;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { PreprSdk } from '@/server/prepr';
import HeroImage from '@/app/components/Hero/HeroImage';

export default async function Blog({ params }: { params: { id: string } }) {
    const { Blog } = await PreprSdk.SingleBlog({ blogId: params.id });
    console.log(Blog?.banner_image.url);

  return (
    <>
      <HeroImage
        image={Blog?.banner_image.url || ""}
        changeBanner
      />

    </>
  );
}