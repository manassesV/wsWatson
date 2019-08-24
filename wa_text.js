
var TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
var fs = require('fs');

var textToSpeech = new TextToSpeechV1({
 
    disable_ssl_verification: true
});

var params = {
    text: 'Letra A',
    voice: 'pt-BR_IsabelaVoice',
    accept: 'audio/wav'
};

textToSpeech.synthesize(params)
.then(audio =>{
    audio.pipe(fs.createWriteStream('saida.wav'));
}).catch(err => {
    console.log(err);
})
