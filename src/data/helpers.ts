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
  
  // First, trim and clean up the input
  const cleaned = season.trim().toLowerCase();
  
  // Handle single year inputs (e.g., "2004" for 2003-04 season)
  const singleYearMatch = cleaned.match(/^\s*(\d{4})\s*$/);
  if (singleYearMatch) {
    const year = parseInt(singleYearMatch[1]);
    // Convert single year to season format (e.g., 2004 -> 2003-04)
    const prevYear = year - 1;
    const yearSuffix = year.toString().slice(-2);
    return `${prevYear}-${yearSuffix}`;
  }
  
  // Handle various dash/hyphen formats with potential spaces
  // This regex captures: YYYY-YYYY, YYYY-YY, with optional spaces around dash
  const seasonMatch = cleaned.match(/^\s*(\d{4})\s*[-–—]\s*(\d{2,4})\s*$/);
  if (seasonMatch) {
    const startYear = parseInt(seasonMatch[1]);
    let endYearStr = seasonMatch[2];
    
    // If end year is 4 digits, take last 2 digits
    if (endYearStr.length === 4) {
      endYearStr = endYearStr.slice(-2);
    }
    
    // Ensure end year is 2 digits and makes sense
    const endYear = parseInt(endYearStr);
    if (endYear >= 0 && endYear <= 99) {
      // Format as YYYY-YY
      return `${startYear}-${endYearStr.padStart(2, '0')}`;
    }
  }
  
  // Handle slash formats (e.g., "2003/04", "2003/2004")
  const slashMatch = cleaned.match(/^\s*(\d{4})\s*[\/]\s*(\d{2,4})\s*$/);
  if (slashMatch) {
    const startYear = parseInt(slashMatch[1]);
    let endYearStr = slashMatch[2];
    
    // If end year is 4 digits, take last 2 digits
    if (endYearStr.length === 4) {
      endYearStr = endYearStr.slice(-2);
    }
    
    // Format as YYYY-YY
    return `${startYear}-${endYearStr.padStart(2, '0')}`;
  }
  
  // Handle space-separated formats (e.g., "2003 04", "2003 2004")
  const spaceMatch = cleaned.match(/^\s*(\d{4})\s+(\d{2,4})\s*$/);
  if (spaceMatch) {
    const startYear = parseInt(spaceMatch[1]);
    let endYearStr = spaceMatch[2];
    
    // If end year is 4 digits, take last 2 digits
    if (endYearStr.length === 4) {
      endYearStr = endYearStr.slice(-2);
    }
    
    // Format as YYYY-YY
    return `${startYear}-${endYearStr.padStart(2, '0')}`;
  }
  
  // If already in correct format, return as is
  const correctFormatMatch = cleaned.match(/^\s*(\d{4})-(\d{2})\s*$/);
  if (correctFormatMatch) {
    return `${correctFormatMatch[1]}-${correctFormatMatch[2]}`;
  }
  
  // If no match found, return original cleaned input (remove spaces)
  return cleaned.replace(/\s+/g, '');
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
