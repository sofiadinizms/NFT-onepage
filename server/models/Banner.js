const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banners', {
  map: {name: 'valueProposition'},
  nocreate: true,
  nodelete: true,});

Banner.add({
  valueProposition: {
    type: Types.Text,
    initial: true,
    required: true,
    index: true,
  },

  valuePropositionDescription: {
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

Banner.register();