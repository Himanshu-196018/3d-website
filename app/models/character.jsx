import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export function Character(props) {
  const koi = useLoader(GLTFLoader, "/koi_fish.glb");
  const group = useRef();
  const { nodes, materials, animations } = koi;
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="koifish_0"
                position={[-0.268, 0, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              >
                <mesh
                  name="mesh_0"
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
