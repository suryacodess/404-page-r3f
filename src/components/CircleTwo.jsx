import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import img from "../assets/images/1.png";
const CircleTwo = () => {
  const texture = useLoader(TextureLoader, img);
  const circleTwoRef = useRef(null);
  useFrame(() => {
    if (circleTwoRef.current) {
        circleTwoRef.current.rotation.y += 0.002;
        circleTwoRef.current.rotation.z += 0.002;
        circleTwoRef.current.rotation.z += 0.002;
    }
  });
  return (
    <mesh ref={circleTwoRef}>
      <sphereGeometry args={[2, 0, 200, 0, 1005]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default CircleTwo;
