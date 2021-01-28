const gamesMock = [{
  id: 2,
  title: 'Brawlhalla',
  genre: ['Action'],
  release: 2019,
  contentRating: '16+',
  platform: ['Nintendo Switch', 'PC', 'PS5'],
  cover: 'https://static.displate.com/857x1200/displate/2020-06-17/7014f73b75d6122881499c12ebdf2603_53513349e4da448a8d89a0da4847f239.jpg',
  description: 'Vestibulum ac est lacinia nisi venenatis tristique',
  videos: ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
  images: [''],
  company: 'Square Enix',
  players: '1-8',
  isOnline: true,
},
{
  _id: 3,
  title: 'Super Mario Bros. 3',
  genre: ['Platform'],
  release: { $numberInt: '1988' },
  contentRating: 'ESRB',
  platform: ['Nintendo Entertainment System', 'Super Nintendo Entertainment System', 'Nintendo Wii', 'Nintendo Wii U', 'Nintendo 3DS', 'Nintendo Switch'],
  cover: 'https://images-na.ssl-images-amazon.com/images/I/613Py5NEsSL._AC_SY741_.jpg',
  description: 'Vestibulum ac est lacinia nisi venenatis tristique',
  videos: ['https://mdstrm.com/video/58333e214ad055d208427db5.mp4'],
  images: ['https://www.lukiegames.com/assets/images/nes/nes_super_mario_brothers_3_p_il3vtp.jpg'],
  company: 'Nintendo',
  players: '1-2',
}];

const filteredGamesMock = (genre) => gamesMock.filter((game) => game.genre.includes(genre));

const gamesServiceMock = {
  async getGames() {
    return Promise.resolve(gamesMock);
  },

  async createGame() {
    return Promise.resolve(gamesMock[0]);
  },
};

module.exports = {
  gamesMock,
  filteredGamesMock,
  gamesServiceMock,
};
