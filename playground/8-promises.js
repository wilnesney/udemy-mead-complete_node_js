// Compare with 4-callbacks-challenge.js

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('This is my error!');
        resolve([1, 4, 7]);
    }, 2000);
});

// Note: then() is only called when things go well/succeed. 

doWorkPromise
    .then((result) => {
        console.log('Success!', result);
    }).catch((error) => {
        console.log('Error!', error);
    })


/*                        fulfilled
                        /
Promise -- pending --> 
                        \
                          rejected
*/