// Test the enhanced season normalization functionality
const { normalizeSeason } = require('./src/data/helpers.js');

console.log('Testing comprehensive season normalization:');
console.log('='.repeat(50));

// Define test cases with expected outputs
const testCases = [
  // Standard formats
  { input: '2003-04', expected: '2003-04', description: 'Standard format' },
  { input: '2003-2004', expected: '2003-04', description: 'Full year format' },
  
  // Spacing variations
  { input: '2003 -04', expected: '2003-04', description: 'Space before dash' },
  { input: '2003- 04', expected: '2003-04', description: 'Space after dash' },
  { input: '2003 - 04', expected: '2003-04', description: 'Spaces around dash' },
  { input: '2003 -2004', expected: '2003-04', description: 'Space before dash, full year' },
  { input: '2003- 2004', expected: '2003-04', description: 'Space after dash, full year' },
  { input: '2003 - 2004', expected: '2003-04', description: 'Spaces around dash, full year' },
  
  // Single year (should convert to season format)
  { input: '2004', expected: '2003-04', description: 'Single year (end year)' },
  { input: '2003', expected: '2002-03', description: 'Single year (start year)' },
  
  // Alternative separators
  { input: '2003/04', expected: '2003-04', description: 'Slash separator' },
  { input: '2003/2004', expected: '2003-04', description: 'Slash separator, full year' },
  { input: '2003 04', expected: '2003-04', description: 'Space separator' },
  { input: '2003 2004', expected: '2003-04', description: 'Space separator, full year' },
  
  // Different dash types
  { input: '2003–04', expected: '2003-04', description: 'En dash' },
  { input: '2003—04', expected: '2003-04', description: 'Em dash' },
  
  // Edge cases with extra spaces
  { input: '  2003-04  ', expected: '2003-04', description: 'Leading/trailing spaces' },
  { input: '2003  -  04', expected: '2003-04', description: 'Multiple spaces' },
  
  // Other NBA seasons for variety
  { input: '1995-96', expected: '1995-96', description: '90s season' },
  { input: '1995-1996', expected: '1995-96', description: '90s season full year' },
  { input: '2019-20', expected: '2019-20', description: '2010s season' },
  { input: '2021-22', expected: '2021-22', description: '2020s season' },
];

// Run tests
let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
  const result = normalizeSeason(testCase.input);
  const success = result === testCase.expected;
  
  if (success) {
    passed++;
    console.log(`✅ Test ${index + 1}: ${testCase.description}`);
    console.log(`   Input: "${testCase.input}" → Output: "${result}"`);
  } else {
    failed++;
    console.log(`❌ Test ${index + 1}: ${testCase.description}`);
    console.log(`   Input: "${testCase.input}"`);
    console.log(`   Expected: "${testCase.expected}"`);
    console.log(`   Got: "${result}"`);
  }
  console.log('');
});

console.log('='.repeat(50));
console.log(`Test Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All tests passed! Season normalization is working correctly.');
} else {
  console.log('⚠️  Some tests failed. Please check the normalizeSeason function.');
}
