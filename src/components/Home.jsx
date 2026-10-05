import Hero from "./atoms/Hero";
import RP from "./sopo/RP"
export default function Home() {
  return (
    <div className="h-full w-full bg-black">
      <Hero />
      <RP/>
    </div>
  );
}