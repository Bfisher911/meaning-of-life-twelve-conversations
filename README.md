# The Meaning of Life: Twelve Conversations

An interactive, visually elegant single-page application exploring twelve philosophical perspectives on the meaning of life, culminating in a synthesized conversation with the "Oracle of Twelve Voices". 

## Overview
This application functions as a "philosophy constellation map". 12 philosophers orbit a central Oracle hub. 
Students hover over philosophers to read clear, witty summaries of their views. Clicking a philosopher opens a curated BoodleBox chatbot in a new tab. 
Returning students can "Mark Complete", and after completing at least 5 philosopher conversations, the central Oracle is unlocked.

## Setup and Installation

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready static files will be exported to the `/dist` directory.

## Editing Content (Instructors)

All philosopher metadata, including names, module titles, witty hover summaries, "why choose" text, and chatbot URLs are stored in a single configuration file.

**Location**: `src/data/philosophers.ts`

**To Edit a Philosopher**:
Open the file and locate the `philosophers` array. You can freely change any text field or URL.
```typescript
{
  id: 'plato',
  name: 'Plato',
  moduleTitle: 'The Allegory of the Cave',
  chatbotUrl: 'https://box.boodle.ai/a/@Module1Plato...',
  summary: 'Plato thinks you are staring at shadows...',
  whyChoose: 'Choose Plato if you suspect reality is an illusion...'
}
```

**To Edit the Oracle**:
At the bottom of the same file, locate the `oracle` object.
```typescript
export const oracle = {
  id: 'oracle',
  name: 'Oracle of Twelve Voices',
  chatbotUrl: 'https://box.boodle.ai/a/@TheOracleofTwelveVoices',
};
```

## Technical Details
* Built with **React** and **Vite**
* Styled using **Tailwind CSS v4**
* Custom CSS animations for the gentle orbital layout
* Persistent browser state tracking using `localStorage`
