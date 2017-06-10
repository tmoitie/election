import results from './results';

const conLosses = results.filter(result => {
  const progAlliance = result.counts['LIB DEM'] + result.counts['LAB'];
  return result.winner === 'CON' && progAlliance > result.counts['CON']
});

console.log(`Seats lost by CON with naive progressive alliance model: ${conLosses.length}`);

const totalWins = results.filter(result => {
  const progAlliance = result.counts['LIB DEM'] + result.counts['LAB'];
  return !['LAB', 'LIB DEM'].includes(result.winner) && progAlliance > result.counts[result.winner]
});

console.log(`Seats won by LAB/LIB DEM with naive progressive alliance model: ${totalWins.length}`);
