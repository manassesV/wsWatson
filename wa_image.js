var VisualRegognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

var visualrecogniton = new VisualRegognitionV3({
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
    version: '2018-03-19',
    iam_apikey: '5dsxq78CNjD3HOHu9BU0VWBPNSJs-HuZCh7lvNTCgLP1',
    disable_ssl_verification: true
});

var params = {
    images_file: fs.createReadStream('download.jpg'),
    owners:['me'],
    threshold: 0,
};

visualrecogniton.classify(params).then(result =>{
    console.log(JSON.stringify(result, null, 2));
}).catch(err => {
    console.log(err);
})

