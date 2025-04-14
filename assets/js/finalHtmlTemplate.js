function getFinalHtmlTemplate(title, lang, content, languageSnippets, analyticsOutput) {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="${lang}">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  </head>
  <body>
    <div style="width: 100% !important; max-width: 600px !important; margin: auto;">
      <table border="0" cellpadding="10" cellspacing="0" width="100%" class="contenidor">
        <tr>
          <td align="center" valign="top">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="contingut">
              <tr>
                <td align="center" valign="top"></td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <div class="block">
                    <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="header" style="min-width:350px">
                      <tbody>
                        <tr>
                          <td colspan="3" align="right">
                            <div style="height:70px; padding-right:5px; padding-bottom:15px; background-image:url(https://campus.uoc.edu/estudiant/_resources/img/mail/logoUOC_cap_mail.png); background-repeat:no-repeat;">
                              <p style="color:#000075; font-size:20px; font-family: Arial, Geneva, sans-serif; line-height:22px; padding-top:10px; margin:0 0 0 203px; text-align:left;">
                                <strong>${title}</strong>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="color: #000078; font-family: Arial, sans-serif; font-size: 16px; line-height: 145%; margin-top: 30px;">
                    <tr>
                      <td align="left" valign="top">
                        <div style="padding-bottom: 20px;">

${content}

                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td valign="top" height="18" align="center" style="background-color: #f0f0f0; background-image: url('https://campus.uoc.edu/UOC/a/img/mail/servei_informacio/blau_mari_4.gif'); background-repeat: repeat-x;">&nbsp;</td>
                      </tr>
                      <tr>
                        <td valign="top" align="left" style="line-height: 165%; font-family: Arial, sans-serif; color: #000078; font-size: 14px; padding: 0 20px 20px; background-color: #f0f0f0">
                          ${languageSnippets[lang]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    ${analyticsOutput}
      </body>
</html>`;
}
