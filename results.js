import { readFileSync } from 'fs';

const resultData = readFileSync('./results.txt').toString().split("\n\n");

const partyMap = {
  'Conservative': 'CON',
  'Labour': 'LAB',
  'Liberal Democrat': 'LIB DEM',
  'Scottish National Party': 'SNP',
  'Democratic Unionist Party': 'DUP',
  'Sinn Fein': 'SINN FEIN',
  'Plaid Cymru': 'PLAID',
  'UK Independence Party': 'UKIP',
  'Green': 'GREEN',
  'British National Party': 'BNP'
};

export default resultData.map(data => {
  const result = data.split("\n")[0].match(/^(.+) ([A-Z\s]+) (GAIN|HOLD)$/);
  
  const countData = data.split("\n").slice(2);
  
  const counts = {};
  
  for (const countLine of countData) {
    const data = countLine.match(/^(.+) ([\d,]+)/);
    if (data && partyMap[data[1]]) {
      counts[partyMap[data[1]]] = parseInt(data[2].replace(',', ''), 10);
    }
  }
  
  return {
    constituency: result[1],
    winner: result[2],
    counts
  }
});
