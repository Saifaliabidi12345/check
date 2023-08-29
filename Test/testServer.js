const  { expect} =  require ("chai");
const request = require ("request");
let url = 'http://localhost:3000/api/cat';
let cat =  {
title : '',
subTitle : '',
description : '',
path : ''
};

describe ('Test GET Api',function(){
    it('returns statusCode of 200', function(done){
        request(url,function(error,response,bodystring){
           // console.log(arguments);
            let bodyObj = JSON.parse(bodystring);// String to Object
            expect(bodyObj.statusCode).to.equal(200);
            expect(bodyObj.data).to.be.an('array');
            done();
        });

    });

});


describe('Test POST Api', function() {
    it('Post Cat to DB', function(done) {
        request.post({ url: url, form: cat }, function(error, response, bodystring) {
            let bodyObj = JSON.parse(bodystring);
            expect(bodyObj.message).to.equal('success'); 
            done();
        });
    });
   
});

describe('Test DELETE Api',function(){
    it ('Delete a Cat',function(done){
        request.delete({url:url,form:cat},function(error,response,bodystring){
            
            done();
        });
    });
});