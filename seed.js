const { User, Show, UserShow } = require('./models/index');
const {sequelize} = require('./db');

// Seed data for users
const users = [
  {
    username: 'michael',
    password: 'password',
    email: 'michael@example.com',
    firstName: 'Michael',
    lastName: 'Scott'
  },
  {
    username: 'jim',
    password: 'password',
    email: 'jim@example.com',
    firstName: 'Jim',
    lastName: 'Halpert'
  },
  {
    username: 'pam',
    password: 'password',
    email: 'pam@example.com',
    firstName: 'Pam',
    lastName: 'Beesly'
  },
  {
    username: 'dwight',
    password: 'password',
    email: 'dwight@example.com',
    firstName: 'Dwight',
    lastName: 'Schrute'
  },
  {
    username: 'andy',
    password: 'password',
    email: 'andy@example.com',
    firstName: 'Andy',
    lastName: 'Bernard'
  }
];


// Seed data for shows
const shows = [
  {
    title: 'Game of Thrones',
    description: 'A TV show based on George R. R. Martin\'s A Song of Ice and Fire novels.',
    genre: 'Fantasy'
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    genre: 'Drama'
  },
  {
    title: 'Stranger Things',
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
    genre: 'Science fiction'
  },
  {
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    genre: 'Comedy'
  },
  {
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    genre: 'Drama'
  }
];

// Seed data for user-shows
const userShows = [
  { userId: 1, showId: 1, rating: 4, watched: true },
  { userId: 1, showId: 2, rating: 5, watched: true },
  { userId: 1, showId: 3, rating: 3, watched: false },
  { userId: 2, showId: 2, rating: 4, watched: true },
  { userId: 3, showId: 1, rating: 5, watched: true },
  { userId: 3, showId: 3, rating: 4, watched: true },
  { userId: 4, showId: 4, rating: 3, watched: false },
  { userId: 4, showId: 5, rating: 4, watched: true },
  { userId: 5, showId: 1, rating: 5, watched: true },
  { userId: 5, showId: 3, rating: 5, watched: true },
  { userId: 5, showId: 5, rating: 4, watched: true }
];

// Synchronize the database schema and seed data
async function seed() {
  await User.sync({ force: true });
  await Show.sync({ force: true });
  await UserShow.sync({ force: true });

  await Promise.all(users.map(user => User.create(user)));
  await Promise.all(shows.map(show => Show.create(show)));
  await Promise.all(userShows.map(userShow => UserShow.create(userShow)));
}

seed();