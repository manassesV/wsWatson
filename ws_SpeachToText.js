
var SpeechToText = require('ibm-watson/speech-to-text/v1');
var fs = require('fs');

var textToSpeech = new SpeechToText({
    disable_ssl_verification: true
});

var params = {
    audio: fs.createReadStream('saida.wav'),
    content_type: 'audio/wav',
    word_alternatives_threshold:0.9,
    keywords: ['fiap', 'bom dia', 'alunos'],
    keywords_threshold: 0.5,
    model: 'pt-BR_BroadbandModel'
};

textToSpeech.recognize(params)
.then(results =>{
    console.log(JSON.stringify(results, null, 2));
}).catch(err => {
    console.log(err);
})
