import { CompactSeasonRecord } from './seasons';

/**
 * Get a year range hint for a given season
 * @param season - The season in "YYYY-YY" format
 * @param rangeSize - The size of the range (±years)
 * @returns A string representing the year range
 */
export function getSeasonYearRangeHint(season: string, rangeSize: number = 2): string {
  const seasonMatch = season.match(/^(\d{4})-(\d{2})$/);
  if (!seasonMatch) return season;
  
  const startYear = parseInt(seasonMatch[1]);
  const endYear = parseInt(`20${seasonMatch[2]}`);
  
  // Create a range around the season years
  const minYear = startYear - rangeSize;
  const maxYear = endYear + rangeSize;
  
  return `${minYear}-${maxYear}`;
}

/**
 * Check if a year input is within the acceptable range for a season
 * @param inputYear - The year input as a string
 * @param targetSeason - The target season in "YYYY-YY" format
 * @param rangeSize - The acceptable range size (±years)
 * @returns Whether the input year is within the acceptable range
 */
export function isYearInSeasonRange(inputYear: string, targetSeason: string, rangeSize: number = 2): boolean {
  if (!inputYear || !targetSeason) return false;
  
  // Extract the start year from the target season (e.g., "2019-20" -> 2019)
  const seasonMatch = targetSeason.match(/^(\d{4})-(\d{2})$/);
  if (!seasonMatch) return false;
  
  const targetStartYear = parseInt(seasonMatch[1]);
  const targetEndYear = parseInt(`20${seasonMatch[2]}`);
  
  // Parse input year - handle both single years and season formats
  let inputYearNum: number;
  
  // Check if input is in season format (e.g., "2019-20")
  const inputSeasonMatch = inputYear.match(/^(\d{4})-(\d{2,4})$/);
  if (inputSeasonMatch) {
    inputYearNum = parseInt(inputSeasonMatch[1]);
  } else {
    // Single year input
    inputYearNum = parseInt(inputYear);
    if (isNaN(inputYearNum)) return false;
  }
  
  // Accept any year within the range of the season years ± rangeSize
  const minYear = targetStartYear - rangeSize;
  const maxYear = targetEndYear + rangeSize;
  
  return inputYearNum >= minYear && inputYearNum <= maxYear;
}

/**
 * Normalize season format for comparison
 * @param season - The season string to normalize
 * @returns Normalized season string in "YYYY-YY" format
 */
export function normalizeSeason(season: string): string {
  if (!season) return '';
  // Remove all spaces and normalize to YYYY-YY format
  let normalized = season.replace(/\s/g, '').trim();
  
  // Handle full 4-digit year format (e.g., "2019-2020" -> "2019-20")
  const fullYearMatch = normalized.match(/^(\d{4})-(\d{4})$/);
  if (fullYearMatch) {
    const startYear = fullYearMatch[1];
    const endYear = fullYearMatch[2].slice(-2); // Take last 2 digits
    normalized = `${startYear}-${endYear}`;
  }
  
  // Handle mixed formats (e.g., "2019-20" is already correct, but ensure consistency)
  const mixedMatch = normalized.match(/^(\d{4})-(\d{2})$/);
  if (mixedMatch) {
    // Already in correct format, keep as is
    normalized = `${mixedMatch[1]}-${mixedMatch[2]}`;
  }
  
  return normalized;
}

/**
 * Helper function to quickly add new season records
 * Usage example:
 * 
 * addSeason('LAL', '2020-21', 42, 30, 'First Round', 7, 7, 'Frank Vogel', [
 *   ['LeBron James', 'SF', true],
 *   ['Anthony Davis', 'PF', true],
 *   ['Russell Westbrook', 'PG'],
 *   // ... more players
 * ])
 */
export function addSeason(
  teamId: string,
  season: string,
  wins: number,
  losses: number,
  playoffResult: string,
  regularSeasonRank: number,
  conferenceRank: number,
  headCoach: string,
  players: readonly [string, string, boolean?][]
): CompactSeasonRecord {
  return {
    teamId,
    season,
    wins,
    losses,
    playoffResult,
    regularSeasonRank,
    conferenceRank,
    headCoach,
    players
  };
}

/**
 * Quick player creator functions
 */
export const star = (name: string, position: string): readonly [string, string, true] => [name, position, true];
export const player = (name: string, position: string): readonly [string, string] => [name, position];

/**
 * Example usage:
 * 
 * const newSeason = addSeason('LAL', '2023-24', 47, 35, 'First Round', 8, 8, 'Darvin Ham', [
 *   star('LeBron James', 'SF'),
 *   star('Anthony Davis', 'PF/C'),
 *   player('D\'Angelo Russell', 'PG'),
 *   player('Austin Reaves', 'SG'),
 *   player('Rui Hachimura', 'PF'),
 *   // ... more players
 * ]);
 */
