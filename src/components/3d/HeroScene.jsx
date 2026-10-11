import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroScene = () => {
  const hostRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowPower = window.matchMedia('(max-width: 720px)').matches || navigator.hardwareConcurrency < 4;
    let renderer;
    let frameId;
    let context;
    let pointerHandler;
    const geometries = [];
    const materials = [];

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, lowPower ? 8.8 : 7.8);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !lowPower,
        powerPreference: 'low-power'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.5));
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      host.appendChild(renderer.domElement);

      const world = new THREE.Group();
      scene.add(world);

      const coreGeometry = new THREE.IcosahedronGeometry(1.32, 2);
      const coreMaterial = new THREE.MeshStandardMaterial({
        color: '#183755',
        emissive: '#12415d',
        emissiveIntensity: 0.68,
        metalness: 0.7,
        roughness: 0.25,
        wireframe: true,
        transparent: true,
        opacity: 0.72
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      world.add(core);
      geometries.push(coreGeometry);
      materials.push(coreMaterial);

      const orbGeometry = new THREE.SphereGeometry(0.88, 48, 48);
      const orbMaterial = new THREE.MeshPhysicalMaterial({
        color: '#172740',
        emissive: '#102c4d',
        emissiveIntensity: 0.75,
        metalness: 0.45,
        roughness: 0.18,
        transparent: true,
        opacity: 0.85,
        clearcoat: 0.8
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      world.add(orb);
      geometries.push(orbGeometry);
      materials.push(orbMaterial);

      const ringMaterialA = new THREE.MeshBasicMaterial({ color: '#5ed5f4', transparent: true, opacity: 0.58 });
      const ringMaterialB = new THREE.MeshBasicMaterial({ color: '#a996ff', transparent: true, opacity: 0.38 });
      materials.push(ringMaterialA, ringMaterialB);
      [
        [1.9, 0.9, 0.18, ringMaterialA],
        [2.25, -0.55, 0.6, ringMaterialB],
        [2.55, 0.35, -0.42, ringMaterialA]
      ].forEach(([radius, x, y, material], index) => {
        const geometry = new THREE.TorusGeometry(radius, index === 1 ? 0.006 : 0.009, 8, 150);
        const ring = new THREE.Mesh(geometry, material);
        ring.scale.setScalar((index === 0 ? 0.9 : 0.76) * (lowPower ? 0.82 : 1));
        ring.rotation.set(x, y, index * 0.5);
        world.add(ring);
        geometries.push(geometry);
      });

      const particleCount = lowPower ? 70 : 180;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 7.2;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6.2;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particlesMaterial = new THREE.PointsMaterial({ color: '#a8dff3', size: lowPower ? 0.018 : 0.025, transparent: true, opacity: 0.64, sizeAttenuation: true });
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
      geometries.push(particlesGeometry);
      materials.push(particlesMaterial);

      scene.add(new THREE.AmbientLight('#8cb7dd', 1.25));
      const keyLight = new THREE.PointLight('#5ed5f4', 65, 20);
      keyLight.position.set(-3.5, 3, 4);
      scene.add(keyLight);
      const rimLight = new THREE.PointLight('#987eff', 45, 18);
      rimLight.position.set(3, -2, -1);
      scene.add(rimLight);

      const pointer = { x: 0, y: 0 };
      const pointerTarget = { x: 0, y: 0 };
      pointerHandler = (event) => {
        const bounds = host.getBoundingClientRect();
        pointerTarget.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.24;
        pointerTarget.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.16;
      };
      if (!reduceMotion && !lowPower) host.addEventListener('pointermove', pointerHandler, { passive: true });

      const resizeObserver = new ResizeObserver(() => {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      });
      resizeObserver.observe(host);

      if (!reduceMotion) {
        context = gsap.context(() => {
          gsap.to(camera.position, {
            x: 1.12,
            y: 0.5,
            z: 10.2,
            ease: 'none',
            scrollTrigger: {
              trigger: '#home',
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          });
          gsap.to(world.rotation, {
            y: Math.PI * 0.3,
            x: 0.12,
            ease: 'none',
            scrollTrigger: {
              trigger: '#home',
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          });
        }, host);
      }

      const render = () => {
        if (!reduceMotion && !lowPower) {
          pointer.x += (pointerTarget.x - pointer.x) * 0.035;
          pointer.y += (pointerTarget.y - pointer.y) * 0.035;
          world.rotation.y += 0.0018 + pointer.x * 0.01;
          world.rotation.x += (pointer.y - world.rotation.x) * 0.012;
          particles.rotation.y -= 0.0002;
        }
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
        if (!reduceMotion) frameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        if (pointerHandler) host.removeEventListener('pointermove', pointerHandler);
        if (context) context.revert();
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      };
    } catch (error) {
      setFailed(true);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      }
      return undefined;
    }
  }, []);

  return (
    <div className={`hero-scene ${failed ? 'hero-scene-fallback' : ''}`} ref={hostRef} aria-hidden="true">
      {failed && <div className="scene-static-core"><span /></div>}
    </div>
  );
};

export default HeroScene;
