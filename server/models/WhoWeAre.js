const keystone = require('keystone');

const { Types } = keystone.Field;

const WhoWeAre = new keystone.List('WhoWeAre', {
	map: {name: 'description'},
	nocreate: true,
	nodelete: true,
});

WhoWeAre.add({
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