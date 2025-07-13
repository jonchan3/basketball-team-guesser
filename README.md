# Basketball Team Guesser

A modern, interactive basketball trivia game where players guess information about professional basketball teams including wins, seasons, team names, and playoff results. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏀 Features

- **Guess Basketball Team Stats**: Predict wins, season, team name, and playoff results
- **Scoring System**: Earn points for correct guesses with bonus for perfect rounds
- **Hint System**: Use hints to help with difficult guesses (3 hints per game)
- **Responsive Design**: Beautiful UI that works on all devices
- **Local Storage**: Game progress and user profiles saved locally

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎮 How to Play

1. **Start a New Game**: Click "Start New Game" to begin
2. **Make Your Guesses**: 
   - Enter the number of regular season wins (0-82)
   - Select the season (e.g., 2019-20)
   - Choose the team name from the dropdown
   - Pick how far they made it in the playoffs
3. **Use Hints**: Click "Use Hint" buttons to reveal answers (3 hints per game)
4. **Submit**: Click "Submit Guesses" when ready
5. **View Results**: See how you did and your score

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React hooks
- **Data Storage**: Local Storage
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── GameBoard.tsx   # Main game component
├── data/              # Game data
│   └── basketball-data.ts    # Basketball teams and records
├── hooks/             # Custom React hooks
│   └── useGameLogic.ts # Game logic hook
└── types/             # TypeScript type definitions
    └── game.ts        # Game-related types
```

## 🏆 Game Scoring

- **Wins Guess**: 25 points (within ±3 wins of actual)
- **Season Guess**: 25 points (exact match)
- **Team Name**: 25 points (exact match)
- **Playoff Result**: 25 points (exact match)
- **Perfect Round Bonus**: +50 points

## 🔮 Future Features

- Player roster hints
- More professional basketball teams and historical data
- Multiplayer competitions
- Leaderboards
- Social sharing
- Mobile app version

## 📄 License

This project is for educational and demonstration purposes.
