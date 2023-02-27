import react, { useRef, useEffect } from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GalleryItem from "./components/GalleryItem/GalleryItem";
import { imageData } from "./data/data";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotiveScroll/locoBasic.css";
function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);

  const images = imageData.map((tuples, index) =>
    tuples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );
  return (
    <>
      <Navbar />
      <div className="main-container"></div>
      <div className="scroll-container" data-scroll-container ref={ref}>
        <div className="content">
          <div className="gallery">
            {images}
            <div className="gallery-helper">Scroll to discover more</div>
            <div
              className="behind-text fill"
              data-scroll
              data-scroll-speed={-1}
            >
              everybody loves a good story
            </div>
            <div
              className="behind-text outline"
              data-scroll
              data-scroll-speed={-1}
            >
              everybody loves a good story
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
