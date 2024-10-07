import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
export default function Sun() {
  const sunTexture = useTexture("sun.jpg");
  const sunRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <mesh position={[0, 0, 0]} ref={sunRef}>
        <sphereGeometry args={[15, 32, 32]} />
        <meshStandardMaterial
          emissive={"orange"}
          map={sunTexture}
          emissiveIntensity={100}
          depthWrite={false}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      <ambientLight intensity={20} />
    </>
  );
}
