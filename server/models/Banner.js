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
    initial: true,
    required: true,
  },

  image: {
    type: Types.CloudinaryImage,
    initial: true,
    required: true,
    singleImage: true,
  },

});

Banner.register();