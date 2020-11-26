const keystone = require('keystone');

const { Types } = keystone.Field;

const ArticleCarousel = new keystone.List('ArticleCarousel');

ArticleCarousel.add({
  title: {
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
  link: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  }
});

ArticleCarousel.register();