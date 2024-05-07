import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="font-barlow flex h-20 w-full w-full justify-between bg-gradient-to-r from-dark-purple to-light-purple tracking-wider">
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
