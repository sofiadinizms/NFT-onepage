const keystone = require('keystone');

const { Types } = keystone.Field;

const BasicSections = new keystone.List('BasicSections', {
  map: {name: 'title'}
})

BasicSections.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index:true,
  },
  subtitle: {
    type: Types.Text,
    required: true,
    initial: true
  },
  text: {
    type: Types.Text,
    required: true,
    initial: true
  },
  image: {
    type: Types.CloudinaryImage,
    require: true,
    initial: true
  },
  orderImg:{
    type: Types.Number,
    require: true,
    initial: true
  },
  orderText:{
    type: Types.Number,
    require: true,
    initial: true
  },
  background: {
    type: Types.Text,
    require: true,
    initial: true
  }
});

BasicSections.register();