const keystone = require('keystone');

const { Types } = keystone.Field;

const OurBlog = new keystone.List('OurBlog');

OurBlog.add({
  description: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
    initial: true,
  },
  blogLink: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

OurBlog.register();