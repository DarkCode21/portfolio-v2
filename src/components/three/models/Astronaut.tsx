"use client";
import { useGLTF } from "@react-three/drei";
import type { JSX as ReactJSX } from "react";
import type { Group } from "three";

type GroupProps = ReactJSX.IntrinsicElements["group"];

export default function Astronaut(props: GroupProps) {
  const { scene } = useGLTF("/models/astronaut.glb") as unknown as {
    scene: Group;
  };
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/astronaut.glb");
