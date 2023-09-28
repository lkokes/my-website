var express = require('express')
var nodemailer = require('nodemailer')
var app = express()
var port = 5000

function sendEmail() {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'myemail',
                pass: '-----'
            }
        })

        const mailConfigs = {
            from: 'myemail',
            to: 'email',
            subject: 'test subject',
            text: 'test text'
        }
            transporter.sendEmail(mailConfigs, function (error, info) {
                if (error) {
                    console.log(error)
                    return reject({message: 'An error has occured'})
                }
                return resolve({message: 'Email sent succesfully'})
        })
    })}
app.get('/', (req, res) => {
    sendEmail().then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message) )
})
app.listen(port, () => {
    console.log(`My website app is listening at http://localhost:${port}`)
})