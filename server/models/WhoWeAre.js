const keystone = require('keystone');

const { Types } = keystone.Field;

const WhoWeAre = new keystone.List('WhoWeAre', {
  map: {name: 'title'},
  nocreate: true,
  nodelete: true,
});

WhoWeAre.add({
  title: {
    type:Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  image: {
    type: Types.CloudinaryImage,
    required: true,
    initial: true,
    singleImage: true,
  },
});

WhoWeAre.register();