import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { getRandomColor } from "./utils";
const NUM_POINTS = 200;
const RADIUS = 300;
export default function Particles() {
  const pointsRef = useRef<any>(null);
  const texture = useTexture("nebulosa.webp");
  useFrame(() => {
    pointsRef.current!.rotation.x += 0.001;
    pointsRef.current!.rotation.y -= 0.001;
    pointsRef.current!.rotation.z += 0.001;
  });
  const sizes = new Float32Array(NUM_POINTS);
  for (let i = 0; i < NUM_POINTS; i++) {
    sizes[i] = Math.random() * 100;
  }
  const positions = new Float32Array(NUM_POINTS * 3);

  useEffect(() => {
    for (let i = 0; i < NUM_POINTS; i++) {
      const radius = Math.random() * RADIUS + 50;

      const phi = Math.acos(2 * Math.random() - 1); // Ángulo desde el polo (0 a PI)
      const theta = 2 * Math.PI * Math.random();
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    pointsRef.current!.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);
  const colors = new Float32Array(NUM_POINTS * 3);
  for (let i = 0; i < NUM_POINTS; i++) {
    const color = getRandomColor();
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return (
    <>
      <ambientLight />

      <points ref={pointsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={positions.length / 3}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={positions.length / 3}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={100}
          vertexColors
          map={texture}
          transparent
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
        />
      </points>
    </>
  );
}
