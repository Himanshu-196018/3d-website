/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Character from "../models/Character";
import Ground from "../models/Ground";
import Footer from "../components/Footer";
import ModelView from "../components/ModelView";
import CancelBtn from "../components/CancelBtn";

const Home = () => {
  const [viewModel, setViewModel] = useState(false);

  return (
    <section className="w-full h-screen relative">
      <ModelView handleClick={() => setViewModel(true)} />
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center"></div> */}
      <div
        className={`w-full h-full fixed top-0 right-0 ${
          viewModel ? "z-50" : ""
        }`}
      >
        {viewModel && <CancelBtn handleClick={() => setViewModel(false)} />}
        <Canvas
          className="w-full h-screen fixed top-0"
          camera={{ near: 0.1, far: 100 }}
        >
          <color attach={"background"} args={["#15151a"]} />
          <Suspense fallback={<Loader />}>
            <directionalLight />
            <ambientLight intensity={3} />
            <hemisphereLight />

            <Ground />
            <Sky scale={100} sunPosition={[0, -1000, 10000]} />
            <Environment preset="city" />
            {viewModel && <OrbitControls />}
            <Character />
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full h-[200vh] absolute z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
