/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import dragon from "../assets/Dragon1.glb";

const DragonOne = ({ ...props }) => {
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(dragon);
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    actions["Qishilong_attack01"].play();
  });

  return (
    <group ref={dragonRef} {...props} scale={0.1} position={[0, -2, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="M_B_44_Qishilong_skin_SkeletonFBX"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MI_M_B_44_Qishilong_body02_Inst}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MI_M_B_44_Qishilong_body02_2_Inst}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group
                    name="M_B_44_Qishilong_skin"
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default DragonOne;
