import { CameraControls, Stars } from "@react-three/drei";
import Particles from "./particles";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";
import Welcome from "./welcome";
import Planets from "./planets";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Sun from "./sun";
export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });
  return (
    <>
      <CameraControls />
      <fog attach="fog" color="#000" near={1} far={100} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sun />
      <Welcome />
      <EffectComposer>
        <Bloom
          intensity={0.7}
          levels={8}
          blendFunction={BlendFunction.ADD}
          mipmapBlur
          kernelSize={KernelSize.LARGE}
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        ></Bloom>
      </EffectComposer>
      <Stars count={10000} ref={groupRef} fade={true} color={"yellow"} />
      <Particles />

      <Planets />
    </>
  );
}
