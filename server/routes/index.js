const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Banner = keystone.list('Banners');

const Service = keystone.list('Services');
const Footer = keystone.list('Footers');

const OurClients = keystone.list('OurClients');
const OurBlog = keystone.list('OurBlog');
const ArticleCarousel = keystone.list('ArticleCarousel');
const WhoWeAre = keystone.list('WhoWeAre')

const mailServer = require('../MailServer/mailServer');
const dotenv = require('dotenv');
const createRouter = require('keystone/lib/core/createRouter');

const router = require('express').Router();
const mailController = require('../MailServer/mailController');

//router.route('/form').post(mailController);

//module.exports = router;

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/ourclients', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/ourblogs', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/articlecarousels', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/posts', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
	});
	
	app.get('/api/services', (req, res) => {
		Service.model.find((err, data) => {
			if (err) {
				res.status(500).send('DB Error');
			} else {
				res.send(data);
			}
		});
	});

	app.get('/api/footers', (req, res) => {
		Footer.model.find((err, data) => {
			if (err) {
				res.status(500).send('DB Error');
			} else {
				res.send(data);
			}
		});
	});


  app.get('/api/banners', (req, res) => {
    Banner.model.find((err, data) => {

      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  })
  
  app.get('/api/whoWeAre', (req, res) => {
    WhoWeAre.model.find((err, data) => {

      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('*', (req, res) => {
		res.redirect('/');
  });
  
  app.post('/api/contact', mailController);
};

