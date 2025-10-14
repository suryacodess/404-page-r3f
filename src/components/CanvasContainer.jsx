import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const CanvasContainer = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, 3.4] }}>
      <Environment preset="studio" />
      {children}
      <directionalLight position={[2, 5, 1]} />
    </Canvas>
  );
};

export default CanvasContainer;
