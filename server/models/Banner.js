const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banners');

Banner.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  },
  subtitle: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  },
  appleLink: {
    type: Types.Url,
    required: true,
    initial: true,
    index: true
  },
  androidLink: {
    type: Types.Url,
    required: true,
    initial: true,
    index: true
  }
});

Banner.register();