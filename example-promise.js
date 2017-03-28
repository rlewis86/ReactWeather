// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Barberton', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('City Not Found');
//     });
// }

// getTempPromise('Barberton').then(function (temp) {
//     console.log('promise success', temp);
// },
//     function (err) {
//         console.log('promise err', err);
//     });

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b)
        }
        reject('You must enter numbers')
    });
}

addPromise('n',7).then(function(equals){
    console.log(equals)
}, function(err){
    console.log(err);
});

