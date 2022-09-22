const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000)
    })
}

// ---------Without Promise Chaining----------
add(1, 2).then((sum) => {
    console.log(sum);
    add(sum, 4).then((sum2) => {
        console.log(sum2);
    }).catch((e) => {
        console.error(e);
    });
}).catch((e) => {
    console.error(e);
})

// ---------With Promise Chaining----------
add(1, 2).then((sum) => {
    console.log(sum);
    return add(sum, 4); // To chain, return a Promise
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {       // One catch works for all chained 'then's
    console.error(e);
})