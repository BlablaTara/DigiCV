import Image from "next/image";

export default function ProjectCard({ title, description, image }) {
    return (
        <div className="project-card">
            <div className="face face1">
                <div className="project-card-image" aria-hidden="true">
                    <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover"
                    }}
                    />
                </div>
            </div>
            <div className="project-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}