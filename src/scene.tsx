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
  const groupRef = useRef<THREE.Points>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });
  return (
    <>
      <CameraControls makeDefault />
      <fog attach="fog" color="#000" near={1} far={200} />
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
      <Stars count={10000} ref={groupRef} fade={true} />
      <Particles />

      <Planets />
    </>
  );
}
