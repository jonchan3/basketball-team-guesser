import { BasketballTeam, SeasonRecord, PlayoffResult } from '../types/game';
import { BASKETBALL_TEAMS } from './teams';
import { COMPACT_SEASON_RECORDS, createPlayers } from './seasons';

// Convert compact season records to full SeasonRecord objects
export const SEASON_RECORDS: SeasonRecord[] = COMPACT_SEASON_RECORDS.map(compactRecord => ({
  teamId: compactRecord.teamId,
  season: compactRecord.season,
  wins: compactRecord.wins,
  losses: compactRecord.losses,
  playoffResult: compactRecord.playoffResult as PlayoffResult,
  regularSeasonRank: compactRecord.regularSeasonRank,
  conferenceRank: compactRecord.conferenceRank,
  headCoach: compactRecord.headCoach,
  keyPlayers: createPlayers(compactRecord.players)
}));

// Re-export teams for backward compatibility
export { BASKETBALL_TEAMS };

export function getRandomTeamAndRecord(): { team: BasketballTeam; record: SeasonRecord } {
  const randomIndex = Math.floor(Math.random() * SEASON_RECORDS.length);
  const record = SEASON_RECORDS[randomIndex];
  const team = BASKETBALL_TEAMS.find(t => t.id === record.teamId)!;
  return { team, record };
}
