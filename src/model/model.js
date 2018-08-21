import mongoose from '../config/db-config';

const userSchema = mongoose.Schema({
  userid: Number,
  name: String,
  age: Number,
  location: String,
});
const User = mongoose.model('user', userSchema);

export default User;
