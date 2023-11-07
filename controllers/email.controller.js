import { createTransport } from "nodemailer";
import { env } from "../settings/envs.js"
const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "francary.programmer@gmail.com",
      pass: env.MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false // Esta línea deshabilita la validación del certificado que me da el error. Otra opcion es desactivar el antivirus AVAST
      }
  });

const ctrlEmail = async (req,res) => {

    try {
        const { destinatario , asunto , mensaje} = req.body;
        const response = await transporter.sendMail({
            from: "francary.programmer@gmail.com",
            to: destinatario,
            subject: asunto,
            text: mensaje,
        });
        console.log(response)
        res.send("E-mail enviado")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }


}

export{ctrlEmail}