"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SimilarAnimeProps {
  animeId: number;
}

interface AnimeItem {
  id: number;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  score: string;
}

export default function SimilarAnime({ animeId }: SimilarAnimeProps) {
  const [similarAnime, setSimilarAnime] = useState<AnimeItem[]>([]);

  useEffect(() => {
    const fetchSimilarAnime = async () => {
      try {
        const res = await fetch(
          `https://shikimori.one/api/animes/${animeId}/similar`
        );
        const data = await res.json();
        setSimilarAnime(data);
      } catch (error) {
        console.error("Error fetching similar anime:", error);
      }
    };

    fetchSimilarAnime();
  }, [animeId]);

  const getImageUrl = (path: string) => {
    const baseUrl = "https://shikimori.one";
    const fullUrl =
      path.startsWith("/assets") || path.startsWith("/system")
        ? `${baseUrl}${path}`
        : path;

    // Use placeholder image if the URL fails or is invalid
    return fullUrl.includes("missing") || !path ? "/placeholder.svg" : fullUrl;
  };

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Similar Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {similarAnime.map((anime) => (
          <motion.div
            key={anime.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/anime/${anime.id}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={getImageUrl(anime.image.original)}
                  alt={anime.name}
                  width={200}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">
                    {anime.name}
                  </h3>
                  <p className="text-sm text-gray-400">{anime.kind}</p>
                  <p className="text-sm text-yellow-400">
                    Score: {anime.score}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
