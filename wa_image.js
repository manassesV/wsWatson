var VisualRegognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

var visualrecogniton = new VisualRegognitionV3({

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

