const keystone = require('keystone');

const { Types } = keystone.Field;

const BasicSection = new keystone.List('BasicSections', {
  map: {name: 'title'}
})

BasicSection.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index:true,
  },
  subtitle: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  text: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  image: {
    type: Types.CloudinaryImage,
    initial: true,
  },
});

BasicSection.register();