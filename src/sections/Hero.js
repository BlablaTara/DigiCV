import "../css/hero.css";
import Image from "next/image";
import Circles from "@/components/heroComponents/Circles";
import Dots from "@/components/heroComponents/Dots";

export default function Hero() {

    return (

            <div className="hero">
                <div className="hero-title">
                    <h2>Lattermild datamatiker, med iværksætter baggrund og høje sociale skills</h2>
                </div>

                <div className="hero-pic">
                    <Image
                        src="/lala.png"
                        alt="Emma"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ 
                            width: "500px", 
                            height: "auto" 
                        }}   
                    />
                    <Dots />
                    <Circles />
                </div>
                <div className="black-bar"></div>
            </div>
            


    );
}