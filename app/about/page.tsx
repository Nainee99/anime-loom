import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">
            About Anime Loom
          </h1>
          <div className="mb-12 relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src="/about-banner.jpg"
              alt="Anime collage"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="lead text-xl mb-8">
              Anime Loom is more than just a database; it's a vibrant community
              where the threads of anime passion are woven together, creating a
              tapestry of shared experiences and discoveries.
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Our Mission
            </h2>
            <p>
              At Anime Loom, we're dedicated to providing a comprehensive,
              user-friendly platform for anime enthusiasts of all levels.
              Whether you're a seasoned otaku or just beginning your journey
              into the world of anime, our goal is to help you explore,
              discover, and celebrate the diverse realm of Japanese animation.
            </p>
            <h2 className="text-3xl font-semibold my-6 text-yellow-400">
              What We Offer
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>An extensive, constantly updated database of anime titles</li>
              <li>
                Detailed information on each anime, including synopsis, genre,
                and user ratings
              </li>
              <li>
                A powerful search function to help you find your next favorite
                anime
              </li>
              <li>
                Personalized recommendations based on your viewing history and
                preferences
              </li>
              <li>Community features to connect with fellow anime fans</li>
              <li>
                Up-to-date information on currently airing shows and upcoming
                releases
              </li>
            </ul>
            <h2 className="text-3xl font-semibold my-6 text-yellow-400">
              Our Story
            </h2>
            <p>
              Anime Loom was born from a simple idea: to create a space where
              anime lovers could come together, share their passion, and
              discover new worlds within Japanese animation. What started as a
              small project has grown into a thriving community, thanks to the
              dedication of our team and the enthusiasm of our users.
            </p>
            <p>
              We're constantly evolving, adding new features, and improving our
              platform based on user feedback. Your input shapes the future of
              Anime Loom, and we're excited to continue this journey with you.
            </p>
            <h2 className="text-3xl font-semibold my-6 text-yellow-400">
              Join Our Community
            </h2>
            <p>
              Whether you're here to find your next binge-watch, discuss
              theories about your favorite series, or simply connect with
              like-minded anime enthusiasts, Anime Loom is your home. Join us in
              weaving the rich tapestry of the anime world, one thread at a
              time.
            </p>
            <p className="text-center text-2xl font-semibold mt-12">
              Thank you for being part of the Anime Loom family. Happy
              exploring!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
