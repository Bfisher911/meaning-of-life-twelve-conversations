import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { philosophers } from '../data/philosophers';

interface ActiveQuote {
    id: number;
    text: string;
    author: string;
    x: number;
    y: number;
}

export const BackgroundQuotes: React.FC = () => {
    const [activeQuotes, setActiveQuotes] = useState<ActiveQuote[]>([]);

    useEffect(() => {
        let quoteIdCounter = 0;

        // Function to occasionally spawn a new quote
        const spawnQuote = () => {
            // Don't overwhelm the screen
            setActiveQuotes(current => {
                if (current.length >= 3) return current;

                const randomPhilosopher = philosophers[Math.floor(Math.random() * philosophers.length)];

                // Pick a random position on the screen, keeping it somewhat away from the edges
                const x = 10 + Math.random() * 60; // 10% to 70%
                const y = 10 + Math.random() * 80; // 10% to 90%

                const newQuote: ActiveQuote = {
                    id: ++quoteIdCounter,
                    text: randomPhilosopher.quote,
                    author: randomPhilosopher.name,
                    x,
                    y
                };

                // Schedule removal of this quote after 8-12 seconds
                setTimeout(() => {
                    setActiveQuotes(prev => prev.filter(q => q.id !== newQuote.id));
                }, 8000 + Math.random() * 4000);

                return [...current, newQuote];
            });
        };

        // Attempt to spawn a new quote every 3-6 seconds
        const interval = setInterval(() => {
            if (Math.random() > 0.3) {
                spawnQuote();
            }
        }, 4000);

        // Initial spawn
        setTimeout(spawnQuote, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <AnimatePresence>
                {activeQuotes.map(quote => (
                    <motion.div
                        key={quote.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20, filter: 'blur(4px)' }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        className="absolute max-w-sm text-center"
                        style={{ left: `${quote.x}%`, top: `${quote.y}%` }}
                    >
                        <p className="text-xl md:text-2xl font-serif text-[var(--color-cosmic-text)] opacity-30 italic font-light drop-shadow-md">
                            {quote.text}
                        </p>
                        <p className="text-sm text-[var(--color-cosmic-highlight)] opacity-40 mt-2 font-semibold tracking-widest uppercase">
                            — {quote.author}
                        </p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
