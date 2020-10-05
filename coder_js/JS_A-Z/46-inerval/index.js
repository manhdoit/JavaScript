// var i = 0;
// var intervalId = setInterval(function(){
//     ++i;
//     console.log(i);
//     if(i === 5) {
//         clearInterval(intervalId);
//     }
// }, 1000)


//write a function count 1 -> 10
// return a promise

    function countFrom(a, b) {
        return new Promise(function (resolve, reject) {
            var num = a;
            var intervalId = setInterval(function(){
                ++num;
                console.log(num);
                if(num > b){
                    clearInterval(intervalId);
                    resolve();
                }
            }, 1000)

        });

    }

countFrom(1,10)
    .then(function(){
        console.log('Done.')
    })
    .catch(function(error){
    console.log(error)
})


