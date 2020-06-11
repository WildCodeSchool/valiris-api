const nodemailer = require('nodemailer');

class mailer {
  static async sendMail (req, res) {
    const outputUser = `
      <p style="color: red">Bonjour, ${req.body.firstname}, </p>
      <p>nous avons bien pris en compte votre demande de réservation, nous vous recontacterons rapidement.</p>
      <p>Voici le récapitulatif de votre demande :</p>
      <ul>  
        <li>Date de début : ${req.body.startDate}</li>
        <li>Date de fin : ${req.body.endDate}</li>
        <li>Message : ${req.body.message}</li>
      </ul>
      <p>Cordialement, </p>
      <p>Valiris Résidence </p>
    `;
    const outputAdmin = `
    <p style="color: red">Bonjour, </p>
    <p>Vous avez reçu un message de la part de  ${req.body.firstname} ${req.body.lastname}</p>
    <p>Voici les détails de sa demande : </p>
    <ul>  
      <li>Date de début : ${req.body.startDate}</li>
      <li>Date de fin : ${req.body.endDate}</li>
      <li>téléphone : ${req.body.phone}</li>
      <li>email : ${req.body.email}</li>
      <li>Message : ${req.body.message}</li>
  
    </ul>
    <p>Cordialement, </p>
    <p> </p>
  `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptionsUser = {
      from: '"User" <vbouault@hotmail.fr>',
      to: 'testP3wcs@gmail.com',
      subject: 'Node Contact Request',
      text: 'Hello world?',
      html: outputUser
    };

    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        return res.status(420).send(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return res.sendStatus(200);
    });

    const mailOptionsAdmin = {
      from: '"Admin" <vbouault@hotmail.fr>',
      to: 'testP3wcs@gmail.com',
      subject: 'Node Contact Request',
      text: 'Hello world?',
      html: outputAdmin
    };

    transporter.sendMail(mailOptionsAdmin, (error, info) => {
      if (error) {
        return res.status(420).send(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return res.sendStatus(200);
    });
  }
}

module.exports = mailer;
