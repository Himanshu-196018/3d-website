/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import woman from "../assets/Woman.glb";

const Woman = ({ ...props }) => {
  const womanRef = useRef();
  const { nodes, materials, animations } = useGLTF(woman);
  const { actions } = useAnimations(animations, womanRef);

  useEffect(() => {
    actions["MOTION"].play();
  });

  return (
    <group ref={womanRef} {...props} scale={2} position={[0, -2, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[1.571, 0, 0]}>
          <group
            name="5e95372d4c8348afa69702588a4860a6fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Std_Tongue}
                    skeleton={nodes.Object_7.skeleton}
                    morphTargetDictionary={nodes.Object_7.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_7.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Std_Skin_Head}
                    skeleton={nodes.Object_9.skeleton}
                    morphTargetDictionary={nodes.Object_9.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_9.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Std_Skin_Body}
                    skeleton={nodes.Object_10.skeleton}
                    morphTargetDictionary={
                      nodes.Object_10.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_10.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Std_Skin_Arm}
                    skeleton={nodes.Object_11.skeleton}
                    morphTargetDictionary={
                      nodes.Object_11.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_11.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Std_Skin_Leg}
                    skeleton={nodes.Object_12.skeleton}
                    morphTargetDictionary={
                      nodes.Object_12.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_12.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Std_Nails}
                    skeleton={nodes.Object_13.skeleton}
                    morphTargetDictionary={
                      nodes.Object_13.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_13.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Std_Eyelash}
                    skeleton={nodes.Object_14.skeleton}
                    morphTargetDictionary={
                      nodes.Object_14.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_14.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Teeth}
                    skeleton={nodes.Object_16.skeleton}
                    morphTargetDictionary={
                      nodes.Object_16.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_16.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Mouth}
                    skeleton={nodes.Object_17.skeleton}
                    morphTargetDictionary={
                      nodes.Object_17.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_17.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Cyberwear_Face1}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.Cyberwear_Head_1}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.Cyberwear_Head_2}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Cyberwear_Head_3}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.Cyberwear_Head_4}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Cyberwear_Head_5}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Leg_Wrap1}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.Leg_Wrap2}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    name="Object_30"
                    geometry={nodes.Object_30.geometry}
                    material={materials.Belt2}
                    skeleton={nodes.Object_30.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.Belt1}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.Jacket1}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials.Jacket2}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.Jacket3}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={materials.Jacket4}
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.Jacket5}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.Jacket6}
                    skeleton={nodes.Object_38.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.Jacket7}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.Jacket8}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.Jacket9}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_42"
                    geometry={nodes.Object_42.geometry}
                    material={materials.Jacket10}
                    skeleton={nodes.Object_42.skeleton}
                  />
                  <skinnedMesh
                    name="Object_44"
                    geometry={nodes.Object_44.geometry}
                    material={materials.Suit1}
                    skeleton={nodes.Object_44.skeleton}
                  />
                  <skinnedMesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.Ga_Eye}
                    skeleton={nodes.Object_46.skeleton}
                    morphTargetDictionary={
                      nodes.Object_46.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_46.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_48"
                    geometry={nodes.Object_48.geometry}
                    material={materials.Std_Tearline_R}
                    skeleton={nodes.Object_48.skeleton}
                    morphTargetDictionary={
                      nodes.Object_48.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_48.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_49"
                    geometry={nodes.Object_49.geometry}
                    material={materials.Std_Tearline_L}
                    skeleton={nodes.Object_49.skeleton}
                    morphTargetDictionary={
                      nodes.Object_49.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_49.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_51"
                    geometry={nodes.Object_51.geometry}
                    material={materials.Std_Eye_Occlusion_R}
                    skeleton={nodes.Object_51.skeleton}
                    morphTargetDictionary={
                      nodes.Object_51.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_51.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_52"
                    geometry={nodes.Object_52.geometry}
                    material={materials.Std_Eye_Occlusion_L}
                    skeleton={nodes.Object_52.skeleton}
                    morphTargetDictionary={
                      nodes.Object_52.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_52.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    name="Object_54"
                    geometry={nodes.Object_54.geometry}
                    material={materials.Loose_Biker_Boots}
                    skeleton={nodes.Object_54.skeleton}
                  />
                  <skinnedMesh
                    name="Object_56"
                    geometry={nodes.Object_56.geometry}
                    material={materials.Scalp_3_Transparency}
                    skeleton={nodes.Object_56.skeleton}
                  />
                  <skinnedMesh
                    name="Object_57"
                    geometry={nodes.Object_57.geometry}
                    material={materials.Hair_3_Transparency}
                    skeleton={nodes.Object_57.skeleton}
                  />
                  <skinnedMesh
                    name="Object_59"
                    geometry={nodes.Object_59.geometry}
                    material={materials.Hair_2_Transparency}
                    skeleton={nodes.Object_59.skeleton}
                  />
                  <skinnedMesh
                    name="Object_61"
                    geometry={nodes.Object_61.geometry}
                    material={materials.Hair_Transparency}
                    skeleton={nodes.Object_61.skeleton}
                  />
                  <skinnedMesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={materials.Scalp_2_Transparency}
                    skeleton={nodes.Object_62.skeleton}
                  />
                  <skinnedMesh
                    name="Object_64"
                    geometry={nodes.Object_64.geometry}
                    material={materials.i1_002_wa_slot__songbird_base_a_mesh_2}
                    skeleton={nodes.Object_64.skeleton}
                  />
                  <skinnedMesh
                    name="Object_65"
                    geometry={nodes.Object_65.geometry}
                    material={materials.i1_002_wa_slot__songbird_base_a_mesh_0}
                    skeleton={nodes.Object_65.skeleton}
                  />
                  <skinnedMesh
                    name="Object_66"
                    geometry={nodes.Object_66.geometry}
                    material={materials.i1_002_wa_slot__songbird_base_a_mesh_1}
                    skeleton={nodes.Object_66.skeleton}
                  />
                  <skinnedMesh
                    name="Object_67"
                    geometry={nodes.Object_67.geometry}
                    material={materials.i1_002_wa_slot__songbird_base_a_mesh_3}
                    skeleton={nodes.Object_67.skeleton}
                  />
                  <skinnedMesh
                    name="Object_68"
                    geometry={nodes.Object_68.geometry}
                    material={
                      materials.i1_002_wa_slot__songbird_keyboard_a_mesh_0
                    }
                    skeleton={nodes.Object_68.skeleton}
                  />
                  <skinnedMesh
                    name="Object_69"
                    geometry={nodes.Object_69.geometry}
                    material={
                      materials.i1_002_wa_slot__songbird_screen_a_mesh_2
                    }
                    skeleton={nodes.Object_69.skeleton}
                  />
                  <skinnedMesh
                    name="Object_70"
                    geometry={nodes.Object_70.geometry}
                    material={materials["null"]}
                    skeleton={nodes.Object_70.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object_8" />
                  <group name="Object_15" />
                  <group name="Object_18" />
                  <group name="Object_20" />
                  <group name="Object_26" />
                  <group name="Object_29" />
                  <group name="Object_32" />
                  <group name="Object_43" />
                  <group name="Object_45" />
                  <group name="Object_47" />
                  <group name="Object_50" />
                  <group name="Object_53" />
                  <group name="Object_55" />
                  <group name="Object_58" />
                  <group name="Object_60" />
                  <group name="Object_63" />
                  <group name="CC_Base_Tongue" />
                  <group name="CC_Base_Body" />
                  <group name="Custom_Teeth" />
                  <group name="Cyberwear_Face" />
                  <group name="Cyberwear_Head" />
                  <group name="Leg_Wrap" />
                  <group name="Belt" />
                  <group name="Jacket" />
                  <group name="Suit" />
                  <group name="CC_Game_Eye" />
                  <group name="CC_Base_TearLine" />
                  <group name="CC_Base_EyeOcclusion" />
                  <group name="Loose_Biker_Boots" />
                  <group name="Undercut_fade" />
                  <group name="Samurai_bun" />
                  <group name="Half_up" />
                  <group name="Tablet" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Woman;
