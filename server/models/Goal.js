const keystone = require('keystone');

const { Types } = keystone.Field;

const Goal = new keystone.List('Goals', {
  map: {name: 'title'}
})

Goal.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index:true,
  }
});

Goal.register();