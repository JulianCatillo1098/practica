
 for (i=1;i<=100;i++) {
    let numero = ''
    if ( i%3 === 0) {
        numero += ('fizz')
    }
    if ( i%5 === 0) {
        numero += ('buzz')
    }
    if ( i%3 === 0 && i%5 === 0){
        numero += ('fizzbuzz')
    }
    console.log(numero || i)
}

    
 
 