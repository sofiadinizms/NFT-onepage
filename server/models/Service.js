const Keystone = require('keystone');
const fields = require('keystone/lib/fieldTypes');
//const { Types } = require('keystone/lib/content');
const Types = Keystone.Field.Types;

const Service = new Keystone.List('Services');

Service.add({
	name: {
		type: Types.Text,
		required: true,
    initial: true,
		index: true,
	},
	image: {
    type: Types.CloudinaryImages,
		require: true,
		index: true,
		initial: true,
		singleImage: true,
	},
});
Service.register();