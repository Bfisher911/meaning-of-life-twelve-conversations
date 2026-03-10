import React, { useEffect, useState } from 'react';
import { oracle, philosophers } from '../data/philosophers';
import { OracleNode } from './OracleNode';
import { PhilosopherNode } from './PhilosopherNode';

interface Props {
    completions: string[];
    onToggleComplete: (id: string) => void;
    requiredCount: number;
}

export const Constellation: React.FC<Props> = ({ completions, onToggleComplete, requiredCount }) => {
    const isOracleUnlocked = completions.length >= requiredCount;
    const radius = 320; // Distance of philosopher nodes from center

    // Rotate slowly over time
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (time: number) => {
            const delta = time - lastTime;
            // Around 0.015 degrees per ms = ~24 seconds per revolution
            // We want very slow, elegant movement. ~120s per revolution -> ~0.003 deg/ms
            setRotation(prev => (prev + delta * 0.003) % 360);
            lastTime = time;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background styling is inherited from body/stars class */}

            {/* Faint visible orbital rings */}
            <div className="absolute w-[640px] h-[640px] rounded-full border border-gray-600/20" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-gray-700/10" />

            {/* Central Oracle */}
            <OracleNode
                isUnlocked={isOracleUnlocked}
                completionsCount={completions.length}
                requiredCount={requiredCount}
                oracleUrl={oracle.chatbotUrl}
            />

            {/* Orbiting Philosopher Nodes */}
            {philosophers.map((philosopher, index) => {
                // distribute evenly (360 / 12 = 30 degrees apart)
                const baseAngle = (index / philosophers.length) * 360;
                const currentAngle = baseAngle + rotation;

                return (
                    <PhilosopherNode
                        key={philosopher.id}
                        philosopher={philosopher}
                        isCompleted={completions.includes(philosopher.id)}
                        onToggleComplete={() => onToggleComplete(philosopher.id)}
                        angle={currentAngle}
                        radius={radius}
                    />
                );
            })}
        </div>
    );
};
