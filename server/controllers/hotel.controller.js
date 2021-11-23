const booking = require('../models/book.schema');
const contactSchema = require('../models/contact.schema');

exports.bookConference = async (req, res) => {
    try {
        
        const bookMeeting = new booking(req.body);
        await bookMeeting.save();
        
        console.log("Meeting booked");
        res.status(200).json({
            message: "Meeting successfully booked"
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error : err
        });
        console.log("Something went wrong", err);
    }
}

exports.contactus = async (req, res) => {
    try {
        const contact = new contactSchema(req.body);
        await contact.save();

        console.log("Contact us form submitted");
        res.status(200).json({
            message: "Contact us form submitted"
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error : err
        });
        console.log("Something went wrong", err);
    }
}
