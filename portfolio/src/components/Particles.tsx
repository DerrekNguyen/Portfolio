import type { Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useMemo, useState, useEffect } from "react";

const ParticleComponent: React.FC = () => {
    const options = useMemo(
        () => ({
            particles: {
                number: { value: 80 },
                color: { value: "#ffffffff"},
                move: { enable: true, speed: {min: 1, max: 2} },
                size: { value: 1 },
                links: { enable: true, size: 1, color:"#87e4f7ff" },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    repulse: { distance: 80 },
                }
            },
        }),
        []
    );

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    return init ? <Particles options={options} style={{position: "fixed", zIndex: -1}}/> : null;
}

export default ParticleComponent;
