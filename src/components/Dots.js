export default function Dots() {
    const dots = [
        { text: "Frontend", x: "36%", y: "16%", size: 4 },
        { text: "Design", x: "30%", y: "60%", size: 4  },
        { text: "UI/UX", x: "52%", y: "37%", size: 7  },
        { text: "React", x: "70%", y: "70%", size: 6  },
        { text: "Next.js", x: "85%", y: "40%", size: 4  },
        { text: "Startup", x: "60%", y: "10%", size: 5  },
        { text: "Blabla", x: "48%", y: "75%", size: 6  },
    ];

    return (
        <div className="dots">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="dot"
                    style={{ 
                        left: dot.x, 
                        top: dot.y, 
                        width: dot.size + "px",
                        height: dot.size + "px"
                    }}
                >
                    <span className="dot-tooltip">{dot.text}</span>
                </div>
            ))}
        </div>
    );
}