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
		initial: true,
    required: true,
  },
  image: {
		type: Types.CloudinaryImage,
		initial: true,
    required: true,
  },
});

WhoWeAre.register();