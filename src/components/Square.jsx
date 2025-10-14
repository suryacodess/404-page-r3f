import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import img from "../assets/images/1.png"

import { TextureLoader } from "three";
const Square = () => {
  const squareRef = useRef(null);
  const texture = useLoader(TextureLoader, img);
  useFrame(() => {
    if (squareRef.current) {
      squareRef.current.rotation.x += 0.0009;
      squareRef.current.rotation.y += 0.0009;
      squareRef.current.rotation.z += 0.0009;
    }
  });
  return (
    <mesh ref={squareRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} transparent opacity={1}/>
    </mesh>
  );
};

export default Square;
