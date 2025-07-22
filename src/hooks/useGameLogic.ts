'use client';

import { useState, useEffect } from 'react';
import { GameState, UserProfile } from '../types/game';
import { getRandomTeamAndRecord } from '../data/basketball-data';
import { normalizeSeason } from '../data/helpers';

const INITIAL_GAME_STATE: GameState = {
  currentTeam: null,
  currentRecord: null,
  guesses: {
    wins: null,
    season: null,
    teamName: null,
    playoffResult: null,
  },
  finalGuesses: null,
  hints: {
    wins: null,
    season: null,
    teamName: null,
    playoffResult: null,
    teamColors: null,
  },
  submitted: {
    wins: false,
    season: false,
    teamName: false,
    playoffResult: false,
  },
  score: 0,
  streak: 0,
  hintsUsed: 0,
  hintsRemaining: 3,
  submissionAttempts: 0,
};

const INITIAL_USER_PROFILE: UserProfile = {
  id: '',
  gamesPlayed: 0,
  bestStreak: 0,
  totalScore: 0,
  hintsRemaining: 3,
};

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load user profile from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('basketball-guesser-profile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
    setLoading(false);
  }, []);

  // Save user profile to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('basketball-guesser-profile', JSON.stringify(userProfile));
    }
  }, [userProfile, loading]);

  const startNewGame = () => {
    const { team, record } = getRandomTeamAndRecord();
    setGameState({
      ...INITIAL_GAME_STATE,
      currentTeam: team,
      currentRecord: record,
      score: gameState.score,
      streak: gameState.streak,
      hintsRemaining: 3,
      finalGuesses: null,
    });
    setShowResults(false);
  };

  const makeGuess = (type: keyof GameState['guesses'], value: string | number | null) => {
    setGameState(prev => ({
      ...prev,
      guesses: {
        ...prev.guesses,
        [type]: value,
      },
      // Don't reset submitted state when user is typing - let them see previous feedback until they submit again
    }));
  };

  const submitGuesses = () => {
    if (!gameState.currentRecord) return;

    const { wins, season, teamName, playoffResult } = gameState.guesses;
    const { currentRecord, currentTeam } = gameState;
    
    // Save the original guesses before we potentially clear them
    const originalGuesses = {
      wins,
      season,
      teamName,
      playoffResult,
    };
    
    let score = 0;
    let correct = 0;
    const totalGuesses = 4;

    // Track correct answers
    const correctAnswers = {
      wins: wins !== null && wins === currentRecord.wins,
      season: season !== null && normalizeSeason(season) === normalizeSeason(currentRecord.season),
      teamName: teamName === currentTeam?.name,
      playoffResult: playoffResult === currentRecord.playoffResult,
    };

    // Only add points for newly correct answers (not already submitted as correct)
    const newlyCorrect = {
      wins: correctAnswers.wins && !gameState.submitted.wins,
      season: correctAnswers.season && !gameState.submitted.season,
      teamName: correctAnswers.teamName && !gameState.submitted.teamName,
      playoffResult: correctAnswers.playoffResult && !gameState.submitted.playoffResult,
    };

    // Count newly correct answers and calculate score
    Object.values(newlyCorrect).forEach(isNewlyCorrect => {
      if (isNewlyCorrect) {
        score += 25;
      }
    });

    // Count total correct answers for game completion check
    Object.values(correctAnswers).forEach(isCorrect => {
      if (isCorrect) {
        correct++;
      }
    });

    // Increment submission attempts
    const newSubmissionAttempts = gameState.submissionAttempts + 1;

    // Always update score and allow continued play
    const newScore = gameState.score + score;
    setGameState(prev => ({
      ...prev,
      score: newScore,
      submissionAttempts: newSubmissionAttempts,
      submitted: {
        // Mark as submitted for all fields that had guesses, regardless of correctness
        wins: wins !== null ? true : prev.submitted.wins,
        season: season !== null ? true : prev.submitted.season,
        teamName: teamName !== null ? true : prev.submitted.teamName,
        playoffResult: playoffResult !== null ? true : prev.submitted.playoffResult,
      },
      // Clear incorrect guesses so player can try again, but keep correct ones
      guesses: {
        wins: correctAnswers.wins ? prev.guesses.wins : null,
        season: correctAnswers.season ? prev.guesses.season : null,
        teamName: correctAnswers.teamName ? prev.guesses.teamName : null,
        playoffResult: correctAnswers.playoffResult ? prev.guesses.playoffResult : null,
      },
    }));

    // Check if we should auto-reveal after 5 attempts or if all answers are correct
    if (correct === totalGuesses || newSubmissionAttempts >= 5) {
      let finalScore = newScore;
      let newStreak = gameState.streak;

      // Only give bonus points and increment streak if all answers are correct
      if (correct === totalGuesses) {
        // Bonus for perfect score
        const bonusScore = 50;
        finalScore = newScore + bonusScore;
        newStreak = gameState.streak + 1;
      } else {
        // Auto-reveal after 5 attempts - reset streak but don't penalize score
        newStreak = 0;
        
        // Save player's final guesses before overwriting them
        setGameState(prev => ({
          ...prev,
          finalGuesses: {
            wins: originalGuesses.wins,
            season: originalGuesses.season,
            teamName: originalGuesses.teamName,
            playoffResult: originalGuesses.playoffResult,
          },
          guesses: {
            wins: prev.currentRecord?.wins || null,
            season: prev.currentRecord?.season || null,
            teamName: prev.currentTeam?.name || null,
            playoffResult: prev.currentRecord?.playoffResult || null,
          },
          submitted: {
            wins: true,
            season: true,
            teamName: true,
            playoffResult: true,
          },
        }));
      }

      setGameState(prev => ({
        ...prev,
        score: finalScore,
        streak: newStreak,
      }));

      // Update user profile
      setUserProfile(prev => ({
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        totalScore: prev.totalScore + finalScore,
      }));

      setShowResults(true);
    }
  };

  const showHint = (type: keyof GameState['hints']) => {
    if (gameState.hintsRemaining <= 0) return;

    const { currentRecord, currentTeam } = gameState;
    if (!currentRecord || !currentTeam) return;

    let hintValue: string | number | null;
    switch (type) {
      case 'wins':
        // Provide a range instead of exact number
        const wins = currentRecord.wins;
        const rangeSize = 5; // ±5 wins range
        const minWins = Math.max(0, wins - rangeSize);
        const maxWins = Math.min(82, wins + rangeSize);
        hintValue = `${minWins}-${maxWins}`;
        break;
      case 'season':
        // Provide a smaller, more precise year range hint
        const seasonYear = currentRecord.season;
        const seasonMatch = seasonYear.match(/^(\d{4})-(\d{2})$/);
        if (seasonMatch) {
          const startYear = parseInt(seasonMatch[1]);
          const rangeSize = 3; // ±3 years range
          const minYear = startYear - rangeSize;
          const maxYear = startYear + rangeSize;
          hintValue = `${minYear}-${maxYear} (format: YYYY-YY)`;
        } else {
          // For single year seasons
          const year = parseInt(seasonYear);
          const rangeSize = 3; // ±3 years range
          const minYear = year - rangeSize;
          const maxYear = year + rangeSize;
          hintValue = `${minYear}-${maxYear}`;
        }
        break;
      case 'teamName':
        hintValue = currentTeam.name;
        break;
      case 'playoffResult':
        // Provide a very subtle hint based on the playoff result
        const playoffResult = currentRecord.playoffResult;
        if (playoffResult === 'Did not make playoffs') {
          hintValue = 'Spring vacation started early';
        } else if (playoffResult === 'First Round') {
          hintValue = 'Brief postseason memories';
        } else if (playoffResult === 'Conference Semifinals') {
          hintValue = 'Made some noise in May';
        } else if (playoffResult === 'Conference Finals') {
          hintValue = 'So close to June glory';
        } else if (playoffResult === 'League Finals') {
          hintValue = 'June was bittersweet';
        } else if (playoffResult === 'League Champions') {
          hintValue = 'June ended perfectly';
        } else {
          hintValue = playoffResult;
        }
        break;
      case 'teamColors':
        hintValue = `Primary: ${currentTeam.primaryColor}, Secondary: ${currentTeam.secondaryColor}`;
        break;
      default:
        return;
    }

    setGameState(prev => ({
      ...prev,
      hints: {
        ...prev.hints,
        [type]: hintValue as string,
      },
      hintsUsed: prev.hintsUsed + 1,
      hintsRemaining: prev.hintsRemaining - 1,
    }));
  };

  const giveUp = () => {
    if (!gameState.currentRecord || !gameState.currentTeam) return;

    // Reset streak since player gave up
    const newStreak = 0;

    setGameState(prev => ({
      ...prev,
      streak: newStreak,
      finalGuesses: {
        wins: prev.guesses.wins,
        season: prev.guesses.season,
        teamName: prev.guesses.teamName,
        playoffResult: prev.guesses.playoffResult,
      },
      submitted: {
        wins: true,
        season: true,
        teamName: true,
        playoffResult: true,
      },
      // Reveal all correct answers
      guesses: {
        wins: prev.currentRecord?.wins || null,
        season: prev.currentRecord?.season || null,
        teamName: prev.currentTeam?.name || null,
        playoffResult: prev.currentRecord?.playoffResult || null,
      },
    }));

    // Update user profile - count as a game played but with 0 score
    setUserProfile(prev => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
      bestStreak: prev.bestStreak, // Don't update best streak when giving up
    }));

    setShowResults(true);
  };

  return {
    gameState,
    userProfile,
    showResults,
    loading,
    startNewGame,
    makeGuess,
    submitGuesses,
    showHint,
    giveUp,
  };
}
