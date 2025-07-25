import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="w-full h-screen bg-gradient-to-tr from-black to-[#20123d] to-75% relative overflow-hidden">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    className="absolute inset-0"
                    options={{
                        fullScreen: { enable: false },
                        fpsLimit: 220,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: "#9478ce" },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: { enable: true, area: 800 },
                                value: 60,
                            },
                            opacity: { value: 0.5 },
                            shape: { type: "circle" },
                            size: { value: { min: 2, max: 12 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );
}
