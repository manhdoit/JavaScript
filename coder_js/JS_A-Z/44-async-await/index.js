var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject){
       fs.readFile(path, {encoding: 'utf8'}, function(err, data){
           if(err) {
               reject (err);
           } else {
               resolve (data);
           }
       });
    });
}

function countUp(a, b) {
    var num = a;
    var intervalId = setInterval(function(){
        ++num;
        console.log(num);
        if(num > b){
            clearInterval(intervalId);
        }
    }, 200)
    return num
}

async function main() {
    const abc = await countUp(1, 10)
    console.log(abc ? "Done" : "Fail")
}

main()