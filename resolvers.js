const user = {
  _id: '7',
  name: 'Ludovic',
  email: 'lacoludo@outlook.com',
  picture: 'https://cloudinary.com/lacoludo'
};

module.exports = {
  Query: {
    me: () => user
  }
};
