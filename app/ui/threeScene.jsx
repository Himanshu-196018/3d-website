import { useRef, Suspense } from "react";
import { LoaderSkeleton } from "./skeletons";
import { Canvas, useFrame } from "react-three-fiber";
import { Character } from "@/app/models/character";

export function ThreeScene() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent z-0"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<LoaderSkeleton />}>
          <directionalLight position={[1, 1, 1]} intensity={5} />
          <ambientLight intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#ffffff"} />
          <Character />
        </Suspense>
      </Canvas>
    </section>
  );
}
