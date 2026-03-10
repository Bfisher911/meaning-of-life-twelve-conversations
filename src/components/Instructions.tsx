import React from 'react';

interface Props {
    onReset: () => void;
}

export const Instructions: React.FC<Props> = ({ onReset }) => {
    return (
        <div className="fixed bottom-6 left-6 z-30 max-w-sm">
            <div className="bg-[var(--color-cosmic-card)] border border-gray-700/50 backdrop-blur-md rounded-2xl p-5 shadow-2xl">
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span>📖</span> How this works
                </h2>
                <ul className="text-sm text-gray-300 space-y-2 mb-5 pl-5 list-disc marker:text-[var(--color-cosmic-highlight)]">
                    <li>Choose at least 5 philosophers</li>
                    <li>Click a philosopher to open their chatbot in BoodleBox</li>
                    <li>After each conversation, return and mark that philosopher complete</li>
                    <li>Once 5 are completed, unlock the Oracle of Twelve Voices</li>
                    <li>Complete the Oracle conversation last</li>
                    <li>Submit the Oracle conversation link in Canvas</li>
                </ul>
                <div className="border-t border-gray-700/50 pt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">Assignment Tracker v1.0</span>
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure you want to reset all progress?')) {
                                onReset();
                            }
                        }}
                        className="text-xs text-red-400 hover:text-red-300 hover:underline px-2 py-1 rounded transition-colors"
                    >
                        Reset Progress
                    </button>
                </div>
            </div>
        </div>
    );
};
