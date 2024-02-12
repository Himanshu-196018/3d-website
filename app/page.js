"use client";

import { MenuButton } from "@/app/ui/buttons";
import { Menu } from "@/app/ui/menu";
import { useState } from "react";
import { ThreeScene } from "@/app/ui/threeScene";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="w-full h-screen relative">
      {isMenuOpen && (
        <Menu
          handleClick={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
      <div className="fixed  right-16 top-10 z-[5]">
        <MenuButton
          handleClick={() => {
            setIsMenuOpen(true);
          }}
        />
      </div>
      <ThreeScene />
    </main>
  );
}
