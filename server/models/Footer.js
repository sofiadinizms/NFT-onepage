const keystone = require('keystone');

const {Types} = keystone.Field;

const Footer = new keystone.List('Footers');

Footer.add({
  socialMedia1: {
    type: Types.Url,
    required: true,
    initial: true,
    index: true
  },
  appleDownload: {
    type: Types.Url,
    required: true,
    initial: true,
    index: true
  },
  androidDownload: {
    type: Types.Url,
    required: true,
    initial: true,
    index: true
  },
  paragraph: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true
  }
});

Footer.register();