const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/kiet_pathshala');


// cat1 is the collection name 
const Cat = mongoose.model('Cat1', { name: String });

const kitty = new Cat({ name: 'Nitish Jha1' });
kitty.save().then(() => console.log('data saved in database'));