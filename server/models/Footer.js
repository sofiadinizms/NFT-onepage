const Keystone = require('keystone');
const { Types } = require('keystone/lib/content');
const Types = Keystone.Field.Types;

const Footer = new Keystone.List('Footers');

Footer.add({
	link: {
		type: Types.Url,
		required: true,
		initial: true,
	},
	address: {
		type: Types.Text,
		required: true,
		initial: true,
		multiline: true,
	},
	phone: {
		type: Types.Text,
		required: true,
		initial: true,
	}
});

Footer.register();