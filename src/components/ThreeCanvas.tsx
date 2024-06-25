import { useEffect, useRef } from 'react';
import THREE from 'three';

const ThreeCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.width / canvas.height,
            0.1,
            1000,
        );
        const renderer = new THREE.WebGLRenderer({ canvas });

        renderer.setSize(canvas.width, canvas.height);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // Cleanup on component unmount
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'auto',
                touchAction: 'none',
            }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        display: 'block',
                        width: '957px',
                        height: '857px',
                    }}
                    data-engine="three.js r149"
                    width="1914"
                    height="1714"
                ></canvas>
            </div>
        </div>
    );
};

export default ThreeCanvas;
