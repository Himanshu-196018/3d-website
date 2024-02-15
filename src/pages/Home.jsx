/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { DragonOne, DragonTwo, Spartan, Woman, Ground } from "../models/model";
import Footer from "../components/Footer";
import ModelView from "../components/ModelView";
import CancelBtn from "../components/CancelBtn";
import CardDetail from "../components/CardDetail";

const models = {
  DragonOne: DragonOne,
  DragonTwo: DragonTwo,
  Spartan: Spartan,
  Woman: Woman,
};

const Home = () => {
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
      <ModelView handleClick={() => setViewModel(true)} />
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
            {load()}
          </Suspense>
        </Canvas>
      </div>
      <div className="w-full h-[200vh] absolute z-10">
        <CardDetail detailId={detailId} />
        <Footer handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Home;
