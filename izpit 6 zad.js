function multiplyTable (input){
    let num = Number(input[0]);
    let first = num % 10;
    let a = num - first;
    let b = a /10;
    let second = b % 10;
    let c = b - second
    let third = c / 10
    for(let x = 1 ; x <= first;x++){
        for(let y = 1 ; y <= second;y++){
            for(let z = 1; z <= third;z++){
                console.log(`${x} * ${y} * ${z} = ${x * y * z};`);
            }
        }
    }
}
multiplyTable(["324"])