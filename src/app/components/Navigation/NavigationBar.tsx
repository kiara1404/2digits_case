import Logo from '../Logo/Logo';

const NavigationBar = () => {
  return (
    <>
      <nav className="font-barlow mb-px flex h-20 w-full w-full justify-between bg-gradient-to-r from-dark-purple to-light-purple tracking-wider">
        <div className="m-auto flex w-10/12 justify-between">
          <div className=" flex justify-between">
            <Logo />
          </div>
          <ul className="flex pt-4">
            <li>
              <a className="px-4 text-white">Home</a>
            </li>
            <li>
              <a className="px-4 text-white">Blogs</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
