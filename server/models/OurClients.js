const keystone = require('keystone');

const { Types } = keystone.Field;

const OurClients = new keystone.List('OurClients');

OurClients.add({
  name: {
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
  testimony: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true,
  }
});

OurClients.register();