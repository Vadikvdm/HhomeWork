//////////// Розумію що не відповідає умові. 

function getRandomChinese(length) {
    const promise = new Promise((res) => {
        const newArr = [];
        let i = 0;
        do {
            setTimeout(() => {
                const symbol = String.fromCharCode(Date.now().toString().slice(-5));
                newArr.push(symbol) 
            }, i * 50);
            i++;
        } while (i < length); 
        res([newArr]);
    })
    promise.then((respon) => {
        console.log(respon);
    })
}
getRandomChinese(5);
