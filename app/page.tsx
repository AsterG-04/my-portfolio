"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// 3D Avatar Component
function Avatar() {
  const { scene } = useGLTF(
    "https://models.readyplayer.me/68efaca00e979cf6fb19f529.glb"
  );
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();
    // Floating effect
    scene.position.y = -1.5 + Math.sin(time) * 0.05;
    // Slow rotation & slight tilt
    scene.rotation.y += 0.002;
    scene.rotation.x = -0.05;
  });

  return <primitive object={scene} scale={1.3} />;
}

// Main Page Component
export default function Home() {
  const [text, setText] = useState("");
  const message =
    "But remember — don’t judge a book by its cover; what’s inside might just surprise you.";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i++));
      if (i > message.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex justify-between items-center h-screen text-white bg-gradient-to-b from-gray-900 to-black px-20">
      {/* Left Section */}
      <motion.div
        className="flex flex-col justify-center max-w-lg"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Hi, I’m Chaw Thiri Win 👋</h1>
        <p className="mt-6 text-lg text-gray-300">Welcome to my futuristic portfolio!</p>
        <motion.p
          className="mt-4 text-lg text-cyan-300 font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {text}
        </motion.p>
      </motion.div>

      {/* Right Section - 3D Avatar */}
      <motion.div
        className="w-1/2 h-[500px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <directionalLight position={[-2, 2, 5]} intensity={0.5} color="#0ff" />
          <Suspense fallback={null}>
            <Avatar />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </motion.div>
    </main>
  );
}
