/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { DragonTwo, Ground } from "../models/model";
import Footer from "../components/Footer";
import ModelView from "../components/ModelView";
import CancelBtn from "../components/CancelBtn";
import { About, Nft } from "../pages";
import Bgm from "../components/Bgm";
import RoadmapBtn from "../components/RoadmapBtn";

const Home = ({ handleRoadmapClick }) => {
  const [viewModel, setViewModel] = useState(false);

  return (
    <section className="w-full h-screen relative bg-transparent">
      <div className="w-full fixed bottom-10 z-20 flex px-6 lg:px-16">
        <RoadmapBtn handleClick={handleRoadmapClick} />
        <ModelView handleClick={() => setViewModel(true)} />
        <Bgm />
      </div>
      <div
        className={`w-full h-full fixed top-0 right-0 ${
          viewModel ? "z-50" : ""
        }`}
      >
        {viewModel && <CancelBtn handleClick={() => setViewModel(false)} />}
        <Canvas
          className="w-full h-screen fixed top-0 bg-transparent"
          camera={{ near: 0.1, far: 100 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight color={"#ffffff"} intensity={1} />
            <ambientLight intensity={3} />
            <hemisphereLight />

            <Grid
              position={[0, -1.98, 0]}
              cellSize={0.675}
              cellColor={"#9f9f9f"}
              sectionSize={2.7}
              sectionColor={"#888888"}
              fadeDistance={40}
              fadeStrength={4}
              infiniteGrid
            />
            <Ground />
            <Environment preset="city" />
            {viewModel && (
              <OrbitControls
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={0.5}
                maxDistance={10}
                minDistance={3}
              />
            )}
            <DragonTwo />
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full min-h-screen absolute z-10 bg-transparent">
        <div className="h-screen" />
        <About />
        <Nft />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
