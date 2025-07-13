import { Player } from '../types/game';

// Compact player data: [name, position, isStarPlayer?]
type CompactPlayer = readonly [string, string, boolean?];

// Convert compact player data to full Player objects
export function createPlayers(compactPlayers: readonly CompactPlayer[]): Player[] {
  return compactPlayers.map(([name, position, isStarPlayer]) => ({
    name,
    position,
    isStarPlayer: isStarPlayer || false
  }));
}

// Season records in compact format
export const COMPACT_SEASON_RECORDS = [
  {
    teamId: 'LAL', season: '2019-20', wins: 52, losses: 19, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Frank Vogel',
    players: [
      ['LeBron James', 'SF', true], ['Anthony Davis', 'PF/C', true], ['Rajon Rondo', 'PG'],
      ['Dwight Howard', 'C'], ['Danny Green', 'SG'], ['Kyle Kuzma', 'PF'],
      ['Kentavious Caldwell-Pope', 'SG'], ['Markieff Morris', 'PF'], ['Alex Caruso', 'PG'],
      ['JaVale McGee', 'C'], ['Avery Bradley', 'SG'], ['Quinn Cook', 'PG'],
      ['Jared Dudley', 'PF'], ['Troy Daniels', 'SG'], ['Dion Waiters', 'SG'], ['J.R. Smith', 'SG']
    ]
  },
  {
    teamId: 'GSW', season: '2016-17', wins: 67, losses: 15, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Steve Kerr',
    players: [
      ['Stephen Curry', 'PG', true], ['Kevin Durant', 'SF', true], ['Klay Thompson', 'SG', true],
      ['Draymond Green', 'PF', true], ['Andre Iguodala', 'SF'], ['Shaun Livingston', 'PG'],
      ['Zaza Pachulia', 'C'], ['David West', 'PF'], ['JaVale McGee', 'C'],
      ['Patrick McCaw', 'SG'], ['Ian Clark', 'SG'], ['Matt Barnes', 'SF'],
      ['Kevon Looney', 'PF/C'], ['Anderson Varejao', 'C'], ['James Michael McAdoo', 'PF']
    ]
  },
  {
    teamId: 'MIA', season: '2012-13', wins: 66, losses: 16, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Erik Spoelstra',
    players: [
      ['LeBron James', 'SF', true], ['Dwyane Wade', 'SG', true], ['Chris Bosh', 'PF', true],
      ['Ray Allen', 'SG'], ['Mario Chalmers', 'PG'], ['Shane Battier', 'SF'],
      ['Chris Andersen', 'C'], ['Norris Cole', 'PG'], ['Udonis Haslem', 'PF'],
      ['Mike Miller', 'SF'], ['Joel Anthony', 'C'], ['Rashard Lewis', 'SF'],
      ['James Jones', 'SF'], ['Juwan Howard', 'PF'], ['Jarvis Varnado', 'C']
    ]
  },
  {
    teamId: 'BOS', season: '2007-08', wins: 66, losses: 16, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Doc Rivers',
    players: [
      ['Paul Pierce', 'SF', true], ['Kevin Garnett', 'PF', true], ['Ray Allen', 'SG', true],
      ['Rajon Rondo', 'PG'], ['Kendrick Perkins', 'C'], ['James Posey', 'SF'],
      ['Eddie House', 'PG'], ['P.J. Brown', 'PF'], ['Sam Cassell', 'PG'],
      ['Leon Powe', 'PF'], ['Glen Davis', 'PF'], ['Tony Allen', 'SG'],
      ['Brian Scalabrine', 'PF'], ['Scot Pollard', 'C'], ['Gabe Pruitt', 'PG']
    ]
  },
  {
    teamId: 'CHI', season: '1995-96', wins: 72, losses: 10, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Dennis Rodman', 'PF', true],
      ['Steve Kerr', 'PG'], ['Luc Longley', 'C'], ['Toni Kukoc', 'SF'],
      ['Ron Harper', 'PG'], ['Bill Wennington', 'C'], ['Jud Buechler', 'SF'],
      ['Randy Brown', 'PG'], ['John Salley', 'C'], ['Jack Haley', 'C'],
      ['Dickey Simpkins', 'PF'], ['James Edwards', 'C'], ['Jason Caffey', 'PF']
    ]
  },
  {
    teamId: 'DEN', season: '2022-23', wins: 53, losses: 29, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Michael Malone',
    players: [
      ['Nikola Jokic', 'C', true], ['Jamal Murray', 'PG', true], ['Michael Porter Jr.', 'SF'],
      ['Aaron Gordon', 'PF'], ['Kentavious Caldwell-Pope', 'SG'], ['Bruce Brown', 'SG/SF'],
      ['Jeff Green', 'PF'], ['Christian Braun', 'SG'], ['Reggie Jackson', 'PG'],
      ['DeAndre Jordan', 'C'], ['Thomas Bryant', 'C'], ['Vlatko Cancar', 'SF'],
      ['Peyton Watson', 'SF'], ['Zeke Nnaji', 'PF'], ['Ish Smith', 'PG']
    ]
  },
  {
    teamId: 'MIL', season: '2020-21', wins: 46, losses: 26, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Mike Budenholzer',
    players: [
      ['Giannis Antetokounmpo', 'PF', true], ['Khris Middleton', 'SF', true], ['Jrue Holiday', 'PG'],
      ['Brook Lopez', 'C'], ['Bobby Portis', 'PF'], ['P.J. Tucker', 'PF'],
      ['Pat Connaughton', 'SG'], ['Donte DiVincenzo', 'SG'], ['Bryn Forbes', 'SG'],
      ['Jeff Teague', 'PG'], ['Thanasis Antetokounmpo', 'SF'], ['Jordan Nwora', 'SF'],
      ['Mamadi Diakite', 'PF'], ['Rodions Kurucs', 'SF'], ['Elijah Bryant', 'SG']
    ]
  },
  {
    teamId: 'TOR', season: '2018-19', wins: 58, losses: 24, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Nick Nurse',
    players: [
      ['Kawhi Leonard', 'SF', true], ['Kyle Lowry', 'PG', true], ['Pascal Siakam', 'PF'],
      ['Marc Gasol', 'C'], ['Fred VanVleet', 'PG'], ['Serge Ibaka', 'PF/C'],
      ['Danny Green', 'SG'], ['Norman Powell', 'SG'], ['OG Anunoby', 'SF'],
      ['Jeremy Lin', 'PG'], ['Patrick McCaw', 'SG'], ['Chris Boucher', 'PF'],
      ['Jodie Meeks', 'SG'], ['Eric Moreland', 'C'], ['Malcolm Miller', 'SF']
    ]
  },
  {
    teamId: 'CLE', season: '2015-16', wins: 57, losses: 25, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Tyronn Lue',
    players: [
      ['LeBron James', 'SF', true], ['Kyrie Irving', 'PG', true], ['Kevin Love', 'PF', true],
      ['Tristan Thompson', 'C'], ['J.R. Smith', 'SG'], ['Iman Shumpert', 'SG'],
      ['Timofey Mozgov', 'C'], ['Matthew Dellavedova', 'PG'], ['Channing Frye', 'PF/C'],
      ['Richard Jefferson', 'SF'], ['Mo Williams', 'PG'], ['Anderson Varejao', 'C'],
      ['Dahntay Jones', 'SG'], ['James Jones', 'SF'], ['Sasha Kaun', 'C']
    ]
  },
  {
    teamId: 'GSW', season: '2021-22', wins: 53, losses: 29, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Steve Kerr',
    players: [
      ['Stephen Curry', 'PG', true], ['Klay Thompson', 'SG', true], ['Draymond Green', 'PF', true],
      ['Andrew Wiggins', 'SF'], ['Jordan Poole', 'SG'], ['Kevon Looney', 'C'],
      ['Gary Payton II', 'PG'], ['Otto Porter Jr.', 'SF'], ['Nemanja Bjelica', 'PF'],
      ['Andre Iguodala', 'SF'], ['Juan Toscano-Anderson', 'SF'], ['Moses Moody', 'SG'],
      ['Jonathan Kuminga', 'PF'], ['Damion Lee', 'SG'], ['Chris Chiozza', 'PG']
    ]
  },
  {
    teamId: 'SAS', season: '2013-14', wins: 62, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Gregg Popovich',
    players: [
      ['Tim Duncan', 'PF/C', true], ['Tony Parker', 'PG', true], ['Manu Ginobili', 'SG', true],
      ['Kawhi Leonard', 'SF'], ['Boris Diaw', 'PF'], ['Danny Green', 'SG'],
      ['Tiago Splitter', 'C'], ['Patty Mills', 'PG'], ['Marco Belinelli', 'SG'],
      ['Matt Bonner', 'PF'], ['Cory Joseph', 'PG'], ['Aron Baynes', 'C'],
      ['Jeff Ayres', 'PF'], ['Austin Daye', 'SF'], ['Damion James', 'SF']
    ]
  },
  {
    teamId: 'NYK', season: '2012-13', wins: 54, losses: 28, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Mike Woodson',
    players: [
      ['Carmelo Anthony', 'SF', true], ['Amar\'e Stoudemire', 'PF/C', true],
      ['Tyson Chandler', 'C'], ['Raymond Felton', 'PG'], ['J.R. Smith', 'SG'],
      ['Iman Shumpert', 'SG'], ['Steve Novak', 'SF'], ['Pablo Prigioni', 'PG'],
      ['Kenyon Martin', 'PF'], ['Marcus Camby', 'C'], ['Chris Copeland', 'SF'],
      ['Kurt Thomas', 'PF/C'], ['Jason Kidd', 'PG'], ['Rasheed Wallace', 'PF/C'], ['James White', 'SG']
    ]
  },
  {
    teamId: 'PHX', season: '2020-21', wins: 51, losses: 21, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Monty Williams',
    players: [
      ['Devin Booker', 'SG', true], ['Chris Paul', 'PG', true], ['Deandre Ayton', 'C'],
      ['Mikal Bridges', 'SF'], ['Jae Crowder', 'PF'], ['Cameron Johnson', 'SF'],
      ['Dario Saric', 'PF'], ['Cameron Payne', 'PG'], ['Torrey Craig', 'SF'],
      ['Frank Kaminsky', 'C'], ['Jevon Carter', 'PG'], ['Abdel Nader', 'SF'],
      ['Langston Galloway', 'SG'], ['E\'Twaun Moore', 'SG'], ['Jalen Smith', 'PF']
    ]
  },
  {
    teamId: 'DAL', season: '2010-11', wins: 57, losses: 25, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Rick Carlisle',
    players: [
      ['Dirk Nowitzki', 'PF', true], ['Jason Terry', 'SG', true], ['Jason Kidd', 'PG'],
      ['Tyson Chandler', 'C'], ['Shawn Marion', 'SF'], ['Peja Stojakovic', 'SF'],
      ['J.J. Barea', 'PG'], ['DeShawn Stevenson', 'SG'], ['Brian Cardinal', 'PF'],
      ['Brendan Haywood', 'C'], ['Ian Mahinmi', 'C'], ['Corey Brewer', 'SF'],
      ['Caron Butler', 'SF'], ['Rodrigue Beaubois', 'PG'], ['Dominique Jones', 'SG']
    ]
  },
  {
    teamId: 'PHI', season: '2022-23', wins: 54, losses: 28, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Doc Rivers',
    players: [
      ['Joel Embiid', 'C', true], ['James Harden', 'PG', true], ['Tyrese Maxey', 'PG'],
      ['Tobias Harris', 'PF'], ['P.J. Tucker', 'PF'], ['De\'Anthony Melton', 'SG'],
      ['Danuel House Jr.', 'SF'], ['Georges Niang', 'PF'], ['Montrezl Harrell', 'C'],
      ['Shake Milton', 'SG'], ['Furkan Korkmaz', 'SG'], ['Paul Reed', 'PF'],
      ['Jalen McDaniels', 'SF'], ['Dewayne Dedmon', 'C'], ['Julian Champagnie', 'SF']
    ]
  },
  {
    teamId: 'ATL', season: '2020-21', wins: 41, losses: 31, playoffResult: 'Conference Finals',
    regularSeasonRank: 5, conferenceRank: 5, headCoach: 'Nate McMillan',
    players: [
      ['Trae Young', 'PG', true], ['John Collins', 'PF'], ['Clint Capela', 'C'],
      ['Kevin Huerter', 'SG'], ['Bogdan Bogdanovic', 'SG'], ['Danilo Gallinari', 'PF'],
      ['De\'Andre Hunter', 'SF'], ['Lou Williams', 'PG'], ['Onyeka Okongwu', 'PF/C'],
      ['Cam Reddish', 'SF'], ['Solomon Hill', 'SF'], ['Tony Snell', 'SG'],
      ['Gorgui Dieng', 'C'], ['Kris Dunn', 'PG'], ['Brandon Goodwin', 'PG']
    ]
  },
  {
    teamId: 'BRK', season: '2020-21', wins: 48, losses: 24, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Steve Nash',
    players: [
      ['Kevin Durant', 'SF', true], ['Kyrie Irving', 'PG', true], ['James Harden', 'SG', true],
      ['Blake Griffin', 'PF'], ['Joe Harris', 'SG'], ['DeAndre Jordan', 'C'],
      ['Landry Shamet', 'SG'], ['Bruce Brown', 'SG'], ['Jeff Green', 'PF'],
      ['Nicolas Claxton', 'C'], ['Tyler Johnson', 'PG'], ['Mike James', 'PG'],
      ['Timothe Luwawu-Cabarrot', 'SF'], ['Alize Johnson', 'PF'], ['Reggie Perry', 'PF']
    ]
  },
  {
    teamId: 'UTA', season: '2020-21', wins: 52, losses: 20, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Quin Snyder',
    players: [
      ['Donovan Mitchell', 'SG', true], ['Rudy Gobert', 'C', true], ['Mike Conley', 'PG'],
      ['Bojan Bogdanovic', 'SF'], ['Jordan Clarkson', 'SG'], ['Joe Ingles', 'SF'],
      ['Royce O\'Neale', 'SF'], ['Derrick Favors', 'PF/C'], ['Georges Niang', 'PF'],
      ['Trent Forrest', 'PG'], ['Jarrell Brantley', 'PF'], ['Juwan Morgan', 'PF'],
      ['Miye Oni', 'SG'], ['Ersan Ilyasova', 'PF'], ['Matt Thomas', 'SG']
    ]
  },
  {
    teamId: 'POR', season: '2018-19', wins: 53, losses: 29, playoffResult: 'Conference Finals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Terry Stotts',
    players: [
      ['Damian Lillard', 'PG', true], ['CJ McCollum', 'SG', true], ['Jusuf Nurkic', 'C'],
      ['Al-Farouq Aminu', 'PF'], ['Maurice Harkless', 'SF'], ['Zach Collins', 'PF/C'],
      ['Rodney Hood', 'SG'], ['Evan Turner', 'SF'], ['Seth Curry', 'PG'],
      ['Jake Layman', 'SF'], ['Meyers Leonard', 'C'], ['Anfernee Simons', 'SG'],
      ['Enes Kanter', 'C'], ['Mario Hezonja', 'SF'], ['Gary Trent Jr.', 'SG']
    ]
  },
  {
    teamId: 'IND', season: '2013-14', wins: 56, losses: 26, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Frank Vogel',
    players: [
      ['Paul George', 'SF', true], ['Roy Hibbert', 'C'], ['David West', 'PF'],
      ['George Hill', 'PG'], ['Lance Stephenson', 'SG'], ['Danny Granger', 'SF'],
      ['Luis Scola', 'PF'], ['Ian Mahinmi', 'C'], ['C.J. Watson', 'PG'],
      ['Evan Turner', 'SF'], ['Chris Copeland', 'SF'], ['Donald Sloan', 'PG'],
      ['Lavoy Allen', 'PF'], ['Orlando Johnson', 'SG'], ['Rasual Butler', 'SG']
    ]
  },
  {
    teamId: 'LAL', season: '2001-02', wins: 58, losses: 24, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Phil Jackson',
    players: [
      ['Shaquille O\'Neal', 'C', true], ['Kobe Bryant', 'SG', true], ['Derek Fisher', 'PG'],
      ['Robert Horry', 'PF'], ['Rick Fox', 'SF'], ['Horace Grant', 'PF'],
      ['Devean George', 'SF'], ['Samaki Walker', 'PF/C'], ['Mark Madsen', 'PF'],
      ['Brian Shaw', 'PG'], ['Lindsey Hunter', 'PG'], ['Mitch Richmond', 'SG'],
      ['Jelani McCoy', 'C'], ['Stanislav Medvedenko', 'PF'], ['Tracy Murray', 'SF']
    ]
  },
  {
    teamId: 'MIA', season: '2019-20', wins: 44, losses: 29, playoffResult: 'League Finals',
    regularSeasonRank: 5, conferenceRank: 4, headCoach: 'Erik Spoelstra',
    players: [
      ['Jimmy Butler', 'SF', true], ['Bam Adebayo', 'C', true], ['Tyler Herro', 'SG'],
      ['Duncan Robinson', 'SG'], ['Goran Dragic', 'PG'], ['Kendrick Nunn', 'PG'],
      ['Jae Crowder', 'PF'], ['Andre Iguodala', 'SF'], ['Kelly Olynyk', 'C'],
      ['Derrick Jones Jr.', 'SF'], ['Meyers Leonard', 'C'], ['Solomon Hill', 'SF'],
      ['Udonis Haslem', 'PF'], ['Chris Silva', 'PF'], ['Kyle Alexander', 'C']
    ]
  },
  {
    teamId: 'BOS', season: '2021-22', wins: 51, losses: 31, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Ime Udoka',
    players: [
      ['Jayson Tatum', 'SF', true], ['Jaylen Brown', 'SG', true], ['Marcus Smart', 'PG'],
      ['Robert Williams III', 'C'], ['Al Horford', 'C'], ['Grant Williams', 'PF'],
      ['Derrick White', 'PG'], ['Payton Pritchard', 'PG'], ['Daniel Theis', 'C'],
      ['Josh Richardson', 'SG'], ['Romeo Langford', 'SG'], ['Aaron Nesmith', 'SF'],
      ['Nik Stauskas', 'SG'], ['Sam Hauser', 'SF'], ['Luke Kornet', 'C']
    ]
  },
  {
    teamId: 'CHI', season: '2010-11', wins: 62, losses: 20, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Tom Thibodeau',
    players: [
      ['Derrick Rose', 'PG', true], ['Carlos Boozer', 'PF'], ['Joakim Noah', 'C'],
      ['Luol Deng', 'SF'], ['Kyle Korver', 'SG'], ['Taj Gibson', 'PF'],
      ['C.J. Watson', 'PG'], ['Keith Bogans', 'SG'], ['Omer Asik', 'C'],
      ['Ronnie Brewer', 'SG'], ['Kurt Thomas', 'PF/C'], ['Brian Scalabrine', 'PF'],
      ['John Lucas III', 'PG'], ['Jannero Pargo', 'PG'], ['James Johnson', 'SF']
    ]
  },
  {
    teamId: 'NYK', season: '1998-99', wins: 27, losses: 23, playoffResult: 'League Finals',
    regularSeasonRank: 8, conferenceRank: 8, headCoach: 'Jeff Van Gundy',
    players: [
      ['Patrick Ewing', 'C', true], ['Allan Houston', 'SG'], ['Latrell Sprewell', 'SF'],
      ['Larry Johnson', 'PF'], ['Marcus Camby', 'C'], ['Charlie Ward', 'PG'],
      ['Chris Childs', 'PG'], ['John Starks', 'SG'], ['Buck Williams', 'PF'],
      ['Chris Dudley', 'C'], ['Kurt Thomas', 'PF'], ['Terry Cummings', 'PF'],
      ['Herb Williams', 'C'], ['Rick Brunson', 'PG'], ['David Wingate', 'SG']
    ]
  },
  {
    teamId: 'SAS', season: '2016-17', wins: 61, losses: 21, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Gregg Popovich',
    players: [
      ['Kawhi Leonard', 'SF', true], ['LaMarcus Aldridge', 'PF', true], ['Tony Parker', 'PG'],
      ['Pau Gasol', 'C'], ['Danny Green', 'SG'], ['Manu Ginobili', 'SG'],
      ['Patty Mills', 'PG'], ['Dewayne Dedbon', 'C'], ['Jonathon Simmons', 'SG'],
      ['David Lee', 'PF'], ['Kyle Anderson', 'SF'], ['Dejounte Murray', 'PG'],
      ['Joel Anthony', 'C'], ['Bryn Forbes', 'SG'], ['Davis Bertans', 'PF']
    ]
  },
  {
    teamId: 'PHX', season: '2006-07', wins: 61, losses: 21, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Mike D\'Antoni',
    players: [
      ['Steve Nash', 'PG', true], ['Amar\'e Stoudemire', 'PF/C', true], ['Shawn Marion', 'SF'],
      ['Raja Bell', 'SG'], ['Boris Diaw', 'PF'], ['Leandro Barbosa', 'SG'],
      ['Kurt Thomas', 'PF/C'], ['Marcus Banks', 'PG'], ['James Jones', 'SF'],
      ['Eddie House', 'SG'], ['Jumaine Jones', 'SF'], ['Pat Burke', 'PF'],
      ['Sean Marks', 'C'], ['Nikoloz Tskitishvili', 'PF'], ['D.J. Strawberry', 'SG']
    ]
  },
  {
    teamId: 'DET', season: '2003-04', wins: 54, losses: 28, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Larry Brown',
    players: [
      ['Chauncey Billups', 'PG', true], ['Richard Hamilton', 'SG', true], ['Tayshaun Prince', 'SF'],
      ['Rasheed Wallace', 'PF', true], ['Ben Wallace', 'C', true], ['Mehmet Okur', 'C'],
      ['Corliss Williamson', 'PF'], ['Lindsey Hunter', 'PG'], ['Mike James', 'PG'],
      ['Darvin Ham', 'SF'], ['Elden Campbell', 'C'], ['Darko Milicic', 'PF'],
      ['Bob Sura', 'SG'], ['Chucky Atkins', 'PG'], ['Derrick Coleman', 'PF']
    ]
  },
  {
    teamId: 'LAL', season: '1986-87', wins: 65, losses: 17, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Pat Riley',
    players: [
      ['Magic Johnson', 'PG', true], ['Kareem Abdul-Jabbar', 'C', true], ['James Worthy', 'SF', true],
      ['Byron Scott', 'SG'], ['A.C. Green', 'PF'], ['Michael Cooper', 'SG'],
      ['Mychal Thompson', 'C'], ['Kurt Rambis', 'PF'], ['Wes Matthews', 'SG'],
      ['Billy Thompson', 'SF'], ['Adrian Branch', 'SF'], ['Jeff Lamp', 'SG'],
      ['Mike Smrek', 'C'], ['Frank Brickowski', 'PF'], ['Milt Wagner', 'PG']
    ]
  },
  {
    teamId: 'BOS', season: '1985-86', wins: 67, losses: 15, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'K.C. Jones',
    players: [
      ['Larry Bird', 'SF', true], ['Kevin McHale', 'PF', true], ['Robert Parish', 'C', true],
      ['Dennis Johnson', 'PG'], ['Danny Ainge', 'SG'], ['Bill Walton', 'C'],
      ['Scott Wedman', 'SF'], ['Jerry Sichting', 'PG'], ['Sam Vincent', 'PG'],
      ['David Thirdkill', 'SF'], ['Greg Kite', 'C'], ['Rick Carlisle', 'PG'],
      ['Sly Williams', 'SF'], ['Darren Daye', 'SF'], ['George Kelser', 'SF']
    ]
  },
  {
    teamId: 'CHI', season: '1997-98', wins: 62, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Dennis Rodman', 'PF', true],
      ['Steve Kerr', 'PG'], ['Luc Longley', 'C'], ['Toni Kukoc', 'SF'],
      ['Ron Harper', 'PG'], ['Bill Wennington', 'C'], ['Jud Buechler', 'SF'],
      ['Scott Burrell', 'SF'], ['Randy Brown', 'PG'], ['Dickey Simpkins', 'PF'],
      ['Robert Parish', 'C'], ['Keith Booth', 'SF'], ['Rusty LaRue', 'PG']
    ]
  },
  {
    teamId: 'HOU', season: '1993-94', wins: 58, losses: 24, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Rudy Tomjanovich',
    players: [
      ['Hakeem Olajuwon', 'C', true], ['Otis Thorpe', 'PF'], ['Vernon Maxwell', 'SG'],
      ['Kenny Smith', 'PG'], ['Robert Horry', 'PF'], ['Mario Elie', 'SF'],
      ['Carl Herrera', 'PF'], ['Scott Brooks', 'PG'], ['Sam Cassell', 'PG'],
      ['Matt Bullard', 'PF'], ['Eric Riley', 'C'], ['Richard Petruska', 'PF'],
      ['Chris Jent', 'SG'], ['Larry Smith', 'PF'], ['Winston Garland', 'PG']
    ]
  },
  {
    teamId: 'HOU', season: '1994-95', wins: 47, losses: 35, playoffResult: 'League Champions',
    regularSeasonRank: 6, conferenceRank: 6, headCoach: 'Rudy Tomjanovich',
    players: [
      ['Hakeem Olajuwon', 'C', true], ['Clyde Drexler', 'SG', true], ['Robert Horry', 'PF'],
      ['Kenny Smith', 'PG'], ['Mario Elie', 'SF'], ['Sam Cassell', 'PG'],
      ['Otis Thorpe', 'PF'], ['Vernon Maxwell', 'SG'], ['Carl Herrera', 'PF'],
      ['Chucky Brown', 'SF'], ['Pete Chilcutt', 'PF'], ['Tim Breaux', 'SF'],
      ['Zan Tabak', 'C'], ['Adrian Caldwell', 'PF'], ['Larry Smith', 'PF']
    ]
  },
  {
    teamId: 'DET', season: '1988-89', wins: 63, losses: 19, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Chuck Daly',
    players: [
      ['Isiah Thomas', 'PG', true], ['Joe Dumars', 'SG', true], ['Dennis Rodman', 'SF', true],
      ['Bill Laimbeer', 'C'], ['Rick Mahorn', 'PF'], ['Vinnie Johnson', 'SG'],
      ['Mark Aguirre', 'SF'], ['John Salley', 'PF'], ['James Edwards', 'C'],
      ['Adrian Dantley', 'SF'], ['Fennis Dembo', 'SF'], ['Michael Williams', 'PG'],
      ['Gerald Henderson', 'SG'], ['Ralph Lewis', 'C'], ['Darryl Dawkins', 'C']
    ]
  },
  {
    teamId: 'LAL', season: '1999-00', wins: 67, losses: 15, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Shaquille O\'Neal', 'C', true], ['Kobe Bryant', 'SG', true], ['Glen Rice', 'SF'],
      ['Derek Fisher', 'PG'], ['Robert Horry', 'PF'], ['Rick Fox', 'SF'],
      ['A.C. Green', 'PF'], ['Ron Harper', 'PG'], ['Brian Shaw', 'PG'],
      ['Horace Grant', 'PF'], ['Travis Knight', 'C'], ['Devean George', 'SF'],
      ['Tyronn Lue', 'PG'], ['John Celestand', 'SG'], ['Isaiah Rider', 'SG']
    ]
  },
  {
    teamId: 'SAS', season: '1998-99', wins: 37, losses: 13, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Gregg Popovich',
    players: [
      ['Tim Duncan', 'PF/C', true], ['David Robinson', 'C', true], ['Sean Elliott', 'SF'],
      ['Avery Johnson', 'PG'], ['Mario Elie', 'SG'], ['Jerome Kersey', 'SF'],
      ['Will Perdue', 'C'], ['Antonio Daniels', 'PG'], ['Jaren Jackson', 'SG'],
      ['Malik Rose', 'PF'], ['Monty Williams', 'SF'], ['Andrew Gaze', 'SG'],
      ['Terry Porter', 'PG'], ['Gerard King', 'SF'], ['Samaki Walker', 'PF']
    ]
  },
  {
    teamId: 'UTA', season: '1996-97', wins: 64, losses: 18, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Jerry Sloan',
    players: [
      ['Karl Malone', 'PF', true], ['John Stockton', 'PG', true], ['Jeff Hornacek', 'SG'],
      ['Bryon Russell', 'SF'], ['Greg Ostertag', 'C'], ['Howard Eisley', 'PG'],
      ['Shandon Anderson', 'SF'], ['Antoine Carr', 'PF'], ['Chris Morris', 'SF'],
      ['Greg Foster', 'PF'], ['Adam Keefe', 'PF'], ['Jacque Vaughn', 'PG'],
      ['Olden Polynice', 'C'], ['Stephen Howard', 'PF'], ['Isaac Austin', 'C']
    ]
  },
  {
    teamId: 'UTA', season: '1997-98', wins: 62, losses: 20, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Jerry Sloan',
    players: [
      ['Karl Malone', 'PF', true], ['John Stockton', 'PG', true], ['Jeff Hornacek', 'SG'],
      ['Bryon Russell', 'SF'], ['Greg Ostertag', 'C'], ['Howard Eisley', 'PG'],
      ['Shandon Anderson', 'SF'], ['Antoine Carr', 'PF'], ['Chris Morris', 'SF'],
      ['Greg Foster', 'PF'], ['Adam Keefe', 'PF'], ['Jacque Vaughn', 'PG'],
      ['Thurl Bailey', 'PF'], ['Stephen Howard', 'PF'], ['Greg Kite', 'C']
    ]
  },
  {
    teamId: 'ORL', season: '1994-95', wins: 57, losses: 25, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Brian Hill',
    players: [
      ['Shaquille O\'Neal', 'C', true], ['Penny Hardaway', 'PG', true], ['Horace Grant', 'PF'],
      ['Scott Skiles', 'PG'], ['Dennis Scott', 'SF'], ['Nick Anderson', 'SG'],
      ['Brian Shaw', 'PG'], ['Tree Rollins', 'C'], ['Anthony Bowie', 'SG'],
      ['Jeff Turner', 'PF'], ['Geert Hammink', 'C'], ['Brooks Thompson', 'PG'],
      ['Donald Royal', 'SF'], ['Shawn Respert', 'SG'], ['Anthony Avent', 'PF']
    ]
  },
  {
    teamId: 'SEA', season: '1995-96', wins: 64, losses: 18, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'George Karl',
    players: [
      ['Gary Payton', 'PG', true], ['Shawn Kemp', 'PF', true], ['Detlef Schrempf', 'SF'],
      ['Hersey Hawkins', 'SG'], ['Sam Perkins', 'C'], ['Nate McMillan', 'PG'],
      ['Vincent Askew', 'SF'], ['Ervin Johnson', 'C'], ['Frank Brickowski', 'PF'],
      ['Sarunas Marciulionis', 'SG'], ['Steve Scheffler', 'C'], ['Sherell Ford', 'SF'],
      ['Eric Snow', 'PG'], ['David Wingate', 'SG'], ['Bill Curley', 'PF']
    ]
  },
  {
    teamId: 'IND', season: '1999-00', wins: 56, losses: 26, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Larry Bird',
    players: [
      ['Jalen Rose', 'SG', true], ['Reggie Miller', 'SG', true], ['Rik Smits', 'C'],
      ['Mark Jackson', 'PG'], ['Dale Davis', 'PF'], ['Chris Mullin', 'SF'],
      ['Antonio Davis', 'PF'], ['Travis Best', 'PG'], ['Sam Perkins', 'PF'],
      ['Derrick McKey', 'SF'], ['Jeff Foster', 'PF'], ['Al Harrington', 'SF'],
      ['Austin Croshere', 'PF'], ['Haywoode Workman', 'PG'], ['Zan Tabak', 'C']
    ]
  },
  {
    teamId: 'PHI', season: '2000-01', wins: 56, losses: 26, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Larry Brown',
    players: [
      ['Allen Iverson', 'PG', true], ['Dikembe Mutombo', 'C', true], ['Toni Kukoc', 'SF'],
      ['Aaron McKie', 'SG'], ['Tyrone Hill', 'PF'], ['Eric Snow', 'PG'],
      ['George Lynch', 'SF'], ['Matt Geiger', 'C'], ['Jumaine Jones', 'SF'],
      ['Raja Bell', 'SG'], ['Speedy Claxton', 'PG'], ['Todd MacCulloch', 'C'],
      ['Pepe Sanchez', 'PG'], ['Kevin Ollie', 'PG'], ['Nazr Mohammed', 'C']
    ]
  },
  {
    teamId: 'NJN', season: '2001-02', wins: 52, losses: 30, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Byron Scott',
    players: [
      ['Jason Kidd', 'PG', true], ['Kenyon Martin', 'PF', true], ['Richard Jefferson', 'SF'],
      ['Keith Van Horn', 'PF'], ['Todd MacCulloch', 'C'], ['Kerry Kittles', 'SG'],
      ['Lucious Harris', 'SG'], ['Aaron Williams', 'PF'], ['Brian Scalabrine', 'PF'],
      ['Jason Collins', 'C'], ['Rodney Rogers', 'SF'], ['Brandon Armstrong', 'PG'],
      ['Tamar Slay', 'SG'], ['Dikembe Mutombo', 'C'], ['Soumaila Samake', 'C']
    ]
  },
  {
    teamId: 'NJN', season: '2002-03', wins: 49, losses: 33, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Byron Scott',
    players: [
      ['Jason Kidd', 'PG', true], ['Kenyon Martin', 'PF', true], ['Richard Jefferson', 'SF'],
      ['Kerry Kittles', 'SG'], ['Jason Collins', 'C'], ['Rodney Rogers', 'SF'],
      ['Lucious Harris', 'SG'], ['Aaron Williams', 'PF'], ['Brian Scalabrine', 'PF'],
      ['Dikembe Mutombo', 'C'], ['Tamar Slay', 'SG'], ['Brandon Armstrong', 'PG'],
      ['Hubert Davis', 'SG'], ['Soumaila Samake', 'C'], ['Zoran Planinic', 'PG']
    ]
  },
  {
    teamId: 'MIN', season: '2003-04', wins: 58, losses: 24, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Flip Saunders',
    players: [
      ['Kevin Garnett', 'PF', true], ['Sam Cassell', 'PG', true], ['Latrell Sprewell', 'SG'],
      ['Wally Szczerbiak', 'SF'], ['Ervin Johnson', 'C'], ['Troy Hudson', 'PG'],
      ['Michael Olowokandi', 'C'], ['Trenton Hassell', 'SG'], ['Fred Hoiberg', 'SG'],
      ['Mark Madsen', 'PF'], ['Kendall Gill', 'SG'], ['Gary Trent', 'PF'],
      ['Quincy Lewis', 'SF'], ['Oliver Miller', 'C'], ['Ndudi Ebi', 'SF']
    ]
  },
  {
    teamId: 'SAC', season: '2001-02', wins: 61, losses: 21, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Rick Adelman',
    players: [
      ['Chris Webber', 'PF', true], ['Vlade Divac', 'C', true], ['Peja Stojakovic', 'SF'],
      ['Mike Bibby', 'PG'], ['Doug Christie', 'SG'], ['Bobby Jackson', 'PG'],
      ['Hedo Turkoglu', 'SF'], ['Keon Clark', 'PF'], ['Jason Williams', 'PG'],
      ['Scot Pollard', 'C'], ['Gerald Wallace', 'SF'], ['Mateen Cleaves', 'PG'],
      ['Lawrence Funderburke', 'PF'], ['Predrag Drobnjak', 'C'], ['Jarron Collins', 'C']
    ]
  },
  {
    teamId: 'GSW', season: '2014-15', wins: 67, losses: 15, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Steve Kerr',
    players: [
      ['Stephen Curry', 'PG', true], ['Klay Thompson', 'SG', true], ['Draymond Green', 'PF'],
      ['Andre Iguodala', 'SF'], ['Andrew Bogut', 'C'], ['Harrison Barnes', 'SF'],
      ['Shaun Livingston', 'PG'], ['Festus Ezeli', 'C'], ['Marreese Speights', 'PF'],
      ['Leandro Barbosa', 'PG'], ['David Lee', 'PF'], ['Justin Holiday', 'SG'],
      ['Brandon Rush', 'SF'], ['Ognjen Kuzmic', 'C'], ['James Michael McAdoo', 'PF']
    ]
  },
  {
    teamId: 'CLE', season: '2008-09', wins: 66, losses: 16, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Mike Brown',
    players: [
      ['LeBron James', 'SF', true], ['Mo Williams', 'PG'], ['Zydrunas Ilgauskas', 'C'],
      ['Anderson Varejao', 'PF'], ['Delonte West', 'SG'], ['Ben Wallace', 'C'],
      ['Wally Szczerbiak', 'SF'], ['Joe Smith', 'PF'], ['Daniel Gibson', 'PG'],
      ['Sasha Pavlovic', 'SG'], ['Tarence Kinsey', 'SG'], ['Lorenzen Wright', 'C'],
      ['Darnell Jackson', 'PF'], ['J.J. Hickson', 'PF'], ['Jawad Williams', 'SF']
    ]
  },
  {
    teamId: 'ORL', season: '2008-09', wins: 59, losses: 23, playoffResult: 'League Finals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Stan Van Gundy',
    players: [
      ['Dwight Howard', 'C', true], ['Rashard Lewis', 'PF', true], ['Hedo Turkoglu', 'SF'],
      ['Jameer Nelson', 'PG'], ['Courtney Lee', 'SG'], ['Mickael Pietrus', 'SF'],
      ['Rafer Alston', 'PG'], ['Tony Battie', 'C'], ['Brian Cook', 'PF'],
      ['Anthony Johnson', 'PG'], ['Adonal Foyle', 'C'], ['J.J. Redick', 'SG'],
      ['Marcin Gortat', 'C'], ['Keith Bogans', 'SG'], ['Pat Garrity', 'PF']
    ]
  },
  {
    teamId: 'PHX', season: '2004-05', wins: 62, losses: 20, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Mike D\'Antoni',
    players: [
      ['Steve Nash', 'PG', true], ['Amar\'e Stoudemire', 'PF/C', true], ['Shawn Marion', 'SF'],
      ['Joe Johnson', 'SG'], ['Quentin Richardson', 'SF'], ['Leandro Barbosa', 'SG'],
      ['Jim Jackson', 'SG'], ['Steven Hunter', 'C'], ['Casey Jacobsen', 'SG'],
      ['Walter McCarty', 'PF'], ['Zarko Cabarkapa', 'SF'], ['Jake Voskuhl', 'C'],
      ['Maciej Lampe', 'PF'], ['Paul Shirley', 'PF'], ['Howard Eisley', 'PG']
    ]
  },
  {
    teamId: 'DET', season: '2005-06', wins: 64, losses: 18, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Flip Saunders',
    players: [
      ['Chauncey Billups', 'PG', true], ['Richard Hamilton', 'SG', true], ['Tayshaun Prince', 'SF'],
      ['Rasheed Wallace', 'PF', true], ['Ben Wallace', 'C', true], ['Lindsey Hunter', 'PG'],
      ['Antonio McDyess', 'PF'], ['Nazr Mohammed', 'C'], ['Maurice Evans', 'SG'],
      ['Dale Davis', 'PF'], ['Carlos Delfino', 'SF'], ['Flip Murray', 'SG'],
      ['Ronald Dupree', 'SF'], ['Primoz Brezec', 'C'], ['Alex Acker', 'SG']
    ]
  },
  {
    teamId: 'LAC', season: '2013-14', wins: 57, losses: 25, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Doc Rivers',
    players: [
      ['Chris Paul', 'PG', true], ['Blake Griffin', 'PF', true], ['DeAndre Jordan', 'C'],
      ['J.J. Redick', 'SG'], ['Matt Barnes', 'SF'], ['Jamal Crawford', 'SG'],
      ['Darren Collison', 'PG'], ['Glen Davis', 'PF'], ['Danny Granger', 'SF'],
      ['Willie Green', 'SG'], ['Hedo Turkoglu', 'SF'], ['Ryan Hollins', 'C'],
      ['Antawn Jamison', 'PF'], ['Jared Dudley', 'SF'], ['Reggie Bullock', 'SG']
    ]
  },
  {
    teamId: 'MEM', season: '2012-13', wins: 56, losses: 26, playoffResult: 'Conference Finals',
    regularSeasonRank: 5, conferenceRank: 5, headCoach: 'Lionel Hollins',
    players: [
      ['Marc Gasol', 'C', true], ['Zach Randolph', 'PF', true], ['Mike Conley', 'PG'],
      ['Tony Allen', 'SG'], ['Tayshaun Prince', 'SF'], ['Jerryd Bayless', 'SG'],
      ['Ed Davis', 'PF'], ['Darrell Arthur', 'PF'], ['Quincy Pondexter', 'SF'],
      ['Austin Daye', 'SF'], ['Keyon Dooling', 'SG'], ['Hamed Haddadi', 'C'],
      ['Jon Leuer', 'PF'], ['Wayne Ellington', 'SG'], ['Donte Greene', 'SF']
    ]
  },
  {
    teamId: 'WAS', season: '1977-78', wins: 44, losses: 38, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Dick Motta',
    players: [
      ['Wes Unseld', 'C', true], ['Elvin Hayes', 'PF', true], ['Bob Dandridge', 'SF'],
      ['Phil Chenier', 'SG'], ['Tom Henderson', 'PG'], ['Mitch Kupchak', 'PF'],
      ['Larry Wright', 'PG'], ['Charles Johnson', 'SF'], ['Joe Pace', 'SF'],
      ['Greg Ballard', 'SF'], ['Kevin Porter', 'PG'], ['Dave Corzine', 'C'],
      ['John Lucas', 'PG'], ['Roger Phegley', 'SG'], ['Bo Ellis', 'PF']
    ]
  },
  {
    teamId: 'TOR', season: '2015-16', wins: 56, losses: 26, playoffResult: 'Conference Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Dwane Casey',
    players: [
      ['Kyle Lowry', 'PG', true], ['DeMar DeRozan', 'SG', true], ['Jonas Valanciunas', 'C'],
      ['DeMarre Carroll', 'SF'], ['Luis Scola', 'PF'], ['Cory Joseph', 'PG'],
      ['Terrence Ross', 'SG'], ['Patrick Patterson', 'PF'], ['Bismack Biyombo', 'C'],
      ['Norman Powell', 'SG'], ['James Johnson', 'SF'], ['Lucas Nogueira', 'C'],
      ['Delon Wright', 'PG'], ['Anthony Bennett', 'PF'], ['Tyler Hansbrough', 'PF']
    ]
  },
  {
    teamId: 'OKC', season: '2011-12', wins: 47, losses: 19, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Scott Brooks',
    players: [
      ['Kevin Durant', 'SF', true], ['Russell Westbrook', 'PG', true], ['James Harden', 'SG', true],
      ['Serge Ibaka', 'PF'], ['Kendrick Perkins', 'C'], ['Nick Collison', 'PF'],
      ['Thabo Sefolosha', 'SG'], ['Derek Fisher', 'PG'], ['Hasheem Thabeet', 'C'],
      ['Daequan Cook', 'SG'], ['Royal Ivey', 'PG'], ['Nazr Mohammed', 'C'],
      ['Lazar Hayward', 'SF'], ['Cole Aldrich', 'C'], ['Reggie Jackson', 'PG']
    ]
  },
  {
    teamId: 'HOU', season: '2017-18', wins: 65, losses: 17, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Mike D\'Antoni',
    players: [
      ['James Harden', 'SG', true], ['Chris Paul', 'PG', true], ['Clint Capela', 'C'],
      ['Trevor Ariza', 'SF'], ['P.J. Tucker', 'PF'], ['Eric Gordon', 'SG'],
      ['Ryan Anderson', 'PF'], ['Gerald Green', 'SG'], ['Luc Mbah a Moute', 'SF'],
      ['Nene Hilario', 'C'], ['Joe Johnson', 'SF'], ['Tarik Black', 'PF'],
      ['Zhou Qi', 'C'], ['Bobby Brown', 'PG'], ['Briante Weber', 'PG']
    ]
  },
  {
    teamId: 'LAL', season: '2008-09', wins: 65, losses: 17, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Kobe Bryant', 'SG', true], ['Pau Gasol', 'PF', true], ['Lamar Odom', 'PF'],
      ['Derek Fisher', 'PG'], ['Trevor Ariza', 'SF'], ['Andrew Bynum', 'C'],
      ['Shannon Brown', 'SG'], ['Jordan Farmar', 'PG'], ['Luke Walton', 'SF'],
      ['Sasha Vujacic', 'SG'], ['Josh Powell', 'PF'], ['D.J. Mbenga', 'C'],
      ['Sun Yue', 'PG'], ['Adam Morrison', 'SF'], ['Chris Mihm', 'C']
    ]
  },
  {
    teamId: 'BOS', season: '2009-10', wins: 50, losses: 32, playoffResult: 'League Finals',
    regularSeasonRank: 4, conferenceRank: 4, headCoach: 'Doc Rivers',
    players: [
      ['Paul Pierce', 'SF', true], ['Kevin Garnett', 'PF', true], ['Ray Allen', 'SG', true],
      ['Rajon Rondo', 'PG'], ['Kendrick Perkins', 'C'], ['Glen Davis', 'PF'],
      ['Tony Allen', 'SG'], ['Rasheed Wallace', 'PF'], ['Nate Robinson', 'PG'],
      ['Marquis Daniels', 'SG'], ['Shelden Williams', 'PF'], ['Semih Erden', 'C'],
      ['Michael Finley', 'SG'], ['Brian Scalabrine', 'PF'], ['Lester Hudson', 'SG']
    ]
  },
  {
    teamId: 'LAL', season: '1971-72', wins: 69, losses: 13, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Bill Sharman',
    players: [
      ['Wilt Chamberlain', 'C', true], ['Jerry West', 'PG', true], ['Gail Goodrich', 'SG', true],
      ['Elgin Baylor', 'SF'], ['Happy Hairston', 'PF'], ['Jim McMillian', 'SF'],
      ['Pat Riley', 'PG'], ['Flynn Robinson', 'SG'], ['Keith Erickson', 'SF'],
      ['Bill Bridges', 'PF'], ['John Trapp', 'SF'], ['Leroy Ellis', 'C'],
      ['Willie McCarter', 'PG'], ['Rick Robertson', 'SF'], ['Jim Cleamons', 'PG']
    ]
  },
  {
    teamId: 'BOS', season: '1980-81', wins: 62, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Bill Fitch',
    players: [
      ['Larry Bird', 'SF', true], ['Robert Parish', 'C', true], ['Cedric Maxwell', 'PF'],
      ['Tiny Archibald', 'PG'], ['Chris Ford', 'SG'], ['Kevin McHale', 'PF'],
      ['M.L. Carr', 'SF'], ['Rick Robey', 'C'], ['Gerald Henderson', 'SG'],
      ['Don Chaney', 'PG'], ['Eric Fernsten', 'C'], ['Terry Duerod', 'SG'],
      ['Wayne Kreklow', 'SG'], ['John Stroud', 'PF'], ['Charles Bradley', 'SG']
    ]
  },
  {
    teamId: 'PHI', season: '1982-83', wins: 65, losses: 17, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Billy Cunningham',
    players: [
      ['Julius Erving', 'SF', true], ['Moses Malone', 'C', true], ['Maurice Cheeks', 'PG'],
      ['Andrew Toney', 'SG'], ['Bobby Jones', 'PF'], ['Clemon Johnson', 'C'],
      ['Marc Iavaroni', 'PF'], ['Franklin Edwards', 'PG'], ['Reggie Johnson', 'PF'],
      ['Clint Richardson', 'SG'], ['Earl Cureton', 'PF'], ['Mike Bantom', 'PF'],
      ['Mark McNamara', 'C'], ['Russ Schoene', 'SF'], ['Mitchell Anderson', 'SF']
    ]
  },
  {
    teamId: 'DET', season: '1989-90', wins: 59, losses: 23, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Chuck Daly',
    players: [
      ['Isiah Thomas', 'PG', true], ['Joe Dumars', 'SG', true], ['Dennis Rodman', 'PF', true],
      ['Bill Laimbeer', 'C'], ['Vinnie Johnson', 'SG'], ['Mark Aguirre', 'SF'],
      ['John Salley', 'PF'], ['James Edwards', 'C'], ['Gerald Henderson', 'SG'],
      ['Scott Hastings', 'C'], ['David Greenwood', 'PF'], ['Ralph Lewis', 'C'],
      ['Orlando Woolridge', 'SF'], ['Tree Rollins', 'C'], ['William Bedford', 'C']
    ]
  },
  {
    teamId: 'POR', season: '1976-77', wins: 49, losses: 33, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 1, headCoach: 'Jack Ramsay',
    players: [
      ['Bill Walton', 'C', true], ['Maurice Lucas', 'PF', true], ['Lionel Hollins', 'PG'],
      ['Dave Twardzik', 'PG'], ['Bob Gross', 'SF'], ['Johnny Davis', 'SG'],
      ['Lloyd Neal', 'PF'], ['Herm Gilliam', 'SF'], ['Larry Steele', 'SG'],
      ['Corky Calhoun', 'SF'], ['Robin Jones', 'C'], ['Wally Walker', 'SF'],
      ['T.R. Dunn', 'SG'], ['Willie Smith', 'PG'], ['Kim Anderson', 'C']
    ]
  },
  {
    teamId: 'NYK', season: '1972-73', wins: 57, losses: 25, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 1, headCoach: 'Red Holzman',
    players: [
      ['Willis Reed', 'C', true], ['Walt Frazier', 'PG', true], ['Earl Monroe', 'SG', true],
      ['Bill Bradley', 'SF'], ['Dave DeBusschere', 'PF'], ['Jerry Lucas', 'PF'],
      ['Phil Jackson', 'PF'], ['Dean Meminger', 'SG'], ['Henry Bibby', 'PG'],
      ['John Gianelli', 'C'], ['Mel Davis', 'SF'], ['Tom Riker', 'PF'],
      ['Hawthorne Wingo', 'SF'], ['Mike Riordan', 'SG'], ['Eddie Mast', 'C']
    ]
  },
  {
    teamId: 'GSW', season: '1974-75', wins: 48, losses: 34, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Al Attles',
    players: [
      ['Rick Barry', 'SF', true], ['Jamaal Wilkes', 'SF', true], ['Clifford Ray', 'C'],
      ['Phil Smith', 'SG'], ['Butch Beard', 'PG'], ['Jeff Mullins', 'SG'],
      ['Derrek Dickey', 'PF'], ['Charles Johnson', 'PF'], ['George Johnson', 'C'],
      ['Bill Bridges', 'PF'], ['Steve Bracey', 'SG'], ['Robert Parish', 'C'],
      ['Sonny Parker', 'SF'], ['Charles Dudley', 'PG'], ['Nate Williams', 'PF']
    ]
  },
  {
    teamId: 'SEA', season: '1978-79', wins: 52, losses: 30, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 1, headCoach: 'Lenny Wilkens',
    players: [
      ['Dennis Johnson', 'SG', true], ['Gus Williams', 'PG', true], ['Jack Sikma', 'C', true],
      ['Lonnie Shelton', 'PF'], ['John Johnson', 'SF'], ['Paul Silas', 'PF'],
      ['Fred Brown', 'SG'], ['Jackie Robinson', 'PG'],
      ['Joe Hassett', 'SG'], ['Dennis Awtrey', 'C'], ['Tom LaGarde', 'C'],
      ['Vinnie Johnson', 'SG'], ['Dick Snyder', 'SG'], ['Kevin Kunnert', 'C']
    ]
  },
  {
    teamId: 'BOS', season: '1983-84', wins: 62, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'K.C. Jones',
    players: [
      ['Larry Bird', 'SF', true], ['Kevin McHale', 'PF', true], ['Robert Parish', 'C', true],
      ['Dennis Johnson', 'PG'], ['Danny Ainge', 'SG'], ['Cedric Maxwell', 'PF'],
      ['Scott Wedman', 'SF'], ['Gerald Henderson', 'SG'], ['M.L. Carr', 'SF'],
      ['Quinn Buckner', 'SG'], ['Greg Kite', 'C'], ['Rick Carlisle', 'PG'],
      ['Ray Williams', 'PG'], ['Darren Tillis', 'PF'], ['Carlos Clark', 'SG']
    ]
  },
  {
    teamId: 'LAL', season: '1984-85', wins: 62, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Pat Riley',
    players: [
      ['Magic Johnson', 'PG', true], ['Kareem Abdul-Jabbar', 'C', true], ['James Worthy', 'SF', true],
      ['Byron Scott', 'SG'], ['A.C. Green', 'PF'], ['Michael Cooper', 'SG'],
      ['Bob McAdoo', 'PF'], ['Kurt Rambis', 'PF'], ['Mike McGee', 'SG'],
      ['Mitch Kupchak', 'PF'], ['Maurice Lucas', 'PF'], ['Larry Spriggs', 'SF'],
      ['Ronnie Lester', 'PG'], ['Chuck Nevitt', 'C'], ['Earl Jones', 'SF']
    ]
  },
  {
    teamId: 'CHI', season: '1990-91', wins: 61, losses: 21, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Horace Grant', 'PF'],
      ['Bill Cartwright', 'C'], ['John Paxson', 'PG'], ['Dennis Hopson', 'SG'],
      ['Craig Hodges', 'SG'], ['Scott Williams', 'PF'], ['Cliff Levingston', 'PF'],
      ['Will Perdue', 'C'], ['Stacey King', 'PF'], ['B.J. Armstrong', 'PG'],
      ['Ed Nealy', 'PF'], ['Darrell Walker', 'SG'], ['Jeff Sanders', 'PF']
    ]
  },
  {
    teamId: 'CHI', season: '1991-92', wins: 67, losses: 15, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Horace Grant', 'PF'],
      ['Bill Cartwright', 'C'], ['John Paxson', 'PG'], ['B.J. Armstrong', 'PG'],
      ['Craig Hodges', 'SG'], ['Scott Williams', 'PF'], ['Cliff Levingston', 'PF'],
      ['Will Perdue', 'C'], ['Stacey King', 'PF'], ['Dennis Hopson', 'SG'],
      ['Mark Randall', 'PF'], ['Bobby Hansen', 'SG'], ['Rodney McCray', 'SF']
    ]
  },
  {
    teamId: 'CHI', season: '1992-93', wins: 57, losses: 25, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Horace Grant', 'PF'],
      ['Bill Cartwright', 'C'], ['B.J. Armstrong', 'PG'], ['John Paxson', 'PG'],
      ['Scott Williams', 'PF'], ['Will Perdue', 'C'], ['Trent Tucker', 'SG'],
      ['Stacey King', 'PF'], ['Darrell Walker', 'SG'], ['Rodney McCray', 'SF'],
      ['Jo Jo English', 'PG'], ['Ed Nealy', 'PF'], ['Mark Randall', 'PF']
    ]
  },
  {
    teamId: 'CHI', season: '1996-97', wins: 69, losses: 13, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Michael Jordan', 'SG', true], ['Scottie Pippen', 'SF', true], ['Dennis Rodman', 'PF', true],
      ['Steve Kerr', 'PG'], ['Luc Longley', 'C'], ['Toni Kukoc', 'SF'],
      ['Ron Harper', 'PG'], ['Bill Wennington', 'C'], ['Jud Buechler', 'SF'],
      ['Brian Williams', 'PF'], ['Randy Brown', 'PG'], ['Dickey Simpkins', 'PF'],
      ['Jason Caffey', 'PF'], ['John Salley', 'C'], ['Jack Haley', 'C']
    ]
  },
  {
    teamId: 'SAS', season: '2002-03', wins: 60, losses: 22, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Gregg Popovich',
    players: [
      ['Tim Duncan', 'PF/C', true], ['David Robinson', 'C', true], ['Tony Parker', 'PG'],
      ['Manu Ginobili', 'SG'], ['Bruce Bowen', 'SF'], ['Stephen Jackson', 'SF'],
      ['Malik Rose', 'PF'], ['Kevin Willis', 'PF'], ['Speedy Claxton', 'PG'],
      ['Steve Smith', 'SG'], ['Danny Ferry', 'PF'], ['Mengke Bateer', 'C'],
      ['Devin Brown', 'SG'], ['Ron Mercer', 'SG'], ['Amal McCaskill', 'C']
    ]
  },
  {
    teamId: 'SAS', season: '2004-05', wins: 59, losses: 23, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Gregg Popovich',
    players: [
      ['Tim Duncan', 'PF/C', true], ['Tony Parker', 'PG', true], ['Manu Ginobili', 'SG'],
      ['Bruce Bowen', 'SF'], ['Rasho Nesterovic', 'C'], ['Robert Horry', 'PF'],
      ['Nazr Mohammed', 'C'], ['Brent Barry', 'SG'], ['Devin Brown', 'SG'],
      ['Glenn Robinson', 'SF'], ['Sean Marks', 'C'], ['Linton Johnson', 'SF'],
      ['Tony Massenburg', 'PF'], ['Mike Wilks', 'PG'], ['Corey Alexander', 'PG']
    ]
  },
  {
    teamId: 'SAS', season: '2006-07', wins: 58, losses: 24, playoffResult: 'League Champions',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Gregg Popovich',
    players: [
      ['Tim Duncan', 'PF/C', true], ['Tony Parker', 'PG', true], ['Manu Ginobili', 'SG'],
      ['Bruce Bowen', 'SF'], ['Fabricio Oberto', 'C'], ['Robert Horry', 'PF'],
      ['Michael Finley', 'SF'], ['Brent Barry', 'SG'], ['Francisco Elson', 'C'],
      ['Jacque Vaughn', 'PG'], ['Matt Bonner', 'PF'], ['Ime Udoka', 'SF'],
      ['Melvin Ely', 'PF'], ['Eric Williams', 'SF'], ['Vassilis Spanoulis', 'PG']
    ]
  },
  {
    teamId: 'LAL', season: '2000-01', wins: 56, losses: 26, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Phil Jackson',
    players: [
      ['Shaquille O\'Neal', 'C', true], ['Kobe Bryant', 'SG', true], ['Derek Fisher', 'PG'],
      ['Robert Horry', 'PF'], ['Rick Fox', 'SF'], ['Horace Grant', 'PF'],
      ['Ron Harper', 'PG'], ['Devean George', 'SF'], ['Brian Shaw', 'PG'],
      ['Samaki Walker', 'PF'], ['Isaiah Rider', 'SG'], ['Tyronn Lue', 'PG'],
      ['Mark Madsen', 'PF'], ['Stanislav Medvedenko', 'PF'], ['Mike Penberthy', 'SG']
    ]
  },
  {
    teamId: 'LAL', season: '2009-10', wins: 57, losses: 25, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Phil Jackson',
    players: [
      ['Kobe Bryant', 'SG', true], ['Pau Gasol', 'PF', true], ['Lamar Odom', 'PF'],
      ['Derek Fisher', 'PG'], ['Ron Artest', 'SF'], ['Andrew Bynum', 'C'],
      ['Jordan Farmar', 'PG'], ['Shannon Brown', 'SG'], ['Luke Walton', 'SF'],
      ['Sasha Vujacic', 'SG'], ['Adam Morrison', 'SF'], ['Josh Powell', 'PF'],
      ['D.J. Mbenga', 'C'], ['Joe Crawford', 'SG'], ['Sun Yue', 'PG']
    ]
  },
  {
    teamId: 'MIA', season: '2005-06', wins: 52, losses: 30, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Pat Riley',
    players: [
      ['Dwyane Wade', 'SG', true], ['Shaquille O\'Neal', 'C', true], ['Alonzo Mourning', 'C'],
      ['Gary Payton', 'PG'], ['Antoine Walker', 'PF'], ['Jason Williams', 'PG'],
      ['Udonis Haslem', 'PF'], ['James Posey', 'SF'], ['Wayne Simien', 'PF'],
      ['Derek Anderson', 'SG'], ['Shandon Anderson', 'SF'], ['Jason Kapono', 'SG'],
      ['Dorell Wright', 'SF'], ['Michael Doleac', 'C'], ['Earl Barron', 'C']
    ]
  },
  {
    teamId: 'MIA', season: '2010-11', wins: 58, losses: 24, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Erik Spoelstra',
    players: [
      ['LeBron James', 'SF', true], ['Dwyane Wade', 'SG', true], ['Chris Bosh', 'PF', true],
      ['Mario Chalmers', 'PG'], ['Udonis Haslem', 'PF'], ['Mike Miller', 'SF'],
      ['Joel Anthony', 'C'], ['James Jones', 'SF'], ['Eddie House', 'SG'],
      ['Zydrunas Ilgauskas', 'C'], ['Carlos Arroyo', 'PG'], ['Juwan Howard', 'PF'],
      ['Jamaal Magloire', 'C'], ['Erick Dampier', 'C'], ['Dexter Pittman', 'C']
    ]
  },
  {
    teamId: 'MIA', season: '2011-12', wins: 46, losses: 20, playoffResult: 'League Champions',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Erik Spoelstra',
    players: [
      ['LeBron James', 'SF', true], ['Dwyane Wade', 'SG', true], ['Chris Bosh', 'PF', true],
      ['Mario Chalmers', 'PG'], ['Udonis Haslem', 'PF'], ['Shane Battier', 'SF'],
      ['Joel Anthony', 'C'], ['Mike Miller', 'SF'], ['Norris Cole', 'PG'],
      ['James Jones', 'SF'], ['Ronny Turiaf', 'C'], ['Juwan Howard', 'PF'],
      ['Eddy Curry', 'C'], ['Dexter Pittman', 'C'], ['Terrel Harris', 'SG']
    ]
  },
  {
    teamId: 'BOS', season: '2010-11', wins: 56, losses: 26, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Doc Rivers',
    players: [
      ['Paul Pierce', 'SF', true], ['Kevin Garnett', 'PF', true], ['Ray Allen', 'SG', true],
      ['Rajon Rondo', 'PG'], ['Kendrick Perkins', 'C'], ['Glen Davis', 'PF'],
      ['Jermaine O\'Neal', 'C'], ['Delonte West', 'SG'], ['Nate Robinson', 'PG'],
      ['Shaquille O\'Neal', 'C'], ['Semih Erden', 'C'], ['Jeff Green', 'SF'],
      ['Luke Harangody', 'PF'], ['Marquis Daniels', 'SG'], ['Von Wafer', 'SG']
    ]
  },
  {
    teamId: 'OKC', season: '2015-16', wins: 55, losses: 27, playoffResult: 'Conference Finals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Billy Donovan',
    players: [
      ['Kevin Durant', 'SF', true], ['Russell Westbrook', 'PG', true], ['Serge Ibaka', 'PF'],
      ['Steven Adams', 'C'], ['Andre Roberson', 'SG'], ['Enes Kanter', 'C'],
      ['Dion Waiters', 'SG'], ['Cameron Payne', 'PG'], ['Nick Collison', 'PF'],
      ['Kyle Singler', 'SF'], ['Anthony Morrow', 'SG'], ['Nazr Mohammed', 'C'],
      ['D.J. Augustin', 'PG'], ['Randy Foye', 'SG'], ['Mitch McGary', 'PF']
    ]
  },
  {
    teamId: 'GSW', season: '2015-16', wins: 73, losses: 9, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Steve Kerr',
    players: [
      ['Stephen Curry', 'PG', true], ['Klay Thompson', 'SG', true], ['Draymond Green', 'PF', true],
      ['Andre Iguodala', 'SF'], ['Andrew Bogut', 'C'], ['Harrison Barnes', 'SF'],
      ['Shaun Livingston', 'PG'], ['Festus Ezeli', 'C'], ['Marreese Speights', 'PF'],
      ['Leandro Barbosa', 'PG'], ['Brandon Rush', 'SF'], ['Mo Speights', 'PF'],
      ['Ian Clark', 'SG'], ['James Michael McAdoo', 'PF'], ['Kevon Looney', 'PF']
    ]
  },
  {
    teamId: 'GSW', season: '2018-19', wins: 57, losses: 25, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Steve Kerr',
    players: [
      ['Stephen Curry', 'PG', true], ['Kevin Durant', 'SF', true], ['Klay Thompson', 'SG', true],
      ['Draymond Green', 'PF', true], ['Andre Iguodala', 'SF'], ['Kevon Looney', 'C'],
      ['Shaun Livingston', 'PG'], ['Alfonzo McKinnie', 'SF'], ['Jordan Bell', 'PF'],
      ['Quinn Cook', 'PG'], ['Jonas Jerebko', 'PF'], ['Damian Jones', 'C'],
      ['Jacob Evans', 'SG'], ['Marcus Derrickson', 'PF'], ['Andrew Bogut', 'C']
    ]
  },
  {
    teamId: 'CLE', season: '2017-18', wins: 50, losses: 32, playoffResult: 'League Finals',
    regularSeasonRank: 4, conferenceRank: 4, headCoach: 'Tyronn Lue',
    players: [
      ['LeBron James', 'SF', true], ['Kevin Love', 'PF', true], ['Tristan Thompson', 'C'],
      ['J.R. Smith', 'SG'], ['George Hill', 'PG'], ['Kyle Korver', 'SG'],
      ['Jeff Green', 'PF'], ['Rodney Hood', 'SG'], ['Larry Nance Jr.', 'PF'],
      ['Jordan Clarkson', 'SG'], ['Cedi Osman', 'SF'], ['Ante Zizic', 'C'],
      ['Jose Calderon', 'PG'], ['Kendrick Perkins', 'C'], ['John Holland', 'SG']
    ]
  },
  {
    teamId: 'CLE', season: '2006-07', wins: 50, losses: 32, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Mike Brown',
    players: [
      ['LeBron James', 'SF', true], ['Zydrunas Ilgauskas', 'C'], ['Larry Hughes', 'SG'],
      ['Drew Gooden', 'PF'], ['Sasha Pavlovic', 'SG'], ['Anderson Varejao', 'PF'],
      ['Daniel Gibson', 'PG'], ['Donyell Marshall', 'PF'], ['Eric Snow', 'PG'],
      ['Damon Jones', 'PG'], ['Ira Newble', 'SF'], ['Shannon Brown', 'SG'],
      ['Scot Pollard', 'C'], ['Aleksandar Pavlovic', 'SG'], ['David Wesley', 'PG']
    ]
  },
  {
    teamId: 'DAL', season: '2005-06', wins: 60, losses: 22, playoffResult: 'League Finals',
    regularSeasonRank: 4, conferenceRank: 4, headCoach: 'Avery Johnson',
    players: [
      ['Dirk Nowitzki', 'PF', true], ['Jason Terry', 'SG', true], ['Josh Howard', 'SF'],
      ['Devin Harris', 'PG'], ['Erick Dampier', 'C'], ['Jerry Stackhouse', 'SG'],
      ['DeSagana Diop', 'C'], ['Adrian Griffin', 'SF'], ['Keith Van Horn', 'PF'],
      ['Marquis Daniels', 'SG'], ['Austin Croshere', 'PF'], ['Anthony Johnson', 'PG'],
      ['Rawle Marshall', 'SF'], ['Peja Drobnjak', 'C'], ['Alan Henderson', 'PF']
    ]
  },
  {
    teamId: 'PHX', season: '1975-76', wins: 42, losses: 40, playoffResult: 'League Finals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'John MacLeod',
    players: [
      ['Paul Westphal', 'SG', true], ['Alvan Adams', 'C', true], ['Walter Davis', 'SG'],
      ['Gar Heard', 'PF'], ['Keith Erickson', 'SF'], ['Ricky Sobers', 'PG'],
      ['Curtis Perry', 'PF'], ['Pat Riley', 'PG'], ['Mike Bantom', 'PF'],
      ['Dick Van Arsdale', 'SG'], ['Ron Lee', 'SG'], ['Dennis Awtrey', 'C'],
      ['Nate Hawthorne', 'SF'], ['John Shumate', 'PF'], ['Neal Walk', 'C']
    ]
  },
  {
    teamId: 'PHX', season: '1992-93', wins: 62, losses: 20, playoffResult: 'League Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Paul Westphal',
    players: [
      ['Charles Barkley', 'PF', true], ['Kevin Johnson', 'PG', true], ['Dan Majerle', 'SG'],
      ['Cedric Ceballos', 'SF'], ['Mark West', 'C'], ['Tom Chambers', 'PF'],
      ['Frank Johnson', 'PG'], ['Richard Dumas', 'SF'], ['Oliver Miller', 'C'],
      ['Danny Ainge', 'SG'], ['Jerrod Mustaf', 'PF'], ['Malcolm Mackey', 'PF'],
      ['Kurt Thomas', 'PF'], ['Tim Kempton', 'C'], ['Trevor Ruffin', 'PG']
    ]
  },
  {
    teamId: 'MIL', season: '1970-71', wins: 66, losses: 16, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Larry Costello',
    players: [
      ['Kareem Abdul-Jabbar', 'C', true], ['Oscar Robertson', 'PG', true], ['Bob Dandridge', 'SF'],
      ['Greg Smith', 'PF'], ['Lucius Allen', 'PG'], ['Jon McGlocklin', 'SG'],
      ['McCoy McLemore', 'SF'], ['Bob Boozer', 'PF'], ['Zaid Abdul-Aziz', 'PF'],
      ['Dick Cunningham', 'C'], ['Freddie Crawford', 'SG'], ['Gary Freeman', 'PG'],
      ['Marvin Winkler', 'SF'], ['Jeff Webb', 'SG'], ['Jim Barnett', 'SG']
    ]
  },
  {
    teamId: 'PHI', season: '1966-67', wins: 68, losses: 13, playoffResult: 'League Champions',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Alex Hannum',
    players: [
      ['Wilt Chamberlain', 'C', true], ['Hal Greer', 'SG', true], ['Chet Walker', 'SF'],
      ['Billy Cunningham', 'PF'], ['Wali Jones', 'PG'], ['Luke Jackson', 'PF'],
      ['Larry Costello', 'PG'], ['Bill Melchionni', 'PG'], ['Dave Gambee', 'PF'],
      ['Matt Guokas', 'PG'], ['Bob Weiss', 'PG'], ['Johnny Green', 'PF'],
      ['Lucious Jackson', 'C'], ['Ron Anderson', 'SF'], ['Jim Washington', 'PF']
    ]
  },
  {
    teamId: 'IND', season: '2003-04', wins: 61, losses: 21, playoffResult: 'Conference Finals',
    regularSeasonRank: 1, conferenceRank: 1, headCoach: 'Rick Carlisle',
    players: [
      ['Jermaine O\'Neal', 'PF', true], ['Reggie Miller', 'SG', true], ['Ron Artest', 'SF'],
      ['Jamaal Tinsley', 'PG'], ['Jeff Foster', 'C'], ['Al Harrington', 'PF'],
      ['Stephen Jackson', 'SF'], ['Austin Croshere', 'PF'], ['Jonathan Bender', 'SF'],
      ['Anthony Johnson', 'PG'], ['Scot Pollard', 'C'], ['Fred Jones', 'SG'],
      ['James Jones', 'SF'], ['Kenny Anderson', 'PG'], ['Primoz Brezec', 'C']
    ]
  },
  {
    teamId: 'NJN', season: '2003-04', wins: 47, losses: 35, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 3, conferenceRank: 3, headCoach: 'Lawrence Frank',
    players: [
      ['Jason Kidd', 'PG', true], ['Kenyon Martin', 'PF', true], ['Richard Jefferson', 'SF'],
      ['Kerry Kittles', 'SG'], ['Jason Collins', 'C'], ['Rodney Rogers', 'PF'],
      ['Lucious Harris', 'SG'], ['Alonzo Mourning', 'C'], ['Clifford Robinson', 'PF'],
      ['Tamar Slay', 'SG'], ['Brandon Armstrong', 'PG'], ['Zoran Planinic', 'PG'],
      ['Hubert Davis', 'SG'], ['Soumaila Samake', 'C'], ['Mikki Moore', 'C']
    ]
  },
  {
    teamId: 'LAC', season: '2019-20', wins: 49, losses: 23, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Doc Rivers',
    players: [
      ['Kawhi Leonard', 'SF', true], ['Paul George', 'SF', true], ['Lou Williams', 'SG'],
      ['Montrezl Harrell', 'PF'], ['Ivica Zubac', 'C'], ['Patrick Beverley', 'PG'],
      ['Landry Shamet', 'SG'], ['Marcus Morris', 'PF'], ['Reggie Jackson', 'PG'],
      ['JaMychal Green', 'PF'], ['Terance Mann', 'SG'], ['Rodney McGruder', 'SF'],
      ['Amir Coffey', 'SG'], ['Joakim Noah', 'C'], ['Patrick Patterson', 'PF']
    ]
  },
  {
    teamId: 'LAC', season: '2020-21', wins: 47, losses: 25, playoffResult: 'Conference Finals',
    regularSeasonRank: 4, conferenceRank: 4, headCoach: 'Tyronn Lue',
    players: [
      ['Paul George', 'SF', true], ['Kawhi Leonard', 'SF', true], ['Reggie Jackson', 'PG'],
      ['Marcus Morris', 'PF'], ['Ivica Zubac', 'C'], ['Nicolas Batum', 'SF'],
      ['Terance Mann', 'SG'], ['Luke Kennard', 'SG'], ['Rajon Rondo', 'PG'],
      ['Serge Ibaka', 'C'], ['Patrick Beverley', 'PG'], ['DeMarcus Cousins', 'C'],
      ['Amir Coffey', 'SG'], ['Yogi Ferrell', 'PG'], ['Daniel Oturu', 'C']
    ]
  },
  {
    teamId: 'MEM', season: '2010-11', wins: 46, losses: 36, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 8, conferenceRank: 8, headCoach: 'Lionel Hollins',
    players: [
      ['Zach Randolph', 'PF', true], ['Marc Gasol', 'C', true], ['Mike Conley', 'PG'],
      ['Rudy Gay', 'SF'], ['Tony Allen', 'SG'], ['O.J. Mayo', 'SG'],
      ['Shane Battier', 'SF'], ['Darrell Arthur', 'PF'], ['Greivis Vasquez', 'PG'],
      ['Xavier Henry', 'SG'], ['Hasheem Thabeet', 'C'], ['Sam Young', 'SF'],
      ['Hamed Haddadi', 'C'], ['DeMarre Carroll', 'SF'], ['Dante Cunningham', 'PF']
    ]
  },
  {
    teamId: 'DEN', season: '2008-09', wins: 54, losses: 28, playoffResult: 'Conference Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'George Karl',
    players: [
      ['Carmelo Anthony', 'SF', true], ['Chauncey Billups', 'PG', true], ['Kenyon Martin', 'PF'],
      ['Nene Hilario', 'C'], ['J.R. Smith', 'SG'], ['Linas Kleiza', 'SF'],
      ['Chris Andersen', 'C'], ['Dahntay Jones', 'SG'], ['Anthony Carter', 'PG'],
      ['Chucky Atkins', 'PG'], ['Johan Petro', 'C'], ['Renaldo Balkman', 'SF'],
      ['Jason Hart', 'PG'], ['Ruben Patterson', 'SF'], ['Cheikh Samb', 'C']
    ]
  },
  {
    teamId: 'NO', season: '2007-08', wins: 56, losses: 26, playoffResult: 'Conference Semifinals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Byron Scott',
    players: [
      ['Chris Paul', 'PG', true], ['David West', 'PF', true], ['Tyson Chandler', 'C'],
      ['Peja Stojakovic', 'SF'], ['Mo Peterson', 'SG'], ['Jannero Pargo', 'PG'],
      ['Melvin Ely', 'PF'], ['Ryan Bowen', 'SF'], ['Rasual Butler', 'SG'],
      ['Devin Brown', 'SG'], ['Hilton Armstrong', 'C'], ['Julian Wright', 'SF'],
      ['Cedric Simmons', 'PF'], ['Antonio Daniels', 'PG'], ['Marc Jackson', 'C']
    ]
  },
  {
    teamId: 'LAL', season: '2003-04', wins: 56, losses: 26, playoffResult: 'League Finals',
    regularSeasonRank: 2, conferenceRank: 2, headCoach: 'Phil Jackson',
    players: [
      ['Shaquille O\'Neal', 'C', true], ['Kobe Bryant', 'SG', true], ['Karl Malone', 'PF', true],
      ['Gary Payton', 'PG'], ['Derek Fisher', 'PG'], ['Devean George', 'SF'],
      ['Rick Fox', 'SF'], ['Horace Grant', 'PF'], ['Luke Walton', 'SF'],
      ['Bryon Russell', 'SF'], ['Kareem Rush', 'SG'], ['Slava Medvedenko', 'PF'],
      ['Brian Cook', 'PF'], ['Ime Udoka', 'SF'], ['Jannero Pargo', 'PG']
    ]
  },
  {
    teamId: 'DET', season: '2007-08', wins: 59, losses: 23, playoffResult: 'Conference Finals',
    regularSeasonRank: 2, conferenceRank: 1, headCoach: 'Flip Saunders',
    players: [
      ['Chauncey Billups', 'PG', true], ['Richard Hamilton', 'SG', true], ['Tayshaun Prince', 'SF'],
      ['Rasheed Wallace', 'PF', true], ['Antonio McDyess', 'PF'], ['Rodney Stuckey', 'PG'],
      ['Lindsey Hunter', 'PG'], ['Theo Ratliff', 'C'], ['Amir Johnson', 'PF'],
      ['Jarvis Hayes', 'SG'], ['Jason Maxiell', 'PF'], ['Arron Afflalo', 'SG'],
      ['Cheikh Samb', 'C'], ['Juan Dixon', 'SG'], ['Will Blalock', 'PG']
    ]
  },
  {
    teamId: 'BOS', season: '2011-12', wins: 39, losses: 27, playoffResult: 'Conference Finals',
    regularSeasonRank: 4, conferenceRank: 4, headCoach: 'Doc Rivers',
    players: [
      ['Paul Pierce', 'SF', true], ['Kevin Garnett', 'PF', true], ['Ray Allen', 'SG', true],
      ['Rajon Rondo', 'PG'], ['Brandon Bass', 'PF'], ['Avery Bradley', 'SG'],
      ['Mickael Pietrus', 'SF'], ['Greg Stiemsma', 'C'], ['Keyon Dooling', 'SG'],
      ['Marquis Daniels', 'SG'], ['Sasha Pavlovic', 'SF'], ['Ryan Hollins', 'C'],
      ['Chris Wilcox', 'PF'], ['Jermaine O\'Neal', 'C'], ['E\'Twaun Moore', 'SG']
    ]
  }
] as const;

// Type for adding new teams easily
export type CompactSeasonRecord = {
  teamId: string;
  season: string;
  wins: number;
  losses: number;
  playoffResult: string;
  regularSeasonRank: number;
  conferenceRank: number;
  headCoach: string;
  players: readonly CompactPlayer[];
};
