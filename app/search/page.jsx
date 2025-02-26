"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AnimeCard from "@/components/AnimeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

// Your search page component
export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const res = await fetch(
          `https://shikimori.one/api/animes?search=${encodeURIComponent(
            query
          )}&limit=20`
        );
        const data = await res.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Search Results for "{query}"
          </h1>
          <Suspense fallback={<Loader />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {isLoading ? (
                <Loader />
              ) : (
                searchResults.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} index={0} />
                ))
              )}
            </div>
          </Suspense>
          {!isLoading && searchResults.length === 0 && (
            <p className="text-white">No results found for "{query}"</p>
          )}
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
