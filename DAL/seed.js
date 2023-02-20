const { User, Show, UserShow } = require('./models/index');
const {sequelize} = require('./db');

// Seed data for users
const users = [
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@example.com',
    firstName: 'John'
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@example.com',
    firstName: 'Jane'
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@example.com',
    firstName: 'Bob'
  },
  {
    username: 'user4',
    password: 'password4',
    email: 'user4@example.com',
    firstName: 'Alice'
  },
  {
    username: 'user5',
    password: 'password5',
    email: 'user5@example.com',
    firstName: 'David'
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