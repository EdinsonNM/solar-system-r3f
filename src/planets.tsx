import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Group, TextureLoader } from "three";
import { Planet } from "./planet";

export default function Planets() {
  const groupRef = useRef<Group>(null);
  const earthTexture = useLoader(
    TextureLoader,
    "/textures/2k_earth_daymap.jpg"
  );
  const mercuryTexture = useLoader(TextureLoader, "/textures/2k_mercury.jpg");
  const venusTexture = useLoader(
    TextureLoader,
    "/textures/2k_venus_surface.jpg"
  );
  const marsTexture = useLoader(TextureLoader, "/textures/2k_mars.jpg");
  const jupiterTexture = useLoader(TextureLoader, "/textures/2k_jupiter.jpg");
  const saturnTexture = useLoader(TextureLoader, "/textures/2k_saturn.jpg");
  const uranusTexture = useLoader(TextureLoader, "/textures/2k_uranus.jpg");
  const neptuneTexture = useLoader(TextureLoader, "/textures/2k_neptune.jpg");
  const planets = [
    {
      radius: 25,
      name: "Mercury",
      texture: mercuryTexture,
      size: 0.3,
      hasRing: false,
    },
    {
      radius: 35,
      name: "Venus",
      texture: venusTexture,
      size: 0.5,
      hasRing: false,
    },
    {
      radius: 40,
      name: "Earth",
      texture: earthTexture,
      size: 0.9,
      hasRing: false,
    },
    {
      radius: 45,
      name: "Mars",
      texture: marsTexture,
      size: 0.9,
      hasRing: false,
    },
    {
      radius: 55,
      name: "Jupiter",
      texture: jupiterTexture,
      size: 2.1,
      hasRing: false,
    },
    {
      radius: 65,
      name: "Saturn",
      texture: saturnTexture,
      size: 2.1,
      hasRing: true,
    },
    {
      radius: 75,
      name: "Uranus",
      texture: uranusTexture,
      size: 2.1,
      hasRing: false,
    },
    {
      radius: 85,
      name: "Neptune",
      texture: neptuneTexture,
      size: 2.1,
      hasRing: false,
    },
  ];
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  return (
    <group ref={groupRef}>
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          texture={planet.texture}
          radius={planet.radius}
          size={planet.size}
          hasRing={planet.hasRing}
        />
      ))}
    </group>
  );
}
