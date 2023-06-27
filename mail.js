import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

const { EMAIL_HOST, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, EMAIL_PORT } = process.env

class Mail {
    #transport = null


    constructor() {
        this.#transporter = this.#getTransporter()
    }

    #getTransporter() {
        return nodemailer.createTransport({
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure: false,
            auth: {
                user: EMAIL_HOST_USER,
                pass: EMAIL_HOST_PASSWORD
            }
        })
    }

    async send(reciever, message) {
        try {
            const info = await this.#transporter.sendMail({
                from: reciever,
                to: "Nataliyarodionova26@gmail.com",
                subject: "Welcome to Test site",
                text: message,
                html: `<b>${message}</b>`
            })
            return info.messageId
        } catch (e) {
            return e
        }
    }
}

export default new Mail