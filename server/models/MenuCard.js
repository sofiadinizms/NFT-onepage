const keystone = require('keystone');

const { Types } = keystone.Field;

const MenuCard = new keystone.List('MenuCards', {
  map: {name: 'title'}
});

MenuCard.add({
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

MenuCard.register();