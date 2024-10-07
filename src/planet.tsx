import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Texture } from "three";
import * as THREE from "three";

const generateRandomPosition = (radius: number) => {
  const theta = Math.random() * 2 * Math.PI; // Ángulo alrededor del eje Y (plano XZ)

  // Conversión de coordenadas polares a cartesianas en el plano XZ
  const x = radius * Math.cos(theta);
  const z = radius * Math.sin(theta);
  const y = 0; // Mantener Y en 0

  return [x, y, z];
};

type PlanetProps = {
  name: string;
  texture: Texture;
  radius: number;
  size: number;
  hasRing: boolean;
  speed?: number;
};
export function Planet({
  name,
  radius,
  texture,
  size,
  hasRing,
  speed = 0.01,
}: PlanetProps) {
  const ref = useRef<THREE.Group>(null);
  const position = useMemo(() => generateRandomPosition(radius), [radius]);
  const a = radius; // Semieje mayor
  const b = radius - radius * 0.2; // Semieje menor
  const time = useRef(0);

  useEffect(() => {
    // Inicializa `time` con un valor aleatorio entre 0 y 2π
    time.current = Math.random() * Math.PI * 2;
  }, []);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += Math.random() * 0.01;

      time.current += speed; // Aumentar el tiempo para mover el objeto
      // Actualizar posición usando las ecuaciones paramétricas
      ref.current.position.x = a * Math.cos(time.current);
      ref.current.position.z = b * Math.sin(time.current);
    }
  });
  return (
    <>
      <group key={name} ref={ref} position={position as any}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            emissive={"#000000"}
            emissiveIntensity={4.4}
            depthWrite={true}
            opacity={1}
            emissiveMap={texture}
            roughness={0.7}
          />
        </mesh>
        {hasRing && (
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size + 1.5, 5.5, 32, 32]} />
            <meshStandardMaterial
              color="gray"
              side={THREE.DoubleSide} // Muestra el material en ambas caras del anillo
              roughness={1.7} // Añadir detalles en la superficie
              emissive={"#fff"}
              emissiveIntensity={10}
            />
          </mesh>
        )}
      </group>
    </>
  );
}
