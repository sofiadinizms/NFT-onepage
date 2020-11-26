const Keystone = require('keystone');
//const { Types } = require('keystone/lib/content');
const Types = Keystone.Field.Types;

const Service = new Keystone.List('Services');

Service.add({
	title: {
		type: Types.Text,
		required: true,
    initial: true,
    index: true,
	},
	image: {
    type: Types.CloudinaryImages,
    require: true,
	}
});

Service.register();