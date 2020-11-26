const keystone = require('keystone');

const { Types } = keystone.Field;

const OurClients = new keystone.List('OurClients');

OurClients.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  picture: {
    type: Types.CloudinaryImages,
    require: true,
  },
  testimony: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

OurClients.register();