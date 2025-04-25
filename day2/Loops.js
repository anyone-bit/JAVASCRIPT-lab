//for-loop:
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

//while-loop:(Entry level)
let j = 1;
while(j < 10) {
    console.log(j);
    j++;
}

//do-while loop:(Exist level)
let k = 1;
do {
    console.log(k);
    k++;
} while(k < 5);

//break
for (let i = 1; i < 5; i++) {
    if (i == 3) break;
    console.log(i);
}

//continue
for (let i = 10; i < 20; i++) {
    if (i == 15) continue;
    console.log(i);
}