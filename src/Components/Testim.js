import React, { useMemo } from "react";
import { useStoreState } from "../redux/selector";
import locale from "../localization/locale.json";
import Frame from "../assets/Vector (2).png";
import First from "../assets/photo.png";
import { Arrow } from "./svg";

function Testim() {
  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang]);
  const [slider, setSlider] = React.useState(0);

  return (
    <div className="Testimonials">
      <div className="full-cart">
        <h1>{langData.test}</h1>
        <div className="icon-cart">
          <div className="imgs">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <img key={i} src={Frame} alt="star" />
              ))}
          </div>
          <p>{langData.up}</p>
        </div>
        <div className="cartt">
          <h2>{langData.never}</h2>
          <h5>{langData.forget}</h5>
        </div>
      </div>
      <div className="slider">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <img
              src={`https://picsum.photos/400/50${i}`}
              alt="..."
              style={{
                opacity: i === slider ? 1 : 0,
              }}
            />
          ))}
        <div className="navigations">
          <button
            onClick={() => setSlider((prev) => prev - 1)}
            disabled={slider === 0}
          >
            <Arrow />
          </button>
          <button
            onClick={() => setSlider((prev) => prev + 1)}
            disabled={slider === 2}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testim;
