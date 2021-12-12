const Voice = require("../models/Voice");

const getVoices = async (req, res) => {
    const voices = await Voice.find();
    return res.send({ status: 1, result: voices });
};

const getSynthesisTech = async (req, res) => {
    const synthesisTeches = await Voice.aggregate([{ $group: { _id: "$synthesisTech" } }]);
    return res.send({ status: 1, result: synthesisTeches });
};

const synthesize = async (req, res) => {
    return res.send({
        status: 1,
        result: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    });
};

module.exports = {
    getVoices,
    getSynthesisTech,
    synthesize,
};
