const keystone = require('keystone');

const { Types } = keystone.Field;

const OurBlog = new keystone.List('OurBlog');

OurBlog.add({
	title: {
		type: Types.Text,
		required: true,
		initial: true,
	},
	date: {
		type: Types.Text,

	},
  description: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
  },
  blogLink: {
    type: Types.Text,
    required: true,
    initial: true,
  }
});

OurBlog.register();