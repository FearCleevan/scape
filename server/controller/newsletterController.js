const Subscriber = require('./models/Subscriber');
const { sendVerificationEmail, sendNewsletterEmail } = require('../utils/emailService');
const crypto = require('crypto');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.isVerified) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      }
    }

    const unsubscribeToken = crypto.randomBytes(20).toString('hex');
    
    const subscriber = existingSubscriber 
      ? await Subscriber.findByIdAndUpdate(existingSubscriber._id, { unsubscribeToken }, { new: true })
      : await Subscriber.create({ email, unsubscribeToken });

    await sendVerificationEmail(email, unsubscribeToken);

    res.status(200).json({ message: 'Verification email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.verify = async (req, res) => {
  try {
    const { token, email } = req.query;
    
    const subscriber = await Subscriber.findOne({ email, unsubscribeToken: token });
    
    if (!subscriber) {
      return res.status(400).json({ error: 'Invalid verification link' });
    }
    
    if (subscriber.isVerified) {
      return res.status(400).json({ error: 'Email is already verified' });
    }
    
    subscriber.isVerified = true;
    await subscriber.save();
    
    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const { token, email } = req.query;
    
    const subscriber = await Subscriber.findOneAndDelete({ email, unsubscribeToken: token });
    
    if (!subscriber) {
      return res.status(400).json({ error: 'Invalid unsubscribe link' });
    }
    
    res.status(200).json({ message: 'Successfully unsubscribed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.sendNewsletter = async (req, res) => {
  try {
    const { subject, content } = req.body;
    
    const subscribers = await Subscriber.find({ isVerified: true });
    
    for (const subscriber of subscribers) {
      await sendNewsletterEmail(
        subscriber.email, 
        subscriber.unsubscribeToken, 
        subject, 
        content
      );
    }
    
    res.status(200).json({ message: 'Newsletter sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};