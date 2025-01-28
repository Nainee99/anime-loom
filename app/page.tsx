"use client";

import { useState, useEffect } from "react";
import type { AnimeProp } from "@/components/AnimeCard";
import AnimeCard from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import Hero from "@/components/Hero";
import FilterButton from "@/components/FilterButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

async function fetchAnime(page: number): Promise<AnimeProp[]> {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8`
  );
  const data = await res.json();
  return data;
}

export default function Home() {
  const [animeList, setAnimeList] = useState<AnimeProp[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAnime(1).then(setAnimeList);
  }, []);

  const loadMoreAnime = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const nextPage = page + 1;
    const newAnime = await fetchAnime(nextPage);
    setAnimeList((prev) => [...prev, ...newAnime]);
    setPage(nextPage);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-100">Explore Anime</h2>
          <div className="z-10">
            <FilterButton />
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {animeList.map((anime) => (
              <motion.div
                key={anime.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <AnimeCard anime={anime} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <LoadMore onLoadMore={loadMoreAnime} />
      </main>
      <Footer />
    </div>
  );
}
