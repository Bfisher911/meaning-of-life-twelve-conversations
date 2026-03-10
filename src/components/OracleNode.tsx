import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    isUnlocked: boolean;
    completionsCount: number;
    requiredCount: number;
    oracleUrl: string;
}

export const OracleNode: React.FC<Props> = ({ isUnlocked, completionsCount, requiredCount, oracleUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            whileDrag={{ scale: 1.05, zIndex: 60 }}
            whileTap={{ cursor: 'grabbing' }}
            style={{ cursor: 'grab' }}
        >
            <div className="relative group flex flex-col items-center justify-center">
                {/* Hover Card */}
                {isHovered && (
                    <div className="absolute bottom-full mb-6 w-64 p-4 rounded-xl bg-[var(--color-cosmic-card)] border border-[var(--color-cosmic-highlight)] backdrop-blur-md shadow-2xl text-center z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <h3 className="text-xl font-bold text-white mb-2">Oracle of Twelve Voices</h3>
                        {!isUnlocked ? (
                            <p className="text-sm text-[var(--color-cosmic-accent)]">
                                Complete at least {requiredCount} philosopher dialogues to unlock the final synthesis conversation.
                            </p>
                        ) : (
                            <p className="text-sm text-[var(--color-cosmic-highlight)]">
                                The Oracle is ready. Click to begin your final synthesis.
                            </p>
                        )}
                    </div>
                )}

                {/* Central Orb */}
                <a
                    href={isUnlocked ? oracleUrl : undefined}
                    target={isUnlocked ? "_blank" : undefined}
                    rel={isUnlocked ? "noopener noreferrer" : undefined}
                    draggable={false}
                    onClick={(e) => {
                        if (!isUnlocked) e.preventDefault();
                    }}
                    className={`w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-700 border-4 relative ${isUnlocked
                        ? 'bg-gradient-to-br from-[#112240] to-[var(--color-cosmic-highlight)] border-[#66fcf1] shadow-[0_0_40px_rgba(102,252,241,0.6)] hover:scale-105 cursor-pointer hover:shadow-[0_0_60px_rgba(102,252,241,0.8)]'
                        : 'bg-gray-900 border-gray-700 text-gray-600 shadow-inner cursor-not-allowed opacity-80'
                        }`}
                >
                    <span className={`text-4xl mb-1 ${isUnlocked ? 'animate-pulse' : 'opacity-50'}`}>
                        {isUnlocked ? '✨' : '🔒'}
                    </span>
                    <span className={`text-sm font-bold tracking-wider ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                        ORACLE
                    </span>

                    {/* Locked Progress Ring Overlay */}
                    {!isUnlocked && (
                        <div className="absolute inset-0 rounded-full border-4 border-[var(--color-cosmic-highlight)] opacity-20" />
                    )}
                </a>

                {/* Status Text under Oracle */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-max">
                    <p className="text-[var(--color-cosmic-accent)] font-medium bg-black/60 px-4 py-1.5 rounded-full border border-[var(--color-cosmic-highlight)]/30 backdrop-blur-sm">
                        {isUnlocked
                            ? "The Oracle is now available."
                            : `Philosophers completed: ${completionsCount} / ${requiredCount}`
                        }
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
