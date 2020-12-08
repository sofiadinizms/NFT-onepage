const keystone = require('keystone');

const { Types } = keystone.Field;

const WhoWeAre = new keystone.List('WhoWeAre');

WhoWeAre.add({
  description: {
    type: Types.Text,
    initial: true,
    required: true,
  },
  image: {
    type: Types.CloudinaryImages,
    initial: true,
    required: true,
  },
});

WhoWeAre.register();