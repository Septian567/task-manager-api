const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'Sdikamaulana08091999@outlook.com',
        pass: 'Septian@12345'
    }
});


const sendWelcomeEmail =  (email, name) => {
    transporter.sendMail({
        from: 'Sdikamaulana08091999@outlook.com',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
   
};

const sendCancelationEmail =  (email, name) => {
    transporter.sendMail({
        from: 'Sdikamaulana08091999@outlook.com',
        to: email,
        subject: 'Sorry, to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}

