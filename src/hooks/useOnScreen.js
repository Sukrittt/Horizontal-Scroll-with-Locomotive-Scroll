import { useState, useEffect } from "react";

function useOnScreen(ref) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state with new values
        setIntersecting(entry.isIntersecting ?? false);
      },
      {
        thresHold: 0.9,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return intersecting;
}

export default useOnScreen;
