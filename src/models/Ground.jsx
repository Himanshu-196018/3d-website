/* eslint-disable react/no-unknown-property */
import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  return (
    <group position={[0, -1.99, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[800, 800]}
          resolution={2048}
          mixBlur={1}
          mixStrength={70}
          roughness={6}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={2}
          color="#050505"
          metalness={0.6}
          reflectorOffset={0}
        />
      </mesh>
    </group>
  );
};

export default Ground;
