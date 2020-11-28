const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banners');

Banner.add({
  valueProposition: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },

  valuePropositionDescription: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },

  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
    index: true,
  },
});

Banner.register();