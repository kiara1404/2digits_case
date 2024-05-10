
const Footer = () => {
  return (
    <footer className=" flex h-20 size-full justify-between bg-gradient-to-r from-dark-purple to-light-purple tracking-wider">
      <div className="m-auto flex w-10/12 justify-between">
        <ul className="flex pt-4">
          <li>
            <a className="px-4 text-xs text-white">Terms and conditions</a>
          </li>

          <li>
            <a className="px-4 text-xs text-white">Privacy statement</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
