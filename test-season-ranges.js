// Test the season/year range functionality
import { getSeasonYearRangeHint, isYearInSeasonRange, normalizeSeason } from '../src/data/helpers';

console.log('Testing season/year range functionality:');

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

// Test 4: Season normalization
console.log('\n4. Testing normalizeSeason:');
console.log('2019-20:', normalizeSeason('2019-20'));
console.log('2019-2020:', normalizeSeason('2019-2020'));
console.log('2019 - 20:', normalizeSeason('2019 - 20'));
