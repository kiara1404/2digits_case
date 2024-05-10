import Link from 'next/link';

import Logo from '../Logo/Logo';

const NavigationBar = () => {
  return (
    <>
      <nav className="mb-px flex size-full h-20 justify-between bg-gradient-to-r from-dark-purple to-light-purple tracking-wider">
        <div className="m-auto flex flex-wrap w-10/12 justify-between">
          <div className=" flex justify-between">
            <Logo />
          </div>

          <ul className="flex pt-4 ">
            <li>
              <Link href="/" className="px-4 text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/blogs" className="px-4 text-white">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
