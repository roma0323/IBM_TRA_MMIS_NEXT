'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Import necessary modules
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default function Loading() {
  const containerRef = useRef();

  useEffect(() => {
    let mixer;

    const clock = new THREE.Clock();
    const container = containerRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // PMREM Generator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // Camera
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 1, 100);
    camera.position.set(5, 2, 8);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    // Draco Loader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/'); // Adjust the path if necessary

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/LittlestTokyo.glb', // Update the path to your model
      function (gltf) {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        animate();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      controls.update();

      renderer.render(scene, camera);
    }

    // Handle window resize
    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener('resize', onWindowResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      controls.dispose();
      renderer.dispose();
      pmremGenerator.dispose();
      if (mixer) mixer.stopAllAction();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    ></div>
  );
}
