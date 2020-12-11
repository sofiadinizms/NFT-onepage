const dotenv = require('dotenv').config({});
const mailServer = require('./mailServer');

module.exports = async (req, res, next) => {
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
}

