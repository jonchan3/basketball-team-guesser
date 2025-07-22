'use client';

import React, { useCallback, useState, useEffect } from 'react';
import { Trophy, Zap, Target, Award, Clock, Users } from 'lucide-react';
import { useGameLogic } from '../hooks/useGameLogic';
import { BASKETBALL_TEAMS } from '../data/basketball-data';
import { PlayoffResult, Player, GameState } from '../types/game';
import { normalizeSeason } from '../data/helpers';

const PLAYOFF_RESULTS: PlayoffResult[] = [
  'Did not make playoffs',
  'First Round',
  'Conference Semifinals',
  'Conference Finals',
  'League Finals',
  'League Champions'
];

export default function GameBoard() {
  const {
    gameState,
    showResults,
    loading,
    startNewGame,
    makeGuess,
    submitGuesses,
    showHint,
    giveUp,
  } = useGameLogic();

  // State for dynamically displayed players
  const [displayedPlayers, setDisplayedPlayers] = useState<Player[]>([]);

  // Function to randomly select 6 players with reduced star player priority
  const selectRandomPlayers = (allPlayers: Player[]) => {
    if (!allPlayers || allPlayers.length === 0) return [];
    
    const starPlayers = allPlayers.filter(player => player.isStarPlayer);
    const nonStarPlayers = allPlayers.filter(player => !player.isStarPlayer);
    
    // Randomly decide how many star players to show (0-2 instead of all)
    const maxStarPlayers = Math.min(2, starPlayers.length);
    const numStarPlayers = Math.floor(Math.random() * (maxStarPlayers + 1));
    
    // Shuffle and select star players
    const shuffledStars = [...starPlayers].sort(() => Math.random() - 0.5);
    const selectedStars = shuffledStars.slice(0, numStarPlayers);
    
    // Shuffle and select remaining players from non-stars
    const shuffledNonStars = [...nonStarPlayers].sort(() => Math.random() - 0.5);
    const remainingSlots = 6 - selectedStars.length;
    const selectedNonStars = shuffledNonStars.slice(0, remainingSlots);
    
    // Combine and shuffle the final selection
    const finalSelection = [...selectedStars, ...selectedNonStars]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    
    return finalSelection;
  };

  // Update displayed players only when a new game starts
  useEffect(() => {
    if (gameState.currentRecord?.keyPlayers) {
      setDisplayedPlayers(selectRandomPlayers(gameState.currentRecord.keyPlayers));
    }
  }, [gameState.currentRecord]);

  const handleUseWinsHint = useCallback(() => showHint('wins'), [showHint]);
  const handleUseSeasonHint = useCallback(() => showHint('season'), [showHint]);
  const handleUsePlayoffResultHint = useCallback(() => showHint('playoffResult'), [showHint]);
  const handleUseTeamColorsHint = useCallback(() => showHint('teamColors'), [showHint]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const isGuessComplete = () => {
    const { wins, season, teamName, playoffResult } = gameState.guesses;
    return wins !== null && season !== null && teamName !== null && playoffResult !== null;
  };

  const getScoreColor = (correct: boolean | undefined) => {
    return correct ? 'text-green-500' : 'text-red-500';
  };

  const checkGuessCorrectness = () => {
    if (!gameState.currentRecord || !gameState.currentTeam) return {
      wins: undefined,
      season: undefined,
      teamName: undefined,
      playoffResult: undefined,
    };
    
    const { wins, season, teamName, playoffResult } = gameState.guesses;
    const { currentRecord, currentTeam } = gameState;

    return {
      wins: wins !== null ? wins === currentRecord.wins : undefined,
      season: season !== null ? normalizeSeason(season) === normalizeSeason(currentRecord.season) : undefined,
      teamName: teamName !== null ? teamName === currentTeam.name : undefined,
      playoffResult: playoffResult !== null ? playoffResult === currentRecord.playoffResult : undefined,
    };
  };

  // Get the guesses to display (either current guesses or final guesses for lost games)
  const getDisplayGuesses = () => {
    if (gameState.finalGuesses && showResults) {
      return gameState.finalGuesses;
    }
    return gameState.guesses;
  };

  // Check correctness based on the displayed guesses
  const checkDisplayGuessCorrectness = () => {
    if (!gameState.currentRecord || !gameState.currentTeam) return {
      wins: undefined,
      season: undefined,
      teamName: undefined,
      playoffResult: undefined,
    };
    
    const displayGuesses = getDisplayGuesses();
    const { currentRecord, currentTeam } = gameState;

    return {
      wins: displayGuesses.wins !== null ? displayGuesses.wins === currentRecord.wins : undefined,
      season: displayGuesses.season !== null ? normalizeSeason(displayGuesses.season) === normalizeSeason(currentRecord.season) : undefined,
      teamName: displayGuesses.teamName !== null ? displayGuesses.teamName === currentTeam.name : undefined,
      playoffResult: displayGuesses.playoffResult !== null ? displayGuesses.playoffResult === currentRecord.playoffResult : undefined,
    };
  };

  const getInputFeedback = (field: keyof GameState['guesses']) => {
    if (!gameState.submitted[field as keyof GameState['submitted']]) return null;
    
    const correctness = checkGuessCorrectness();
    const isCorrect = correctness[field as keyof typeof correctness];
    
    if (isCorrect) {
      return (
        <div className="mt-2 p-2 bg-green-900/50 border border-green-500/50 rounded text-green-200 text-sm">
          ✅ Correct!
        </div>
      );
    } else {
      return (
        <div className="mt-2 p-2 bg-red-900/50 border border-red-500/50 rounded text-red-200 text-sm">
          ❌ Try again
        </div>
      );
    }
  };

  const isGameActive = () => {
    // Game is active until all answers are correct AND have been submitted together in a final submission
    // This allows the final submission even when all individual answers are correct
    return !showResults;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 court-pattern text-white">
      {/* Basketball Court Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 shadow-lg court-floor">
        <div className="max-w-4xl mx-auto p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-white">🏀 Legends Lineups</h1>
          </div>
          <div className="flex items-center space-x-6 bg-black/40 px-4 py-2 rounded-lg scoreboard-glow">
            <div className="text-center">
              <div className="text-sm text-orange-200">Score</div>
              <div className="text-xl font-bold text-orange-400 flex items-center">
                <Target className="h-4 w-4 mr-1" />
                {gameState.score}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-orange-200">Streak</div>
              <div className="text-xl font-bold text-orange-400 flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {gameState.streak}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-orange-200">Hints</div>
              <div className="text-xl font-bold text-yellow-400 flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                {gameState.hintsRemaining}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-orange-200">Attempts</div>
              <div className="text-xl font-bold text-red-400 flex items-center">
                🎯 {gameState.submissionAttempts}/5
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {!gameState.currentTeam ? (
          /* Welcome Screen */
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-orange-200">Welcome to Basketball Team Guesser!</h2>
              <p className="text-xl text-orange-100">
                🏀 Guess the wins, season, team name, and playoff results based on the roster!
              </p>
              <div className="bg-black/30 p-4 rounded-lg border border-orange-500/30 max-w-2xl mx-auto">
                <p className="text-orange-200">
                  Study the players and test your basketball knowledge!
                </p>
              </div>
            </div>

            <button
              onClick={startNewGame}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏀 Start New Game
            </button>
          </div>
        ) : showResults ? (
          /* Results Screen */
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-orange-200">🏆 Game Results</h2>
              <div className="bg-black/40 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <h3 className="text-2xl font-bold mb-4 text-orange-200">
                  {gameState.currentTeam.city} {gameState.currentTeam.name} - {gameState.currentRecord?.season}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Your Guess</div>
                    <div className={`text-xl font-bold ${getScoreColor(checkDisplayGuessCorrectness().wins)}`}>
                      {getDisplayGuesses().wins !== null ? `${getDisplayGuesses().wins} wins` : 'No guess'}
                    </div>
                    <div className="text-sm text-orange-300">Actual: {gameState.currentRecord?.wins}</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Your Guess</div>
                    <div className={`text-xl font-bold ${getScoreColor(checkDisplayGuessCorrectness().season)}`}>
                      {getDisplayGuesses().season !== null ? getDisplayGuesses().season : 'No guess'}
                    </div>
                    <div className="text-sm text-orange-300">Actual: {gameState.currentRecord?.season}</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Your Guess</div>
                    <div className={`text-xl font-bold ${getScoreColor(checkDisplayGuessCorrectness().teamName)}`}>
                      {getDisplayGuesses().teamName !== null ? getDisplayGuesses().teamName : 'No guess'}
                    </div>
                    <div className="text-sm text-orange-300">Actual: {gameState.currentTeam.name}</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Your Guess</div>
                    <div className={`text-xl font-bold ${getScoreColor(checkDisplayGuessCorrectness().playoffResult)}`}>
                      {getDisplayGuesses().playoffResult !== null ? getDisplayGuesses().playoffResult : 'No guess'}
                    </div>
                    <div className="text-sm text-orange-300">Actual: {gameState.currentRecord?.playoffResult}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={startNewGame}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🏀 Play Again
              </button>
            </div>
          </div>
        ) : (
          /* Game Screen */
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-orange-200">🏀 Guess This Team&apos;s Season!</h2>
              <p className="text-orange-300">Study the clues and make your best guesses about this basketball team&apos;s performance</p>
              {gameState.submissionAttempts >= 3 && gameState.submissionAttempts < 5 && (
                <div className="mt-4 p-3 bg-red-900/50 border border-red-500/50 rounded-lg">
                  <p className="text-red-200 font-bold">
                    ⚠️ Warning: {5 - gameState.submissionAttempts} attempt{5 - gameState.submissionAttempts === 1 ? '' : 's'} remaining before answers are revealed!
                  </p>
                </div>
              )}
            </div>

            {/* Team Clues */}
            {gameState.currentTeam && gameState.currentRecord && (
              <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-200">🏀 Team Clues</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/40 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Conference</div>
                    <div className="text-xl font-bold text-orange-400">{gameState.currentTeam.conference}</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Division</div>
                    <div className="text-xl font-bold text-orange-400">{gameState.currentTeam.division}</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-orange-500/20">
                    <div className="text-sm text-orange-300">Regular Season Rank</div>
                    <div className="text-xl font-bold text-orange-400">#{gameState.currentRecord.regularSeasonRank} in Conference</div>
                  </div>
                </div>
              </div>
            )}

            {/* Team Roster */}
            {displayedPlayers && displayedPlayers.length > 0 && (
              <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <h3 className="text-2xl font-bold mb-4 text-center text-orange-200">👥 Key Players</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedPlayers.map((player, index) => (
                    <div key={`${player.name}-${index}`} className="bg-black/40 p-4 rounded-lg text-center border border-orange-500/20 hover:border-orange-400/40 transition-colors">
                      <div className={`text-lg font-bold ${player.isStarPlayer ? 'text-yellow-400' : 'text-orange-200'}`}>
                        {player.isStarPlayer && '⭐ '}{player.name}
                      </div>
                      <div className="text-sm text-orange-300">{player.position}</div>
                    </div>
                  ))}
                </div>
                {gameState.currentRecord?.headCoach && (
                  <div className="mt-4 text-center">
                    <div className="bg-black/40 p-4 rounded-lg inline-block border border-orange-500/20">
                      <div className="text-sm text-orange-300">Head Coach</div>
                      <div className="text-lg font-bold text-orange-400">👨‍💼 {gameState.currentRecord.headCoach}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Wins Guess */}
              <div className="bg-black/40 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-orange-200 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Regular Season Wins
                  </h3>
                  <button
                    onClick={handleUseWinsHint}
                    disabled={gameState.hintsRemaining <= 0}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black px-3 py-1 rounded font-bold text-sm transition-all duration-200"
                  >
                    💡 Use Hint
                  </button>
                </div>
                {gameState.hints.wins && (
                  <div className="mb-3 p-3 bg-gradient-to-r from-yellow-900/70 to-orange-900/70 border border-yellow-500/50 rounded text-yellow-200 text-sm">
                    🎯 Hint: {gameState.hints.wins} wins
                  </div>
                )}
                <input
                  type="number"
                  min="0"
                  max="82"
                  value={gameState.guesses.wins || ''}
                  onChange={(e) => makeGuess('wins', parseInt(e.target.value) || null)}
                  disabled={gameState.submitted.wins && checkGuessCorrectness().wins}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-orange-500/30 focus:border-orange-400 focus:outline-none disabled:bg-gray-700 disabled:cursor-not-allowed"
                  placeholder="Enter number of wins (0-82)"
                />
                {getInputFeedback('wins')}
              </div>

              {/* Season Guess */}
              <div className="bg-black/40 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-orange-200 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Season
                  </h3>
                  <button
                    onClick={handleUseSeasonHint}
                    disabled={gameState.hintsRemaining <= 0}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black px-3 py-1 rounded font-bold text-sm transition-all duration-200"
                  >
                    💡 Use Hint
                  </button>
                </div>
                {gameState.hints.season && (
                  <div className="mb-3 p-3 bg-gradient-to-r from-yellow-900/70 to-orange-900/70 border border-yellow-500/50 rounded text-yellow-200 text-sm">
                    � Hint: Years {gameState.hints.season}
                  </div>
                )}
                <input
                  type="text"
                  value={gameState.guesses.season || ''}
                  onChange={(e) => makeGuess('season', e.target.value || null)}
                  disabled={gameState.submitted.season && checkGuessCorrectness().season}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-orange-500/30 focus:border-orange-400 focus:outline-none disabled:bg-gray-700 disabled:cursor-not-allowed"
                  placeholder="e.g., 2019-20 or 2019"
                />
                {getInputFeedback('season')}
              </div>

              {/* Team Name Guess */}
              <div className="bg-black/40 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-orange-200 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Team Name
                  </h3>
                  <button
                    onClick={handleUseTeamColorsHint}
                    disabled={gameState.hintsRemaining <= 0}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black px-3 py-1 rounded font-bold text-sm transition-all duration-200"
                  >
                    🎨 Use Hint
                  </button>
                </div>
                {gameState.hints.teamColors && (
                  <div className="mb-3 p-3 bg-gradient-to-r from-yellow-900/70 to-orange-900/70 border border-yellow-500/50 rounded text-yellow-200 text-sm flex items-center justify-center space-x-3">
                    <span>🎨 Team Colors:</span>
                    <div className="flex space-x-2">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: gameState.currentTeam?.primaryColor }}
                      ></div>
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: gameState.currentTeam?.secondaryColor }}
                      ></div>
                    </div>
                  </div>
                )}
                <select
                  value={gameState.guesses.teamName || ''}
                  onChange={(e) => makeGuess('teamName', e.target.value || null)}
                  disabled={gameState.submitted.teamName && checkGuessCorrectness().teamName}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-orange-500/30 focus:border-orange-400 focus:outline-none disabled:bg-gray-700 disabled:cursor-not-allowed"
                >
                  <option value="">Select a team...</option>
                  {BASKETBALL_TEAMS.map((team) => (
                    <option key={team.id} value={team.name}>
                      {team.city} {team.name}
                    </option>
                  ))}
                </select>
                {getInputFeedback('teamName')}
              </div>

              {/* Playoff Result Guess */}
              <div className="bg-black/40 p-6 rounded-lg border border-orange-500/30 basketball-texture">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-orange-200 flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Playoff Result
                  </h3>
                  <button
                    onClick={handleUsePlayoffResultHint}
                    disabled={gameState.hintsRemaining <= 0}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-black px-3 py-1 rounded font-bold text-sm transition-all duration-200"
                  >
                    🏆 Use Hint
                  </button>
                </div>
                {gameState.hints.playoffResult && (
                  <div className="mb-3 p-3 bg-gradient-to-r from-yellow-900/70 to-orange-900/70 border border-yellow-500/50 rounded text-yellow-200 text-sm">
                    🏆 Hint: {gameState.hints.playoffResult}
                  </div>
                )}
                <select
                  value={gameState.guesses.playoffResult || ''}
                  onChange={(e) => makeGuess('playoffResult', e.target.value as PlayoffResult || null)}
                  disabled={gameState.submitted.playoffResult && checkGuessCorrectness().playoffResult}
                  className="w-full p-3 rounded bg-gray-800 text-white border border-orange-500/30 focus:border-orange-400 focus:outline-none disabled:bg-gray-700 disabled:cursor-not-allowed"
                >
                  <option value="">Select playoff result...</option>
                  {PLAYOFF_RESULTS.map((result) => (
                    <option key={result} value={result}>
                      {result}
                    </option>
                  ))}
                </select>
                {getInputFeedback('playoffResult')}
              </div>
            </div>

            {/* Submit and Give Up Buttons */}
            {isGameActive() && (
              <div className="text-center space-y-4">
                <button
                  onClick={submitGuesses}
                  disabled={!isGuessComplete()}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg"
                >
                  🏀 Submit Guesses
                </button>
                
                <div className="text-sm text-gray-400">or</div>
                
                <button
                  onClick={giveUp}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🏳️ Give Up & See Answer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
