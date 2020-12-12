const Keystone = require('keystone');
//const { Types } = require('keystone/lib/content');
const Types = Keystone.Field.Types;

const Footer = new Keystone.List('Footers', {
	map: {name: "address"},
	nocreate: true,
	nodelete: true,
});

Footer.add({	
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
	},
	instagram: {
		type: Types.Text,
		required: true,
		initial: true,
	}
});

Footer.register();