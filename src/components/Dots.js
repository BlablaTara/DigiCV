export default function Dots() {
    const dots = [
        { text: "Frontend", x: "36%", y: "16%" },
        { text: "Design", x: "30%", y: "60%" },
        { text: "UI/UX", x: "52%", y: "37%" },
        { text: "React", x: "70%", y: "70%" },
        { text: "Next.js", x: "85%", y: "40%" },
        { text: "Startup", x: "60%", y: "10%" },
        { text: "Blabla", x: "48%", y: "75%" },
    ];

    return (
        <div className="dots">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{ left: dot.x, top: dot.y }}
                >
                    <span className="dot-tooltip">{dot.text}</span>
                </div>
            ))}
        </div>
    );
}