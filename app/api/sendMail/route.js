import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.get("origin");
  if (!allowedOrigins.includes(origin)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const requiredFields = ["name", "mail", "phone", "message"];
  for (const field of requiredFields) {
    if (!body[field]) {
      return new Response("Bad Request", { status: 400 });
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      name: "no-reply@woltecnologia.com.br",
      host: "mail.woltecnologia.com.br",
      service: "mail.woltecnologia.com.br",
      port: 465,
      secure: true,
      auth: {
        user: "formulario@woltecnologia.com.br",
        pass: "sC-og1$v1pVC",
      },
    });
    transporter.sendMail({
      from: `"Contato ADOM Metalúrgica" <formulario@woltecnologia.com.br>`,
      to: "desenvolvimento@wolmkt.com.br",
      replyTo: body.email,
      subject: "Pedido Orçamento",
      text: body.message,
      html: `
                <html lang="pt-BR">
                  <head>
                      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                      <title>Contato</title>
                      <meta name="description" content="Contato">
                      <style type="text/css">
                        a:hover {text-decoration: underline !important;}
                      </style>
                  </head>
                  
                  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
                    <!--100% body table-->
                    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700%7COpen+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                      <tr>
                        <td>
                          <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="height:100px;">&nbsp;</td>
                            </tr>
                            
                            <tr>
                              <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                  <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style="padding:0 35px;">
                                      <h1 style="color:#455056; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                        E-mail de Contato
                                      </h1>
                                      <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>     
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"><strong>Nome:</strong> ${body.name}</p>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"><strong>E-mail:</strong> ${body.mail}</p>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"><strong>Celular:</strong> ${body.phone}</p>
                                      <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"><strong>Mensagem:</strong> ${body.message}</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>

                            <tr>
                              <td style="height:100px;">&nbsp;</td>
                            </tr>

                          </table>
                        </td>
                      </tr>
                    </table>
                    <!--/100% body table-->
                  </body>
                  
                </html>
            `,
    });
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
