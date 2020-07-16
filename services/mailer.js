const nodemailer = require('nodemailer');
const moment = require('moment');
class mailer {
  static async sendMail (body, lang) {
    const outputUser = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <head> 
        <meta charset="UTF-8"> 
        <meta content="width=device-width, initial-scale=1" name="viewport"> 
        <meta name="x-apple-disable-message-reformatting"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta content="telephone=no" name="format-detection"> 
        <title>New email</title> 
        <!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]--> 
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
        <!--[if gte mso 9]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]--> 
        <!--[if !mso]><!-- --> 
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> 
        <!--<![endif]--> 
        <style type="text/css">
      @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:14px!important; line-height:150%!important } h1 { font-size:26px!important; text-align:center; line-height:120%!important } h2 { font-size:24px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:26px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:13px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:13px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:11px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
      #outlook a {
        padding:0;
      }
      .ExternalClass {
        width:100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height:100%;
      }
      .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
      }
      .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
      }
      .es-button-border:hover a.es-button {
        background:#3498!important;
        border-color:#3498db!important;
      }
      .es-button-border:hover {
        border-color:#1f68b1 #1f68b1 #1f68b1 #1f68b1!important;
        background:#3498db!important;
      }
      td .es-button-border:hover a.es-button-1 {
        background:#2980d9!important;
        border-color:#2980d9!important;
      }
      td .es-button-border-2:hover {
        background:#2980d9!important;
      }
      </style> 
       </head> 
       <body style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
        <div class="es-wrapper-color" style="background-color:#319797"> 
         <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#319797"></v:fill>
            </v:background>
          <![endif]--> 
         <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
           <tr style="border-collapse:collapse"> 
            <td valign="top" style="padding:0;Margin:0"> 
             <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
               <tr style="border-collapse:collapse"> 
                <td align="center" style="padding:0;Margin:0"> 
                 <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
                   <tr style="border-collapse:collapse"> 
                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td align="center" style="padding:15px;Margin:0;font-size:0px"><img class="adapt-img" src="https://hryxwt.stripocdn.email/content/guids/CABINET_8b1d9add23349ee2cf1ac00cfcd56b91/images/37471594277916319.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="133"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#FFFFFF" bgcolor="#ffffff" align="left"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom;background-color:transparent" width="100%" cellspacing="0" cellpadding="0" bgcolor="transparent" role="presentation"> 
                           <tr style="border-collapse:collapse"> 
                            <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#319797">${lang === 'en' ? 'Hello' : 'Bonjour'} ${body.firstname},</h3></td> 
                           </tr> 
                           <tr style="border-collapse:collapse"> 
                            <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">${lang === 'en' ? 'We have taken your request into account. We will get back to you very quickly.' : 'Nous avons bien pris en compte votre demande, nous vous recontacterons rapidement.'}</p></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td style="padding:0;Margin:0;background-position:center bottom" align="left"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#FFFFFF;border-radius:0px 0px 5px 5px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                           <tr style="border-collapse:collapse"> 
                            <td height="15" align="center" style="padding:0;Margin:0"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom" align="left"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td height="10" align="center" style="padding:0;Margin:0"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td style="padding:0;Margin:0;background-position:center bottom" align="left"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                         <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#FFFFFF;border-radius:5px 5px 0px 0px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                           <tr style="border-collapse:collapse"> 
                            <td height="16" align="center" style="padding:0;Margin:0"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                   <tr style="border-collapse:collapse"> 
                    <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom;background-color:#FFFFFF" bgcolor="#ffffff" align="left"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#666666">${lang === 'en' ? 'Here is he summary of your request' : 'Voici le récapitulatif de votre demande:'}</p></td> 
                           </tr>
                           <br> 
                           <tr style="border-collapse:collapse"> 
                            <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-left:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:30px;color:#666666"><strong>
                            ${body.startDate
                                ? lang === 'en'
                                  ? `<span style='color:#319797'>Starting date:</span> ${moment(body.startDate).format('DD/MM/YYYY')}<br><span style='color:#319797'>Ending date:</span> ${moment(body.endDate).format('DD/MM/YYYY')}`
                                  : `<span style='color:#319797'>Date de début:</span> ${moment(body.startDate).format('DD/MM/YYYY')}<br><span style='color:#319797'>Date de fin:</span> ${moment(body.endDate).format('DD/MM/YYYY')}`
                                  : ''}
                                <br><span style='color:#319797'>Message:</span><br> ${body.message}
                                </strong><br><br>${lang === 'en' ? 'Regards, ' : 'Cordialement, '}<strong><span style="font-size:16px;color:#319797"><br>Valiris Résidence</span></strong></p><br><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#2980D9"><br></p></td> 
                           </tr> 
                         </table></td> 
                       </tr>  
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table> 
             <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
               <tr style="border-collapse:collapse"> 
                <td align="center" style="padding:0;Margin:0"> 
                 <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"> 
                   <tr style="border-collapse:collapse"> 
                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                     <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]--> 
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:360px"> 
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#EFEFEF">${lang === 'en' ? 'Adress' : 'Adresse'} :&nbsp;470 Route de Saint Didier 69760 Limonest<br>${lang === 'en' ? 'Phone : ' : 'Téléphone : '}06 00 00 00 00<br>Email : valiris-residence@gmail.com</p></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table> 
                     <!--[if mso]></td><td style="width:20px"></td><td style="width:180px" valign="top"><![endif]--> 
                     <table cellpadding="0" cellspacing="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="left" style="padding:0;Margin:0;width:180px"> 
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"> 
                             <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                               <tr style="border-collapse:collapse"> 
                                <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Facebook" src="https://hryxwt.stripocdn.email/content/assets/img/social-icons/rounded-white/facebook-rounded-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                                <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://youtube.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Youtube" src="https://hryxwt.stripocdn.email/content/assets/img/social-icons/rounded-white/youtube-rounded-white.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                               </tr> 
                             </table></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table> 
                     <!--[if mso]></td></tr></table><![endif]--></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
        </div>  
       </body>
      </html>      
    `;

    const outputAdmin = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <head> 
      <meta charset="UTF-8"> 
      <meta content="width=device-width, initial-scale=1" name="viewport"> 
      <meta name="x-apple-disable-message-reformatting"> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
      <meta content="telephone=no" name="format-detection"> 
      <title>New email</title> 
      <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]--> 
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
      <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]--> 
      <!--[if !mso]><!-- --> 
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> 
      <!--<![endif]--> 
      <style type="text/css">
    @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:14px!important; line-height:150%!important } h1 { font-size:26px!important; text-align:center; line-height:120%!important } h2 { font-size:24px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:26px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:13px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:13px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:13px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:11px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
    #outlook a {
      padding:0;
    }
    .ExternalClass {
      width:100%;
    }
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height:100%;
    }
    .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    .es-button-border:hover a.es-button {
      background:#3498db!important;
      border-color:#3498db!important;
    }
    .es-button-border:hover {
      border-color:#1f68b1 #1f68b1 #1f68b1 #1f68b1!important;
      background:#3498db!important;
    }
    td .es-button-border:hover a.es-button-1 {
      background:#2980d9!important;
      border-color:#2980d9!important;
    }
    td .es-button-border-2:hover {
      background:#2980d9!important;
    }
    </style> 
     </head> 
     <body style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
      <div class="es-wrapper-color" style="background-color:#319797"> 
       <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#319797"></v:fill>
          </v:background>
        <![endif]--> 
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
         <tr style="border-collapse:collapse"> 
          <td valign="top" style="padding:0;Margin:0"> 
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
             <tr style="border-collapse:collapse"> 
              <td align="center" style="padding:0;Margin:0"> 
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="center" style="padding:15px;Margin:0;font-size:0px"><img class="adapt-img" src="https://hryxwt.stripocdn.email/content/guids/CABINET_8b1d9add23349ee2cf1ac00cfcd56b91/images/37471594277916319.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="133"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#FFFFFF" bgcolor="#ffffff" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                       <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom;background-color:transparent" width="100%" cellspacing="0" cellpadding="0" bgcolor="transparent" role="presentation"> 
                         <tr style="border-collapse:collapse"> 
                          <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#319797">Bonjour,</h3></td> 
                         </tr> 
                         <tr style="border-collapse:collapse"> 
                          <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">Vous avez reçu un message de la part de  ${body.firstname} ${body.lastname}</p></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;background-position:center bottom" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                       <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#FFFFFF;border-radius:0px 0px 5px 5px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                         <tr style="border-collapse:collapse"> 
                          <td height="15" align="center" style="padding:0;Margin:0"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td height="10" align="center" style="padding:0;Margin:0"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;background-position:center bottom" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                       <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#FFFFFF;border-radius:5px 5px 0px 0px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                         <tr style="border-collapse:collapse"> 
                          <td height="16" align="center" style="padding:0;Margin:0"></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
                 <tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom;background-color:#FFFFFF" bgcolor="#ffffff" align="left"> 
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#666666">Voici les détails de sa demande :</p></td> 
                         </tr>
                         <tr style="border-collapse:collapse"> 
                          <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-left:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:30px;color:#666666"><strong>
                          ${body.startDate ? `<span style='color:#319797'>Date de début :</span> ${moment(body.startDate).format('DD/MM/YYYY')}<br><span style='color:#319797'>Date&nbsp;de&nbsp;fin :</span> ${moment(body.endDate).format('DD/MM/YYYY')}` : ''}<br><span style='color:#319797'>Téléphone :</span> ${body.phone}<br><span style='color:#319797'>Email :</span> ${body.email}<br><span style='color:#319797'>Message :</span> ${body.message}</strong><br><br>Cordialement,<br><strong><span style="font-size:19px;color:#319797">Valiris Résidence</span></strong></p><br><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:28px;color:#2980D9"><br></p></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table> 
           <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
             <tr style="border-collapse:collapse"> 
              <td align="center" style="padding:0;Margin:0"> 
               <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
                   <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:360px" valign="top"><![endif]--> 
                   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:360px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#EFEFEF">Adresse :&nbsp;470 Route de Saint Didier 69760 Limonest<br>Téléphone : 06 00 00 00 00<br>Email : valiris-residence@gmail.com</p></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <!--[if mso]></td><td style="width:20px"></td><td style="width:180px" valign="top"><![endif]--> 
                   <table cellpadding="0" cellspacing="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;width:180px"> 
                       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"> 
                           <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Facebook" src="https://hryxwt.stripocdn.email/content/assets/img/social-icons/rounded-white/facebook-rounded-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                              <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://youtube.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Youtube" src="https://hryxwt.stripocdn.email/content/assets/img/social-icons/rounded-white/youtube-rounded-white.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                   </table> 
                   <!--[if mso]></td></tr></table><![endif]--></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table> 
      </div>  
     </body>
    </html>
  `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptionsUser = {
      from: `"Valiris Résidence" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Valiris Résidence - ${lang === 'en' ? 'Summary of your request' : 'Récapitulatif de votre demande'}`,
      html: outputUser
    };

    const mailOptionsAdmin = {
      from: `"Valiris Résidence" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: 'Prise de contact - Valiris Résidence',
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

    if (process.env.NODE_ENV !== 'test') {
      return Promise.all([sendMailPromisified(mailOptionsUser), sendMailPromisified(mailOptionsAdmin)]);
    }
  }
}

module.exports = mailer;
