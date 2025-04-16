import Beneficiaries from '../models/Beneficiaries.js';
import Capitol from '../models/Capitol.js';
import nodemailer from 'nodemailer';

export const transferAllToCapitol = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'Missing userId'
      });
    }

    const beneficiaries = await Beneficiaries.findAll({ where: { userId } });

    if (!beneficiaries || beneficiaries.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No beneficiaries to transfer'
      });
    }

    const capitolData = beneficiaries.map(b => ({
      name: b.name,
      email: b.email,
      school: b.school,
      studentCode: b.studentCode,
      gcashNumber: b.gcashNumber,
      gcashName: b.gcashName,
      userId: b.userId
    }));

    await Capitol.bulkCreate(capitolData);
    await Beneficiaries.destroy({ where: { userId } });

    return res.status(200).json({
      success: true,
      message: 'Data transferred to Capitol successfully'
    });

  } catch (error) {
    console.error("Transfer error:", error);
    return res.status(500).json({
      success: false,
      message: 'Transfer failed',
      error: error.message
    });
  }
};

export const getScholars = async (req, res) => {
  try {
    const scholars = await Capitol.findAll();
    return res.status(200).json({ success: true, scholars });  // Ensure the data is in 'scholars' field
  } catch (error) {
    console.error("Get scholars error in capitolController:", error);
    return res.status(500).json({ success: false, message: "Error fetching scholars" });
  }
}

export const releaseScholarship = async (req, res) => {
  try {
    const scholars = await Capitol.findAll();

    if (!scholars.length) {
      return res.status(404).json({ success: false, message: 'No scholars to release' });z
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const sendEmails = scholars.map((scholar) => {
      const mailOptions = {
        from: `"Scholarship Office" <${process.env.EMAIL_USER}>`,
        to: scholar.email,
        subject: "Scholarship Assistance Released",
        html: `
          <p><img src="https://drive.google.com/uc?export=view&id=1uZyFwSCViUtEH7pcMbYK1lotMcEoTUB8" width="120" /></p>
          <p>Dear <strong>${scholar.name}</strong>,</p>
          <p>We are pleased to inform you that your <strong>scholarship assistance</strong> has been successfully released.</p>
          <p>Kindly check your GCash account (${scholar.gcashNumber}) registered under the name <strong>${scholar.gcashName}</strong>.</p>
          <p>If problems persist contact your barangay coordinator</p>
          <br/>
          <p>Thank you and keep striving for excellence!</p>
          <p>- Scholarship Office</p>
        `
      };
      return transporter.sendMail(mailOptions);
    });

    await Promise.all(sendEmails);
    await Capitol.destroy({where: {}});

    console.log("Sent all the emails and all records are destroyed");
    res.status(200).json({
      success: true,
      message: `Emails sent to ${scholars.length} scholars`
    });

  } catch (error) {
    console.error("Error sending scholarship emails:", error);
    res.status(500).json({
      success: false,
      message: "Error sending scholarship - error in capitolController",
      error: error.message
    });
  }
};
