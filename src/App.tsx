import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import UI from "./ui";
function App() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <Canvas camera={{ position: [0, 0, 800], fov: 75 }}>
        <Scene />
      </Canvas>
      <UI />
    </div>
  );
}

export default App;
