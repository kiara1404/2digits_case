;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BlogsGroup from '@/app/components/BlogsGroup/BlogsGroup';
import HeroImage from '@/app/components/Hero/HeroImage';
import Tag from '@/app/components/Tag/Tag';
import { PreprSdk } from '@/server/prepr';



import styles from './page.module.css';


export default async function Blog({ params }: { params: { id: string } }) {
  const { Blog } = await PreprSdk.SingleBlog({ blogId: params.id });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { Similar_Blogs } = await PreprSdk.SimilarBlogs({ blogId: params.id, limit: 3 })

  console.log(Similar_Blogs?.items);
  
  return (
    <>
      <HeroImage image={Blog?.banner_image.url || ''} />

      <section className={` m-auto w-10/12 ${styles.wrapper}`}>
        <Tag text={Blog?.categories[0]?.slug || ''} />

        <article>
          <h2 className={styles.title}>{Blog && Blog.title }</h2>

          {Blog?.content?.map((item, index) => (
            <div
              className={styles.content}
              key={index}
              // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
              // @ts-ignore. I don;t know how to fix this error
              dangerouslySetInnerHTML={{ __html: item?.html || '' }}></div>
          ))}
        </article>
      </section>

      {Similar_Blogs && Similar_Blogs.items.length < 0 && (
        <section className="w-full bg-light-gray pt-px">
          <BlogsGroup blogs={Similar_Blogs.items} title="Gerelateerde blogs" />
        </section> 
      )}
    </>
  );
}