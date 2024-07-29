import { GoPaperAirplane } from "react-icons/go";
// import QR from "../../Assets/qr-code.svg"; // Import your QR code image here

const Footer = () => {
  return (
    <footer className="flex w-full justify-between items-start bg-black px-24 pt-8 pb-16 text-white">
      <div className="subscribe flex flex-col gap-6">
        <h3 className="font-bold text-lg">Subscribe</h3>
        <p className="text-base font-normal">Get product info in your mail</p>
        <div className="input bg-transparent flex h-10 rounded-md border-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-sm text-white bg-transparent outline-none px-2 flex-grow"
          />
          <button type="submit">
            <GoPaperAirplane className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="account flex flex-col gap-2">
        <h3 className="font-bold text-lg">Account</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-white">
            <a href="#">My account</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Login</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Sign Up</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Listings</a>
          </li>
        </ul>
      </div>
      <div className="quick-link flex flex-col gap-2">
        <h3 className="font-bold text-lg">Quick link</h3>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li className="hover:text-white">
            <a href="#">FAQs</a>
          </li>
          <li className="hover:text-white">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-white">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="download-app flex flex-col gap-4">
        <h3 className="font-bold text-lg">Download App</h3>
        <div className="qr-code mx-auto">
          <img src="/qr-code.svg" alt="QR Code" className="w-24 h-24" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
