/* eslint-disable react/no-unknown-property */
import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  return (
    <group position={[0, -1.99, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial
          blur={[800, 800]}
          resolution={2040}
          mixBlur={0.2}
          mixStrength={30}
          roughness={9}
          depthScale={0.3}
          minDepthThreshold={0.4}
          maxDepthThreshold={10}
          color="#2f2f2f"
          metalness={0.8}
          reflectorOffset={0}
        />
      </mesh>
    </group>
  );
};

export default Ground;
