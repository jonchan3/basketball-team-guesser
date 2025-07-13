'use client';

import { useState, useEffect } from 'react';
import { GameState, UserProfile } from '../types/game';
import { getRandomTeamAndRecord } from '../data/basketball-data';
import { getSeasonYearRangeHint, isYearInSeasonRange, normalizeSeason } from '../data/helpers';

const INITIAL_GAME_STATE: GameState = {
  currentTeam: null,
  currentRecord: null,
  guesses: {
    wins: null,
    season: null,
    teamName: null,
    playoffResult: null,
  },
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
    }));
  };

  const submitGuesses = () => {
    if (!gameState.currentRecord) return;

    const { wins, season, teamName, playoffResult } = gameState.guesses;
    const { currentRecord, currentTeam } = gameState;
    
    let score = 0;
    let correct = 0;
    const totalGuesses = 4;

    // Track correct answers
    const correctAnswers = {
      wins: wins !== null && wins === currentRecord.wins,
      season: season !== null && (
        normalizeSeason(season) === normalizeSeason(currentRecord.season) ||
        isYearInSeasonRange(season, currentRecord.season)
      ),
      teamName: teamName === currentTeam?.name,
      playoffResult: playoffResult === currentRecord.playoffResult,
    };

    // Count correct answers and calculate score
    Object.values(correctAnswers).forEach(isCorrect => {
      if (isCorrect) {
        score += 25;
        correct++;
      }
    });

    // Update submitted status for all fields
    const newSubmitted = {
      wins: true,
      season: true,
      teamName: true,
      playoffResult: true,
    };

    // Only end the game if all answers are correct
    if (correct === totalGuesses) {
      // Bonus for perfect score
      score += 50;
      
      const newStreak = gameState.streak + 1;
      const newScore = gameState.score + score;

      setGameState(prev => ({
        ...prev,
        score: newScore,
        streak: newStreak,
        submitted: newSubmitted,
      }));

      // Update user profile
      setUserProfile(prev => ({
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        totalScore: prev.totalScore + score,
      }));

      setShowResults(true);
    } else {
      // If not all correct, update score and submitted status but continue the game
      const newScore = gameState.score + score;
      setGameState(prev => ({
        ...prev,
        score: newScore,
        submitted: newSubmitted,
        // Clear incorrect guesses so player can try again
        guesses: {
          wins: correctAnswers.wins ? prev.guesses.wins : null,
          season: correctAnswers.season ? prev.guesses.season : null,
          teamName: correctAnswers.teamName ? prev.guesses.teamName : null,
          playoffResult: correctAnswers.playoffResult ? prev.guesses.playoffResult : null,
        },
      }));
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
        // Provide a year range hint instead of exact season
        hintValue = getSeasonYearRangeHint(currentRecord.season, 2);
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

  return {
    gameState,
    userProfile,
    showResults,
    loading,
    startNewGame,
    makeGuess,
    submitGuesses,
    showHint,
  };
}
