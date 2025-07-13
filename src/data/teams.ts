import { BasketballTeam } from '../types/game';

export const BASKETBALL_TEAMS: BasketballTeam[] = [
  {
    id: 'LAL', name: 'Lakers', city: 'Los Angeles', abbreviation: 'LAL',
    conference: 'Western', division: 'Pacific', primaryColor: '#5A2B8A', secondaryColor: '#FFB935'
  },
  {
    id: 'GSW', name: 'Warriors', city: 'Golden State', abbreviation: 'GSW',
    conference: 'Western', division: 'Pacific', primaryColor: '#1F4A9C', secondaryColor: '#FFD23A'
  },
  {
    id: 'MIA', name: 'Heat', city: 'Miami', abbreviation: 'MIA',
    conference: 'Eastern', division: 'Southeast', primaryColor: '#A5002F', secondaryColor: '#F7A425'
  },
  {
    id: 'BOS', name: 'Celtics', city: 'Boston', abbreviation: 'BOS',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#1A7A35', secondaryColor: '#C2A560'
  },
  {
    id: 'CHI', name: 'Bulls', city: 'Chicago', abbreviation: 'CHI',
    conference: 'Eastern', division: 'Central', primaryColor: '#D41845', secondaryColor: '#2C2C2C'
  },
  {
    id: 'SAS', name: 'Spurs', city: 'San Antonio', abbreviation: 'SAS',
    conference: 'Western', division: 'Southwest', primaryColor: '#BBBBC2', secondaryColor: '#2C2C2C'
  },
  {
    id: 'NYK', name: 'Knicks', city: 'New York', abbreviation: 'NYK',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#1573C2', secondaryColor: '#F58C33'
  },
  {
    id: 'DEN', name: 'Nuggets', city: 'Denver', abbreviation: 'DEN',
    conference: 'Western', division: 'Northwest', primaryColor: '#1A2850', secondaryColor: '#FFD135'
  },
  {
    id: 'PHX', name: 'Suns', city: 'Phoenix', abbreviation: 'PHX',
    conference: 'Western', division: 'Pacific', primaryColor: '#2A1A70', secondaryColor: '#E8672A'
  },
  {
    id: 'DAL', name: 'Mavericks', city: 'Dallas', abbreviation: 'DAL',
    conference: 'Western', division: 'Southwest', primaryColor: '#1A5A95', secondaryColor: '#0A3270'
  },
  {
    id: 'MIL', name: 'Bucks', city: 'Milwaukee', abbreviation: 'MIL',
    conference: 'Eastern', division: 'Central', primaryColor: '#1A5225', secondaryColor: '#F2E8D2'
  },
  {
    id: 'TOR', name: 'Raptors', city: 'Toronto', abbreviation: 'TOR',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#D41845', secondaryColor: '#2C2C2C'
  },
  {
    id: 'PHI', name: '76ers', city: 'Philadelphia', abbreviation: 'PHI',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#1573C2', secondaryColor: '#F01850'
  },
  {
    id: 'ATL', name: 'Hawks', city: 'Atlanta', abbreviation: 'ATL',
    conference: 'Eastern', division: 'Southeast', primaryColor: '#E84450', secondaryColor: '#D3D842'
  },
  {
    id: 'BRK', name: 'Nets', city: 'Brooklyn', abbreviation: 'BRK',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#2C2C2C', secondaryColor: '#F5F5F5'
  },
  {
    id: 'CLE', name: 'Cavaliers', city: 'Cleveland', abbreviation: 'CLE',
    conference: 'Eastern', division: 'Central', primaryColor: '#8F0A40', secondaryColor: '#FFC340'
  },
  {
    id: 'UTA', name: 'Jazz', city: 'Utah', abbreviation: 'UTA',
    conference: 'Western', division: 'Northwest', primaryColor: '#1A3268', secondaryColor: '#1A5225'
  },
  {
    id: 'POR', name: 'Trail Blazers', city: 'Portland', abbreviation: 'POR',
    conference: 'Western', division: 'Northwest', primaryColor: '#E84450', secondaryColor: '#2C2C2C'
  },
  {
    id: 'IND', name: 'Pacers', city: 'Indiana', abbreviation: 'IND',
    conference: 'Eastern', division: 'Central', primaryColor: '#1A3568', secondaryColor: '#FFC340'
  },
  {
    id: 'DET', name: 'Pistons', city: 'Detroit', abbreviation: 'DET',
    conference: 'Eastern', division: 'Central', primaryColor: '#C8102E', secondaryColor: '#1D42BA'
  },
  {
    id: 'WAS', name: 'Wizards', city: 'Washington', abbreviation: 'WAS',
    conference: 'Eastern', division: 'Southeast', primaryColor: '#002B5C', secondaryColor: '#E31837'
  },
  {
    id: 'CHA', name: 'Hornets', city: 'Charlotte', abbreviation: 'CHA',
    conference: 'Eastern', division: 'Southeast', primaryColor: '#1D1160', secondaryColor: '#00F5FF'
  },
  {
    id: 'ORL', name: 'Magic', city: 'Orlando', abbreviation: 'ORL',
    conference: 'Eastern', division: 'Southeast', primaryColor: '#0077C0', secondaryColor: '#C4CED4'
  },
  {
    id: 'LAC', name: 'Clippers', city: 'Los Angeles', abbreviation: 'LAC',
    conference: 'Western', division: 'Pacific', primaryColor: '#C8102E', secondaryColor: '#1D428A'
  },
  {
    id: 'SAC', name: 'Kings', city: 'Sacramento', abbreviation: 'SAC',
    conference: 'Western', division: 'Pacific', primaryColor: '#5A2D81', secondaryColor: '#63727A'
  },
  {
    id: 'MIN', name: 'Timberwolves', city: 'Minnesota', abbreviation: 'MIN',
    conference: 'Western', division: 'Northwest', primaryColor: '#0C2340', secondaryColor: '#236192'
  },
  {
    id: 'OKC', name: 'Thunder', city: 'Oklahoma City', abbreviation: 'OKC',
    conference: 'Western', division: 'Northwest', primaryColor: '#007AC1', secondaryColor: '#EF3B24'
  },
  {
    id: 'HOU', name: 'Rockets', city: 'Houston', abbreviation: 'HOU',
    conference: 'Western', division: 'Southwest', primaryColor: '#CE1141', secondaryColor: '#000000'
  },
  {
    id: 'MEM', name: 'Grizzlies', city: 'Memphis', abbreviation: 'MEM',
    conference: 'Western', division: 'Southwest', primaryColor: '#5D76A9', secondaryColor: '#12173F'
  },
  {
    id: 'NOP', name: 'Pelicans', city: 'New Orleans', abbreviation: 'NOP',
    conference: 'Western', division: 'Southwest', primaryColor: '#0C2340', secondaryColor: '#C8102E'
  },
  {
    id: 'SEA', name: 'SuperSonics', city: 'Seattle', abbreviation: 'SEA',
    conference: 'Western', division: 'Pacific', primaryColor: '#2C5F2D', secondaryColor: '#FFC633'
  },
  {
    id: 'NJN', name: 'Nets', city: 'New Jersey', abbreviation: 'NJN',
    conference: 'Eastern', division: 'Atlantic', primaryColor: '#002A5C', secondaryColor: '#E31837'
  }
];
