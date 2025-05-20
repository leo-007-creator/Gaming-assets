import Image from "next/image";
import Navbar from "./page-1/Navbar";
import Contant from "./page-1/Contant";
import Newarrival from "./page-1/Newarrival";
import Cta from "./page-1/Cta";
import Footer from "./page-1/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="video-palyer">
        <video src="forza.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
        </video>
        <div className="video-text">
          <h1>Get Unreal/Unity Assets free</h1>
          <p>Assets high quaity 3D models,materials,blueprints and more for your game development project</p>
          <div className="button-group">
            <button className="cool-button">Browser Assets</button>
            <button className="cool-button">Contribute Assets</button>
          </div>
          <div className="para"><p>*This is Third-party resourse site,not affiliated with Epic Games and Unity Technologies.</p>
          </div>
        </div>
      </div>

      <Contant />
      <Newarrival/>
      <Cta/>
      <Footer/>
    </>
  );

}
