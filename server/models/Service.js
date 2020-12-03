const Keystone = require('keystone');
const fields = require('keystone/lib/fieldTypes');
//const { Types } = require('keystone/lib/content');
const Types = Keystone.Field.Types;

const Service = new Keystone.List('Services', {
	map: {name: "title"},
	//nocreate: true,
	//nodelete: true,
});

Service.add({
	title: {
		type: Types.Text,
		required: true,
    initial: true,
		index: true,
	},
	image: {
    type: Types.CloudinaryImage,
		require: true,
		index: true,
		initial: true,
		singleImage: true,
	},
});
Service.register();