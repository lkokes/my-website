require('dotenv').config();
var express = require('express');
var nodemailer = require('nodemailer');
const cors = require('cors'); 
var app = express();
var port = 5000;

app.use(express.json());
app.use(cors());

function sendEmail(emailData) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.APP_PASSWORD
            }
        });

        const mailConfigs = {
            from: 'my website',
            to: process.env.MY_EMAIL,
            subject: 'Správa z kontaktného formulára',
            text: `
            Odosielateľ: ${emailData.name}
            Email odosielateľa: ${emailData.email}
            Správa: ${emailData.message}`
        };

        transporter.sendMail(mailConfigs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: 'An error has occurred' });
            }
            return resolve({ message: 'Email sent successfully' });
        });
    });
}

app.post('/send-email', (req, res) => {
    const emailData = req.body;
    sendEmail(emailData)
    .then(response => res.send(response.message))
    .catch(error => {
        console.error(error);
        res.status(500).send(error.message);
    });
});

app.listen(port, () => {
    console.log(`My website app is listening at http://localhost:${port}`);
});