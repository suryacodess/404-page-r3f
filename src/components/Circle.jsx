import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import img from "../assets/images/1.png";
const Circle = () => {
  const texture = useLoader(TextureLoader, img);
  const circleRef = useRef(null);
  useFrame(() => {
    if (circleRef.current) {
      circleRef.current.rotation.y += 0.02;
      // circleRef.current.rotation.y += 0.02;
    }
  });
  return (
    <mesh ref={circleRef}>
      <sphereGeometry args={[1, 80, 80]} />
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
};

export default Circle;
