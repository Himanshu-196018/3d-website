import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Character from "../models/Character";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center"></div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <hemisphereLight />

          <Grid
            renderOrder={-1}
            position={[0, -2, 0]}
            infiniteGrid
            cellSize={0.6}
            cellThickness={0.6}
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor={[20, 20, 0]}
            fadeDistance={50}
          />
          <OrbitControls />
          <Character />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
