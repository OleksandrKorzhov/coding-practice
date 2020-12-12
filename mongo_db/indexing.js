const mongoose = require('mongoose');

const DB_NAME = 'mongoDB';

const User = mongoose.model('user', new mongoose.Schema({
  name: String,
  age: Number,
}));

;(async () => {
  await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

  console.log('Start collection creating');

  for (let i = 0; i < 20000; i++) {
    await User.create({
      name: `user_${i}`,
      age: i
    });
  }

  console.log('Collection created and filled');
})();