"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface LoadMoreProps {
  onLoadMore: () => Promise<void>;
}

export default function LoadMore({ onLoadMore }: LoadMoreProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 border-t-4 border-yellow-400 rounded-full animate-spin"
      />
    </div>
  );
}
