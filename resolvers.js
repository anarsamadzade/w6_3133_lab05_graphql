const User = require("./models/User"); // ✅ Ensure correct import

const resolvers = {
  Query: {
    users: async () => await User.find({}),  // ✅ Fix User.find()
    user: async (parent, args) => await User.findById(args.id),
  },
  Mutation: {
    addUser: async (parent, { name, age, email, address }) => {
      const newUser = new User({ name, age, email, address });
      return await newUser.save();
    },
  },
};

module.exports = resolvers;
