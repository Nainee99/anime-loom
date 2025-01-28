"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimilarAnime from "@/components/SimilarAnime";
import RelatedAnime from "@/components/RelatedAnime";
import Loader from "@/components/Loader";

interface AnimeDetails {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string | null;
  released_on: string | null;
  rating: string;
  description: string | null;
  genres: { id: number; name: string; russian: string }[];
}

export default function AnimeDetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const res = await fetch(`https://shikimori.one/api/animes/${id}`);
        const data = await res.json();
        setAnimeDetails(data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchAnimeDetails();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Loader />
        </main>
        <Footer />
      </div>
    );
  }

  if (!animeDetails) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <p>Error loading anime details.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrl = animeDetails.image.original.startsWith("/")
    ? `https://shikimori.one${animeDetails.image.original}`
    : animeDetails.image.original;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={imageUrl}
                alt={animeDetails.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </motion.div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{animeDetails.name}</h1>
            <p className="text-xl text-gray-400 mb-4">{animeDetails.russian}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {animeDetails.kind}
                </p>
                <p>
                  <span className="font-semibold">Episodes:</span>{" "}
                  {animeDetails.episodes}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {animeDetails.status}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Score:</span>{" "}
                  {animeDetails.score}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span>{" "}
                  {animeDetails.rating}
                </p>
                <p>
                  <span className="font-semibold">Aired:</span>{" "}
                  {animeDetails.aired_on || "N/A"}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Synopsis</h2>
              <p className="text-gray-300">
                {animeDetails.description || "No description available."}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {animeDetails.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SimilarAnime animeId={animeDetails.id} />
        <RelatedAnime animeId={animeDetails.id} />
      </main>
      <Footer />
    </div>
  );
}
