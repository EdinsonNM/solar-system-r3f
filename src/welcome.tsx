import { Text3D } from "@react-three/drei";

export default function Welcome() {
  return (
    <Text3D font={"/fonts/Oxygen_Regular.json"} position={[-4, 3, 0]}>
      Bienvenidos
      <meshStandardMaterial
        color={"white"}
        transparent
        depthWrite={false}
        emissive={"cyan"}
        emissiveIntensity={2}
      />
    </Text3D>
  );
}
