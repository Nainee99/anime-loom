# AnimeLoom

AnimeLoom is a modern, feature-rich anime discovery platform built with **React 18** and **Next.js**. This app showcases the latest and trending anime while providing a seamless and interactive user experience.

## Features
- **Latest Anime Updates**: Get the most recent anime releases and information.
- **Trending Anime**: Discover what's popular in the anime world.
- **User-Friendly Interface**: Built for speed and ease of use with Next.js's optimized performance.
- **Dynamic Routing**: Navigate through anime categories, genres, and more effortlessly.

---

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Context API or Zustand (optional, depending on use case)
- **Data Fetching**: Next.js's App Router and Server Components
- **API**: [Jikan API](https://jikan.moe/) for fetching anime data

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Nainee99/AnimeLoom.git
   ```

2. Navigate into the project directory:
   ```bash
   cd anime-loom
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Scripts

Here are some common scripts you can run:

- **Development**: `npm run dev` - Starts the development server.
- **Build**: `npm run build` - Creates an optimized production build.
- **Start**: `npm start` - Starts the production server.
- **Lint**: `npm run lint` - Runs ESLint checks on your code.

---

## Folder Structure

```plaintext
AnimeLoom/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── app/        # Next.js App Router and pages
│   ├── components/ # Reusable React components
├── package.json    # Project dependencies and scripts
├── next.config.js  # Next.js configuration
└── tsconfig.json   # TypeScript configuration
```

---

## API Integration
AnimeLoom uses the [Jikan API](https://jikan.moe/) to fetch data about anime. Below are some of the endpoints used:

- **Get Latest Anime**:
  ```
  GET https://api.jikan.moe/v4/anime
  ```
- **Search Anime**:
  ```
  GET https://api.jikan.moe/v4/anime?q={query}
  ```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments
- [Next.js Documentation](https://nextjs.org/docs)
- [Jikan API Documentation](https://jikan.moe/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

### Stay Updated
For updates and new features, follow this project on [GitHub](https://github.com/Nainee99/anime-loom).

