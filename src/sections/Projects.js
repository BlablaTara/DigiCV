import ProjectCard from "@/components/projectComponent/ProjectCard";
import "../css/project.css";

export default function Projects() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
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
        </div>
    );
}