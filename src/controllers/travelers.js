let travelerSchema = require('../models/travelers'),
    moment = require('moment');

module.exports.addTraveler = (req, res) => {
    let record = new travelerSchema({
        name: req.body.name,
        lastLocation: req.body.coordinate,
        createdAt: moment()
    });

    record.save().then(() => {
        res.status(200).json({message: 'Traveler Record Added'});
    }).catch((err) => {
        res.status(500).json({message: err});
    });
};

module.exports.getSummary = (req, res) => {
    travelerSchema.find({_id: req.params.id}, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: err});
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports.getLastLocation = (req, res) => {
    console.log(req.params.id);
    travelerSchema.find({_id: req.params.id}, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: err});
        } else {
            res.status(200).json(results.lastLocation);
        }
    });
};