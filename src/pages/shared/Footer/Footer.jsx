import 'react';
import Logo from '../../../Components/Logo/Logo';
const Footer = () => {
    return (
       <div>

        <footer className="w-full bg-white px-6 py-12">
  <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:justify-between">

    {/* Left: logo + newsletter */}
    <div className="w-full max-w-[380px]">
      <div className="flex items-center gap-2">
        <Logo />
        <h2 className="font-clash text-[24px] font-bold leading-[100%]">
          ByteSpace
        </h2>
      </div>

      <p className="mt-4 text-[13px] text-black">
        Stay Up to date with our latest features and releases by joining our newsletter.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[40px] w-full flex-1 rounded-full border border-gray-300 bg-white px-4 text-[14px] outline-none focus:border-gray-500"
        />
        <button className="h-[34px] shrink-0 rounded-full bg-[#DEFA50] px-6 text-[14px] font-medium text-black">
          Search
        </button>
      </div>

      <p className="mt-5 text-[11px] leading-[16px] text-black">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>

    {/* Right: links */}
    <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-[13px] sm:grid-cols-3 lg:gap-x-[70px] lg:pt-[30px]">

      <nav className="flex flex-col gap-3">
        <a className="hover:underline">Featured Courses</a>
        <a className="hover:underline">Featured Categories</a>
        <a className="hover:underline">Business</a>
        <a className="hover:underline">IT</a>
        <a className="hover:underline">Design</a>
      </nav>

      <nav className="flex flex-col gap-3">
        <a className="hover:underline">Development</a>
        <a className="hover:underline">Marketing</a>
        <a className="hover:underline">Photography</a>
        <a className="hover:underline">Finance</a>
        <a className="hover:underline">Sport</a>
      </nav>

      <nav className="flex flex-col gap-3">
        <a className="hover:underline">Become a Creator</a>
        <a className="hover:underline">Affiliate Program</a>
        <a className="hover:underline">Contact</a>
        <a className="hover:underline">Help</a>
        <a className="hover:underline">About</a>
      </nav>

    </div>
  </div>
</footer>




<footer className="footer mx-auto w-full max-w-[1200px] justify-between p-4 text-base-content sm:footer-horizontal">
  <aside className="grid-flow-col items-center">
    <p>@ 2023 ByteSpace. All rights reserved.</p>
  </aside>

  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <p>Privacy Policy</p>
    </a>

    <a>
      <p>Terms of Service</p>
    </a>

    <a>
      <p>Contact Us</p>
    </a>
  </nav>
</footer>
       </div>
    );
};

export default Footer;