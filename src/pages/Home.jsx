/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Character from "../models/Character";
import Ground from "../models/Ground";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center"></div> */}
      <div className="w-full h-full fixed top-0 right-0">
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
            {/* <OrbitControls /> */}
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
