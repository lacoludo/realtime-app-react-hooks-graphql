const { AuthenticationError } = require('apollo-server');

const user = {
  _id: '7',
  name: 'Ludovic',
  email: 'lacoludo@outlook.com',
  picture: 'https://cloudinary.com/lacoludo'
};

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError('You must me logged in');
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
