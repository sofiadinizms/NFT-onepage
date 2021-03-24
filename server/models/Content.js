const keystone = require('keystone');

const { Types } = keystone.Field;

const Content = new keystone.List('Content', {
  map: {name: 'title'},
  nocreate: true,
  nodelete: true,
});

Content.add({
  title: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    initial: true,
    required: true,
  },
  link: {
    type: Types.Url,
    initial: true,
    required: true,
  }
});

Content.register();