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
  
  app.post('/api/contact', async (req, res, next) => {
    try {
      const { name, email, phone, subject, message } = req.body;
  
      const body = `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Assunto: ${subject}
        Mensagem: ${message}`;
  
      await mailServer({
        destinationUser: process.env.CLIENT_EMAIL,
        subjectText: subject,
        textOption: body,
      });
  
      res.status(200).send('Everything is alright');
    } catch (error) {
      res.status(500).send('Ops, something is wrong...');
      console.log(error);
    }
  })
};

