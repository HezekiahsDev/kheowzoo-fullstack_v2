import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function IconGrid(): JSX.Element {
  return (
    <div className="items-center justify-center w-full relative text-white">
    <div className="bg-[#c56927] grid grid-cols-3 md:grid-cols-6 gap-2 mt-10 px-16 py-6">
      <Link href="https://www.dextools.io/app/en/solana/pair-explorer/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG" target="_blank" rel="noopener noreferrer">
        <Image
          src="/dextool.png"
          alt="Dextools"
          width={50}
          height={50}
          className="mx-auto hover:scale-110"
        />
      </Link>
      <Link href="https://jup.ag/swap/SOL-AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump" target="_blank" rel="noopener noreferrer">
        <Image
          src="/solscan.png"
          alt="Solscan"
          width={50}
          height={50}
          className="mx-auto hover:scale-110"
        />
      </Link>
      <Link href="https://dexscreener.com/solana/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG" target="_blank" rel="noopener noreferrer">
        <Image
          src="/dex-screener.png"
          alt="Dex Screen"
          width={50}
          height={50}
          className="mx-auto hover:scale-110"
        />
      </Link>
      <Link href="https://coingecko.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/coin-gecko.png"
          alt="Coin Gecko"
          width={100}
          height={100}
          className="mx-auto hover:scale-110"
        />
      </Link>
      <Link
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-green-200 mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
      >
        <FaTelegramPlane />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-green-200 mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
      >
        <FaTwitter />
      </Link>
    </div>
    </div>

  );
}