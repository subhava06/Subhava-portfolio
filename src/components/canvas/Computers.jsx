import React, { useState, useEffect } from "react";
import "./Computers.css"; // Animation styles for the button

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive layout
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const updateIsMobile = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <div
      className="resume-container"
style={{
    marginTop: isMobile ? "20px" : "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // <-- centers horizontally
    justifyContent: "center", // <-- centers vertically
    gap: isMobile ? "10px" : "20px", // <-- space between elements
    height: isMobile ? "80px" : "100px", // <-- adjust height based on device
  }}    >
      <h2 className="resume-title">Check out my Resume</h2>
      <a
        href="/subhava_resume.pdf" // Ensure your PDF is in public folder
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  );
};

export default ComputersCanvas;
