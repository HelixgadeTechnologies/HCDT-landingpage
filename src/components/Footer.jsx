import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row md:items-center gap-y-5 justify-between max-w-7xl py-16 md:py-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="font-medium text-base text-dark-1 flex gap-1 items-end">
        <Image
        src={"/images/sdn-logo.jpeg"}
        alt="SDN"
        width={30}
        height={30}
        className="object-cover"
        />
        <span className="text-base text-gray-1">
          @ 2025. All rights reserved.
        </span>
      </div>

      <ul className="flex items-center justify-between md:justify-normal gap-6">
        <Link href="/disclaimer">
          <li className="text-base text-dark-1">Disclaimer</li>
        </Link>

        <li className="text-base text-dark-1">Privacy</li>

        <Link href="/contact">
          <li className="text-base text-dark-1">Contact</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
