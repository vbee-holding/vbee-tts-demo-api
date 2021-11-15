const express = require("express");
const router = express.Router();

const VoiceController = require("../controllers/voice");

router.route("/voices").get(VoiceController.index);

router.route("/synthesis-techs").get(VoiceController.getSynthesisTech);

router.route("/tts").get(VoiceController.convertTTS);

module.exports = router;
