"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block"
              >
                <Image
                  src="/logo.svg"
                  alt="Anime Loom Logo"
                  width={150}
                  height={150}
                  className="mb-8 mx-auto lg:mx-0"
                />
              </motion.div>
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block xl:inline">Explore The</span>{" "}
                <span className="block text-yellow-400 xl:inline">
                  Diverse Realms
                </span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Dive into the captivating world of anime, where every story
                weaves a unique tapestry of imagination and emotion.
              </motion.p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src="/anime.png"
          alt="Anime collage"
          layout="fill"
          objectFit="cover"
          className="h-56 w-full object-cover sm:h-96 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </header>
  );
}

export default Hero;
