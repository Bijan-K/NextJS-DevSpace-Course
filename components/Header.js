import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-warp p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl">DevSpace</span>
          </span>
        </Link>
        <nav className="flex flex-warp md:w-4/5 items-center justify-end text-base md:ml-auto ">
          <Link href="/blog">
            <span className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Blog
            </span>
          </Link>

          <Link href="/about">
            <span className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              About
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
