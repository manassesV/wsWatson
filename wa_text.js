
var TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
var fs = require('fs');

var textToSpeech = new TextToSpeechV1({
    url: 'https://stream.watsonplatform.net/text-to-speech/api',
    iam_apikey: 'H6ciGbcMflGzyKrLuNEAbqwlgwByDP2l6t4rBZ5q29LD',
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
