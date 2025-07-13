// Test the season/year range functionality manually
console.log('Testing season/year range functionality:');

// Manual implementation of getSeasonYearRangeHint
function getSeasonYearRangeHint(season, rangeSize = 2) {
  const seasonMatch = season.match(/^(\d{4})-(\d{2})$/);
  if (!seasonMatch) return season;
  
  const startYear = parseInt(seasonMatch[1]);
  const endYear = parseInt(`20${seasonMatch[2]}`);
  
  // Create a range around the season years
  const minYear = startYear - rangeSize;
  const maxYear = endYear + rangeSize;
  
  return `${minYear}-${maxYear}`;
}

// Manual implementation of isYearInSeasonRange
function isYearInSeasonRange(inputYear, targetSeason, rangeSize = 2) {
  if (!inputYear || !targetSeason) return false;
  
  // Extract the start year from the target season (e.g., "2019-20" -> 2019)
  const seasonMatch = targetSeason.match(/^(\d{4})-(\d{2})$/);
  if (!seasonMatch) return false;
  
  const targetStartYear = parseInt(seasonMatch[1]);
  const targetEndYear = parseInt(`20${seasonMatch[2]}`);
  
  // Parse input year - handle both single years and season formats
  let inputYearNum;
  
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

// Test 1: Season year range hint
console.log('\n1. Testing getSeasonYearRangeHint:');
console.log('2019-20 with range 2:', getSeasonYearRangeHint('2019-20', 2)); // Should be 2017-2022
console.log('2015-16 with range 3:', getSeasonYearRangeHint('2015-16', 3)); // Should be 2012-2019

// Test 2: Year in season range validation
console.log('\n2. Testing isYearInSeasonRange:');
const targetSeason = '2019-20';
console.log(`Target season: ${targetSeason}`);
console.log('2019 (should be true):', isYearInSeasonRange('2019', targetSeason, 2));
console.log('2020 (should be true):', isYearInSeasonRange('2020', targetSeason, 2));
console.log('2018 (should be true):', isYearInSeasonRange('2018', targetSeason, 2));
console.log('2021 (should be true):', isYearInSeasonRange('2021', targetSeason, 2));
console.log('2017 (should be true):', isYearInSeasonRange('2017', targetSeason, 2));
console.log('2022 (should be true):', isYearInSeasonRange('2022', targetSeason, 2));
console.log('2016 (should be false):', isYearInSeasonRange('2016', targetSeason, 2));
console.log('2023 (should be false):', isYearInSeasonRange('2023', targetSeason, 2));

// Test 3: Season format input validation
console.log('\n3. Testing season format inputs:');
console.log('2019-20 (should be true):', isYearInSeasonRange('2019-20', targetSeason, 2));
console.log('2019-2020 (should be true):', isYearInSeasonRange('2019-2020', targetSeason, 2));

console.log('\nAll tests completed!');
