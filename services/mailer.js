const nodemailer = require('nodemailer');

class mailer {
  static async sendMail (body, lang) {
    let outputUser;
    if (lang === 'en') {
      outputUser = `
      <p style="color: red">Hello ${body.firstname}, </p>
      <p>we have taken your booking request into account, we will get back to you quickly.</p>
      <p>Here is the summary of your request :</p>
      <ul>  
        <li>Start date : ${body.startDate}</li>
        <li>End date : ${body.endDate}</li>
        <li>Message : ${body.message}</li>
      </ul>
      <p>Valiris Résidence </p>
    `;
    } else {
      outputUser = `
      <p style="color: red">Bonjour ${body.firstname}, </p>
      <p>nous avons bien pris en compte votre demande de réservation, nous vous recontacterons rapidement.</p>
      <p>Voici le récapitulatif de votre demande :</p>
      <ul>  
        <li>Date de début : ${body.startDate}</li>
        <li>Date de fin: ${body.endDate}</li>
        <li>Message : ${body.message}</li>
      </ul>
      <p>Cordialement, </p>
      <p>Valiris Résidence </p>
    `;
    }
    const outputAdmin = `
    <p style="color: red">Bonjour, </p>
    <p>Vous avez reçu un message de la part de  ${body.firstname} ${body.lastname}</p>
    <p>Voici les détails de sa demande : </p>
    <ul>  
      <li>Date de début : ${body.startDate}</li>
      <li>Date de fin : ${body.endDate}</li>
      <li>téléphone : ${body.phone}</li>
      <li>email : ${body.email}</li>
      <li>Message : ${body.message}</li>
  
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

    const mailOptionsAdmin = {
      from: '"Admin" <vbouault@hotmail.fr>',
      to: 'testP3wcs@gmail.com',
      subject: 'Node Contact Request',
      text: 'Hello world?',
      html: outputAdmin
    };

    const sendMailPromisified = (option) => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(option, (error, info) => {
          if (error) {
            reject(error);
          }
          resolve();
        });
      });
    };

    return Promise.all([sendMailPromisified(mailOptionsUser), sendMailPromisified(mailOptionsAdmin)]);
  }
}

module.exports = mailer;
