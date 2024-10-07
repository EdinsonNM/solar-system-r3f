import { Point, PositionPoint } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
const nebulaColors = [
  new THREE.Color(0.8, 0.3, 0.9), // Púrpura
  new THREE.Color(0.9, 0.4, 0.5), // Rosa
  new THREE.Color(0.5, 0.5, 1.0), // Azul
  new THREE.Color(0.4, 0.8, 0.7), // Verde azulado
  new THREE.Color(0.9, 0.6, 0.3), // Naranja
  new THREE.Color(0.6, 0.7, 1.0), // Azul suave
  new THREE.Color(0.9, 0.7, 0.3), // Amarillo-naranja
  new THREE.Color(0.7, 0.5, 1.0), // Violeta
];
export default function Particle() {
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2); // Iniciar en un ángulo aleatorio
  const DISTANCE = Math.random() * 410;
  const ref = useRef<PositionPoint>(null);
  const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
  const radius = 200; // Radio de la esfera

  useEffect(() => {
    // Generar coordenadas esféricas aleatorias
    const phi = Math.acos(2 * Math.random() - 1); // Ángulo desde el polo (0 a PI)
    const theta = 2 * Math.PI * Math.random(); // Ángulo alrededor del eje Y (0 a 2PI)

    // Convertir las coordenadas esféricas a coordenadas cartesianas
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    ref.current!.position!.set(x, y, z);
  }, []);
  useFrame(() => {
    // ref.current!.position!.z -= 0.01;
  });
  return <Point ref={ref} color={color} scale={Math.random() * 100} />;
}
