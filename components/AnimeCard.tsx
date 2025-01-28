import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Props {
  anime: AnimeProp;
  index: number;
}

const BASE_URL = "https://shikimori.one";   


const AnimeCard = ({ anime }: Props) => {
  const imageUrl = anime.image.original.startsWith("/")
    ? `${BASE_URL}${anime.image.original}`
    : anime.image.original;
  return (
    <Link href={`/anime/${anime.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
      >
        <div className="relative aspect-[2/3]">
          <Image
            src={imageUrl}
            alt={anime.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-xl font-bold text-white truncate">
              {anime.name}
            </h2>
            <div className="flex items-center justify-between mt-2">
              <span className="px-2 py-1 text-xs font-semibold text-gray-900 bg-yellow-400 rounded-full">
                {anime.kind}
              </span>
              <div className="flex items-center bg-gray-700 rounded-full px-2 py-1">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm font-bold text-yellow-400">
                  {anime.score}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="ml-2 text-sm text-gray-400">
                {anime.episodes || anime.episodes_aired} eps
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimeCard;


