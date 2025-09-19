"use client";
import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
// Si tienes HeroText en components/HeroText.jsx, renómbralo a .tsx:
import HeroText from "@/components/HeroText";
import Loader from "@/components/Loader";
// OJO con el nombre del archivo: renombra parallaxBackground.jsx -> ParallaxBackground.tsx
import ParallaxBackground from "@/components/ParallaxBackground";
import Astronaut from "@/components/three/models/Astronaut";

export default function Hero() {
	const isMobile = useMediaQuery({ maxWidth: 853 });

	return (
		<section
			id="home"
			className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
		>
			<HeroText />
			<ParallaxBackground />
			<figure
				className="absolute inset-0"
				style={{ width: "100vw", height: "100vh" }}
			>
				<Canvas camera={{ position: [0, 1, 3] }}>
					<Suspense fallback={<Loader />}>
						<Float>
							<Astronaut
								// Evita boolean | number en TS:
								scale={isMobile ? 0.23 : 0.3}
								position={isMobile ? [0, -1.5, 0] : [0, -1.2, 0]}
							/>
						</Float>
						<Rig />
					</Suspense>
				</Canvas>
			</figure>
		</section>
	);
}

function Rig() {
	useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
			0.5,
			delta,
		);
	});
	return null;
}
