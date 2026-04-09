"use client"
import "../css/project.css";
import ProjectCard from "@/components/projectComponent/ProjectCard";
import { useState } from "react";

export default function Projects() {
    const [index, setIndex] = useState(0);
    const cardWidth = 325;
    const maxIndex = 5 - 3;

    const next = () => {
        setIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prev = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="projects">
            <div className="projects-title">
                <h2>Projekter</h2>
            </div>
            <div className="projects-carousel">
                <button className="arrow left" onClick={prev}>←</button>

                    <div className="projects-viewport">
                        <div className="projects-track"
                            style={{ transform: `translateX(-${index * cardWidth}px)`}}
                        >
                                <ProjectCard
                                    title="Mit først rprogms"
                                    description="Super fed app vjrjgld"
                                    image="/lala.png"
                                />
                                    
                                <ProjectCard
                                    title="Startup idé"
                                    description="En platform til at forbinde mennesker"
                                    image="/lala.png"
                                />

                                <ProjectCard
                                    title="Startup idé"
                                    description="En platform til at forbinde mennesker"
                                    image="/lala.png"
                                />

                                <ProjectCard
                                    title="Startup idé"
                                    description="En platform til at forbinde mennesker"
                                    image="/lala.png"
                                />

                                <ProjectCard
                                    title="Startup idé"
                                    description="En platform til at forbinde mennesker"
                                    image="/lala.png"
                                />

                        </div>
                    </div>
                <button className="arrow right" onClick={next}>→</button>
            </div>
        </div>
    );
}