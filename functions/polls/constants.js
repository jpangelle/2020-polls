const BIDEN_LONG = 'Joseph R. Biden Jr.';
const TRUMP_LONG = 'Donald Trump';

const CANDIDATES_LONG = [BIDEN_LONG, TRUMP_LONG];
const CANDIDATES_PARTY = {
  [BIDEN_LONG]: 'democratic',
  [TRUMP_LONG]: 'republican',
};

const BATTLEGROUND_STATES = [
  'Arizona',
  'Florida',
  'Georgia',
  'Iowa',
  'Michigan',
  'Minnesota',
  'National',
  'Nevada',
  'North Carolina',
  'Ohio',
  'Pennsylvania',
  'Texas',
  'Wisconsin',
];

module.exports = {
  BATTLEGROUND_STATES,
  CANDIDATES_LONG,
  CANDIDATES_PARTY,
};
