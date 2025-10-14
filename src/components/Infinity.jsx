import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import img from "../assets/images/1.png";
function InfinityShape() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, img);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.2, 100, 16, 2, 3]} />
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
}
export default InfinityShape;
