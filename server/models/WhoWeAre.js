const keystone = require('keystone');

const { Types } = keystone.Field;

const WhoWeAre = new keystone.List('WhoWeAre', {
	map: {name: 'description'},
	
});

WhoWeAre.add({
  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  image: {
    type: Types.CloudinaryImage,
    required: true,
    initial: true,
  },
});

WhoWeAre.register();