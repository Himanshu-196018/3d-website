/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { DragonOne, DragonTwo, Spartan, Woman, Ground } from "../models/model";
import Footer from "../components/Footer";
import ModelView from "../components/ModelView";
import CancelBtn from "../components/CancelBtn";
import CardDetail from "../components/CardDetail";
import { About, Nft } from "../pages";
import Bgm from "../components/Bgm";
import RoadmapBtn from "../components/RoadmapBtn";

const models = {
  DragonOne: DragonOne,
  DragonTwo: DragonTwo,
  Spartan: Spartan,
  Woman: Woman,
};

const Home = ({ handleRoadmapClick }) => {
  const [viewModel, setViewModel] = useState(false);
  const [model, setModel] = useState("Spartan");
  const [detailId, setDetailId] = useState(3);

  const handleClick = (id) => {
    switch (id) {
      case 1:
        setModel("DragonOne");
        setDetailId(id);
        break;
      case 2:
        setModel("DragonTwo");
        setDetailId(id);
        break;
      case 3:
        setModel("Spartan");
        setDetailId(id);
        break;
      case 4:
        setModel("Woman");
        setDetailId(id);
        break;
      default:
        setModel("Spartan");
        setDetailId(3);
    }
  };

  const load = () => {
    const ModelComponent = models[model];
    return <ModelComponent />;
  };

  return (
    <section className="w-full h-screen relative">
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
          shadows
          className="w-full h-screen fixed top-0"
          camera={{ near: 0.1, far: 100 }}
        >
          <color attach={"background"} args={["#d3d3d3"]} />
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
            {load()}
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full min-h-screen absolute z-10">
        <CardDetail detailId={detailId} />
        <About />
        <Nft />
        <Footer handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Home;
