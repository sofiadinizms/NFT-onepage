const keystone = require('keystone');

const { Types } = keystone.Field;

const ArticleCarousel = new keystone.List('ArticleCarousel', {
	map: {name: 'title'},
  nocreate: true,
  nodelete: true,
});

ArticleCarousel.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImage,
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