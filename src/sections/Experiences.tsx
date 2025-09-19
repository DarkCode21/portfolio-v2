"use client";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants";

export default function Experiences() {
	return (
		<section id="experiences" className="w-full c-space section-spacing">
			<h2 className="text-heading">My Work Experience</h2>
			<Timeline data={experiences} />
		</section>
	);
}
