import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex text-5xl ">
        <article>
          <p className=" uppercase text-white ">
            2d<span className="text-5xl uppercase italic tracking-wider text-white">i</span>g
           
            <span className="text-5xl uppercase italic tracking-wider text-white">i</span>
            ts
          </p>
        </article>

        <article className="pt-5 text-xs/[8px] uppercase text-white">
          <p className="pb-0.5 uppercase text-white">Development</p>

          <p className="uppercase text-white">Agency</p>
        </article>
      </div>
    </Link>
  );
};

export default Logo;
