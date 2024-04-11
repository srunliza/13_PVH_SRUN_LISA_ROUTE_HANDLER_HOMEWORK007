import ActionMovieComponent from "@/components/ActionMovieComponent";
import AllMoviesComponent from "@/components/AllMoviesComponent";
import AnimeMovieComponent from "@/components/AnimeMovieComponent";
import DramaMovieComponent from "@/components/DramaMovieComponent";
import HollywoodMovieComponent from "@/components/HollywoodMovieComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-16">
      <div className="top-0 brightness-50  contrast-100 ">
        <img src="../images/banner.webp" alt="banner" />
      </div>
      <AllMoviesComponent />
      <DramaMovieComponent />
      <AnimeMovieComponent />
      <ActionMovieComponent />
      <HollywoodMovieComponent />
    </main>
  );
}
