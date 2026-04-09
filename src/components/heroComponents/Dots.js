"use client";
import { useEffect, useState } from "react";

const dots = [
    { text: "Frontend", x: "36%", y: "16%", size: 4 },
    { text: "Design", x: "30%", y: "60%", size: 4  },
    { text: "UI/UX", x: "52%", y: "37%", size: 7  },
    { text: "React", x: "70%", y: "70%", size: 6  },
    { text: "Next.js", x: "85%", y: "40%", size: 4  },
    { text: "Startup", x: "60%", y: "10%", size: 5  },
    { text: "Blabla", x: "48%", y: "75%", size: 6  },
];


export default function Dots() {

    const [activeDots, setActiveDots] = useState([]);
    const [lastIndex, setLastIndex] = useState(null);


    useEffect(() => {
        const interval = setInterval(() => {
            let randomIndex;

            do {
                randomIndex = Math.floor(Math.random() * dots.length);
            } while (randomIndex === lastIndex);

            setLastIndex(randomIndex);
            setActiveDots([randomIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, [lastIndex]);

    return (
        <div className="dots">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className={`dot ${activeDots.includes(index) ? "active" : ""}`}
                    style={{ 
                        left: dot.x, 
                        top: dot.y, 
                        width: dot.size + "px",
                        height: dot.size + "px"
                    }}
                >
                                        <span
                        className={`dot-tooltip ${
                            activeDots.includes(index) ? "active" : ""
                        }`}
                    >
                        {dot.text}
                    </span>
                </div>
            ))}
        </div>
    );
}