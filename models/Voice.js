const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoiceSchema = new Schema({
    key: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    domainTts: {
        type: String,
        required: true,
    },
    synthesisTech: {
        type: String,
        required: true,
    },
});

const Voice = mongoose.model("voice", VoiceSchema);

module.exports = Voice;
