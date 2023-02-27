import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { points } from "../../data/data";

export default function GalleryItem({ src, index, columnOffset }) {
  const values = points[index];
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;
  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 3 || index == 0) return 0;
    return 1;
  };
  return (
    <div
      className="gallery-item"
      data-scroll
      ref={ref}
      data-scroll-speed={getScrollIndex()}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className="gallery-item-image" data-scroll-class>
        <div
          className="gallery-item-image-inner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}
