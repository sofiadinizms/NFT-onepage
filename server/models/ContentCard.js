const keystone = require('keystone');

const { Types } = keystone.Field;

const ContentCard = new keystone.List('ContentCards', {
  map: {name: 'title'}
});

ContentCard.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  link: {
    type: Types.Url,
    required: true,
    initial: true,
  },
  text: {
    type: Types.Text,
    required: true,
    initial: true
  }
})

ContentCard.register();