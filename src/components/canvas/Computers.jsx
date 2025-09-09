import React, { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = React.memo(({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={1.5} />
      <directionalLight
        position={[0, 10, 10]}
        intensity={1.2}
        color={"#ffffff"}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  // Media query for responsive scaling
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const updateIsMobile = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  // Clean up WebGL context on unmount
  useEffect(() => {
    return () => {
      if (canvasRef.current) {
        const gl =
          canvasRef.current.getContext("webgl2") ||
          canvasRef.current.getContext("webgl");
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      }
    };
  }, []);

  return useMemo(() => (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  ), [isMobile]);
};

export default ComputersCanvas;
