/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import spartan from "../assets/Spartan.glb";

const Spartan = ({ ...props }) => {
  const spartanRef = useRef();
  const { nodes, materials, animations } = useGLTF(spartan);
  const { actions } = useAnimations(animations, spartanRef);

  useEffect(() => {
    console.log(actions["Armature|Armature|mixamo.com|Layer0.001"].play());
  });

  return (
    <group ref={spartanRef} {...props} scale={1.5} position={[0, -2, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="042b8bc53dd94ecda2a9117428da0c7bfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials["Legs.001"]}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name="Object_101"
                      geometry={nodes.Object_101.geometry}
                      material={materials["Arm.001"]}
                      skeleton={nodes.Object_101.skeleton}
                    />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials["Chest.001"]}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials["Mask.002"]}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials["Helmet.001"]}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <group
                      name="Object_98"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_100"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_102"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_104"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_106"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Legs"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group name="Arm" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group
                  name="Chest"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Mask"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Helmet"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Spartan;
