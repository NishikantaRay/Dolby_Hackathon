const booking = require('../models/book.schema');
const contactSchema = require('../models/contact.schema');
const qs = require('qs');
const axios = require('axios');

exports.bookConference = async (req, res) => {
    try {
        
        const bookMeeting = new booking(req.body);
        await bookMeeting.save();
        var dsend = "New booking confirmed for "+ req.body.name + " on " + req.body.date + " at " + req.body.time + "<br>Contact Details - Tel : " + req.body.phone + " Email : " + req.body.email + "<br>";
        console.log("Meeting booked");
        await axios.post('http://sumeetweb-xyz.stackstaging.com/mailer.php', qs.stringify(
                { 
                    'rname': 'RoamRooms',
                    'sendto': 'studytub1@gmail.com',
                    'data': dsend
                }
            ));

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
