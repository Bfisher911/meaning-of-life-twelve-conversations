import { useState, useEffect } from 'react';
import { Constellation } from './components/Constellation';
import { Instructions } from './components/Instructions';

function App() {
  // Try to load completions from localStorage
  const [completions, setCompletions] = useState<string[]>(() => {
    const saved = localStorage.getItem('meaningOfLifeCompletions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Persist to localStorage whenever completions change
  useEffect(() => {
    localStorage.setItem('meaningOfLifeCompletions', JSON.stringify(completions));
  }, [completions]);

  const handleToggleComplete = (id: string) => {
    setCompletions(prev =>
      prev.includes(id)
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const handleReset = () => {
    setCompletions([]);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cosmic-bg)] text-[var(--color-cosmic-text)] select-none">
      <div className="stars" />

      {/* Top Banner / Title */}
      <header className="fixed top-0 left-0 right-0 z-30 p-6 flex flex-col items-center pointer-events-none">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg text-center font-serif">
          The Meaning of Life
        </h1>
        <h2 className="text-xl text-[var(--color-cosmic-highlight)] tracking-[0.2em] uppercase mt-2 text-center drop-shadow">
          Twelve Conversations
        </h2>
      </header>

      {/* Main Interactive Map */}
      <main>
        <Constellation
          completions={completions}
          onToggleComplete={handleToggleComplete}
          requiredCount={5}
        />
      </main>

      {/* Instructions Panel */}
      <div className="pointer-events-auto">
        <Instructions onReset={handleReset} />
      </div>
    </div>
  );
}

export default App;
