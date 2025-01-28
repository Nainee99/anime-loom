"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none"
          >
            <Image
              src="/logo.svg"
              alt="Anime Loom Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-yellow-400">
              Anime Loom
            </span>
          </Link>
          <form onSubmit={handleSearch} className="flex-grow max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anime..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </form>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-400 transition-colors focus:outline-none"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
