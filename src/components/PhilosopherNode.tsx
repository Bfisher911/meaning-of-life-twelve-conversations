import React, { useState } from 'react';
import type { Philosopher } from '../data/philosophers';

interface Props {
    philosopher: Philosopher;
    isCompleted: boolean;
    onToggleComplete: () => void;
    angle: number; // in degrees
    radius: number; // distance from center
}

import { motion } from 'framer-motion';

export const PhilosopherNode: React.FC<Props> = ({ philosopher, isCompleted, onToggleComplete, angle, radius }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Calculate position using basic trigonometry
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'z-50' : 'z-10'}`}
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative group flex flex-col items-center"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.4}
                whileDrag={{ scale: 1.1, zIndex: 60 }}
                whileTap={{ cursor: 'grabbing' }}
                style={{ cursor: 'grab' }}
            >
                {/* Hover Card (Tooltip) */}
                {isHovered && (
                    <div className="absolute bottom-full mb-4 w-72 p-5 rounded-xl bg-[var(--color-cosmic-card)] border border-[var(--color-cosmic-highlight)] backdrop-blur-md shadow-2xl text-left z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <h3 className="text-xl font-bold text-white mb-1">{philosopher.name}</h3>
                        <h4 className="text-sm text-[var(--color-cosmic-accent)] mb-3">{philosopher.moduleTitle}</h4>
                        <p className="text-sm text-gray-300 mb-3">{philosopher.summary}</p>
                        <p className="text-xs text-[var(--color-cosmic-highlight)] italic">💡 {philosopher.whyChoose}</p>
                    </div>
                )}

                {/* Node Avatar/Button */}
                <a
                    href={philosopher.chatbotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable={false}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 transform hover:scale-110 border-2 ${isCompleted
                        ? 'bg-[var(--color-cosmic-highlight)] border-white text-white shadow-[0_0_15px_var(--color-cosmic-highlight)]'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-[var(--color-cosmic-accent)]'
                        }`}
                >
                    {philosopher.name.charAt(0)}
                </a>

                {/* Label & Checkbox underneath */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center w-max">
                    <span className="text-xs font-semibold whitespace-nowrap bg-black/50 px-2 py-1 rounded-md">
                        {philosopher.name}
                    </span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onToggleComplete();
                        }}
                        className={`mt-2 text-xs px-3 py-1 rounded-full transition-colors border ${isCompleted
                            ? 'bg-green-600/20 text-green-400 border-green-500/50 hover:bg-green-600/40'
                            : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
                            }`}
                    >
                        {isCompleted ? '✓ Completed' : 'Mark Complete'}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
