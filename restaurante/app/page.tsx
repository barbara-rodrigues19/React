import CardFood from "@/components/cards/card-food";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <InteractiveHoverButton>Explore o mundo</InteractiveHoverButton>
      <CardFood/>
</div>
  );
}
