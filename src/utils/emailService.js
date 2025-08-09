import nodemailer from "nodemailer";

export const emailService = async (email, otp) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "amirikromov30@gmail.com",
            pass: "hjhankgyyovcdlwj"
        }
    });

    await transport.sendMail({
        from: "amirikromov30@gmail.com",
        to: email,
        subject: "Just for test",
        text: `New OTP - ${otp}`
    });
};