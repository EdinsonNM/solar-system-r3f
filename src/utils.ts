import * as THREE from "three";

export const nebulaColors = [
  new THREE.Color(0.8, 0.3, 0.9), // Púrpura
  new THREE.Color(0.9, 0.4, 0.5), // Rosa
  new THREE.Color(0.5, 0.5, 1.0), // Azul
  new THREE.Color(0.4, 0.8, 0.7), // Verde azulado
  new THREE.Color(0.9, 0.6, 0.3), // Naranja
  new THREE.Color(0.6, 0.7, 1.0), // Azul suave
  new THREE.Color(0.9, 0.7, 0.3), // Amarillo-naranja
    new THREE.Color(0.7, 0.5, 1.0), // Violeta
  ];
export const getRandomColor = () => {
  return nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
};

