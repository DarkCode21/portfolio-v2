"use client";
import { useGLTF } from "@react-three/drei";

type GroupProps = JSX.IntrinsicElements["group"];

export default function Astronaut(props: GroupProps) {
	const { scene } = useGLTF("/models/astronaut.glb") as any;
	return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/astronaut.glb");
