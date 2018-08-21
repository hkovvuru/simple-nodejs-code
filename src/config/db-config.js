import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/myDB');

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('Successfully connected to database');
});

export default mongoose;
