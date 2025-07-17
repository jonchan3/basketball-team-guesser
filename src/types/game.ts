export interface BasketballTeam {
  id: string;
  name: string;
  city: string;
  abbreviation: string;
  conference: 'Eastern' | 'Western';
  division: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface Player {
  name: string;
  position: string;
  isStarPlayer?: boolean;
}

export interface SeasonRecord {
  teamId: string;
  season: string;
  wins: number;
  losses: number;
  playoffResult: PlayoffResult;
  regularSeasonRank: number;
  conferenceRank: number;
  keyPlayers?: Player[];
  headCoach?: string;
}

export type PlayoffResult = 
  | 'Did not make playoffs'
  | 'First Round'
  | 'Conference Semifinals'
  | 'Conference Finals'
  | 'League Finals'
  | 'League Champions';

export interface GameState {
  currentTeam: BasketballTeam | null;
  currentRecord: SeasonRecord | null;
  guesses: {
    wins: number | null;
    season: string | null;
    teamName: string | null;
    playoffResult: PlayoffResult | null;
  };
  hints: {
    wins: string | null;
    season: string | null;
    teamName: string | null;
    playoffResult: string | null;
    teamColors: string | null;
  };
  submitted: {
    wins: boolean;
    season: boolean;
    teamName: boolean;
    playoffResult: boolean;
  };
  score: number;
  streak: number;
  hintsUsed: number;
  hintsRemaining: number;
  submissionAttempts: number;
}

export interface UserProfile {
  id: string;
  gamesPlayed: number;
  bestStreak: number;
  totalScore: number;
  hintsRemaining: number;
}
