/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import man from "../assets/walk.glb";

const Character = ({ ...props }) => {
  const manRef = useRef();
  const { nodes, materials, animations } = useGLTF(man);
  const { actions } = useAnimations(animations, manRef);

  useEffect(() => {
    actions["walk.001"].play();
  }, [actions]);

  return (
    <group ref={manRef} {...props}>
      <group name="Man" scale={0.015} position={[0, -2, 0]}>
        <skinnedMesh
          name="Dress"
          geometry={nodes.Dress.geometry}
          material={materials.Character}
          skeleton={nodes.Dress.skeleton}
        />
        <primitive object={nodes.RL_BoneRoot} />
      </group>
    </group>
  );
};

export default Character;
