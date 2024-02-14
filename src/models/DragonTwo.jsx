/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import dragon from "../assets/Dragon2.glb";

const DragonTwo = ({ ...props }) => {
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(dragon);
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    console.log(actions["Roar"].play());
  });

  return (
    <group ref={dragonRef} {...props} scale={3.5} position={[0, -2, 0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.997}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_0"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={46.949}
              >
                <group
                  name="Dragon_Boss_05fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Dragon_Boss_05_4">
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive
                              object={nodes.GLTF_created_0_rootJoint}
                            />
                            <skinnedMesh
                              name="Object_82"
                              geometry={nodes.Object_82.geometry}
                              material={materials.Dragon_Boss_05}
                              skeleton={nodes.Object_82.skeleton}
                            />
                            <group name="Object_8_8_correction">
                              <group name="Object_8_8" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default DragonTwo;
