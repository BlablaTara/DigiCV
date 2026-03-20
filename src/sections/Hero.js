import "../css/hero.css";
import Image from "next/image";

export default function Hero() {

    return (

            <div className="hero">
                <div className="hero-title">
                    <h2>Lattermild datammatiker, med iværksætter baggrund og høje sociale skills</h2>
                </div>

                <div className="hero-pic">
                    <Image
                        src="/lala.png"
                        alt="Emma"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "450px", height: "auto" }}   
                    />
                </div>
            </div>


    );
}