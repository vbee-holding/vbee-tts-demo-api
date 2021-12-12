const express = require("express");
const router = express.Router();

const VoiceController = require("../controllers/voice");

router.route("/voices").get(VoiceController.getVoices);

router.route("/synthesis-techs").get(VoiceController.getSynthesisTech);

router.route("/synthesis").get(VoiceController.synthesize);

module.exports = router;
