var AWS = require('aws-sdk');  
 var s3 = new AWS.S3({ 
    accessKeyId:"",
    secretAccessKey:"",
    endpoint:"s3.ap-south-1.amazonaws.com",
    s3ForcePathStyle:true,
    apiVersion: '2006-03-01' });




var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.post('/test', async (req,res) => {
  
  


  console.log("started")
  var filename = req.body.name + ".html"
  var uploadParams = { Bucket: 'quill-template', Key: filename, Body: req.body.template };
  var result=s3.putObject(uploadParams).promise().then(()=>{
    console.log("success")
    return "Success"

  })  

  console.log("end")
  
  // writeNewObjectToS3(bucketName, pathKey, content) {
  //       var params = { Bucket: bucketName, Key: pathKey, Body: content };
  //       return this._s3.putObject(params).promise()
  //           .then(() => {
  //               return 'Success';
  //           });
  //   }

  


  return {

    body:result,
    value:filename,
  }
}


);
