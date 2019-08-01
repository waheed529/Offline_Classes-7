// If Else
let time = 18;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time Dude');
}

// Switch
let month = 12;
let currentMonth = '';
switch(month){
    case 1:
        currentMonth = 'JANUARY';
        break;
    case 2:
        currentMonth = 'FEBRUARY';
        break;
    case 3:
        currentMonth = 'MARCH';
        break;
    case 4:
        currentMonth = 'APRIL';
        break;
    case 5:
        currentMonth = 'MAY';
        break;
    case 6:
        currentMonth = 'JUNE';
        break;
    case 7:
        currentMonth = 'JULY';
        break;
    case 8:
        currentMonth = 'AUGUST';
        break;
    case 9:
        currentMonth = 'SEPTEMBER';
        break;
    case 10:
        currentMonth = 'OCTOBER';
        break;
    case 11:
        currentMonth = 'NOVEMBER';
        break;
    case 12:
        currentMonth = 'DECEMBER';
        break;
    default:
        currentMonth = 'Enter Proper Month';
        break;
}
console.log(currentMonth);

// For Loop to print 0 - 10 diff 1
let result = '';
for(let i = 0; i<=10 ; i++){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// For Loop to print 20 - 0 diff 2
result = '';
for(let i = 20; i >= 0 ; i -= 2){
    if(i >= 2){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// for loop to print the Stars
let theNumber  = 5;
result = '';
for(let i = 1 ; i <= theNumber ; i++){
    for(let j = 1; j<= i ; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

// for Loop to print Numbers ascending Order
theNumber = 9;
result = '';
for(let i = 1; i<= theNumber; i++){
    for(let j = 1 ; j<= i ; j++){
        result += `${j}`;
    }
    result += '\n';
}
console.log(result);

// for Loop to print Numbers descending Order
theNumber = 9;
result = '';
for(let i = theNumber ; i >= 1 ; i--){
    for(let j = 1 ; j <= i ; j++){
        result += `${j}`;
    }
    result += '\n';
}
console.log(result);

// for loop to print the Same numbers descending Order
theNumber = 9;
result = '';
for(let i = theNumber ; i >= 1 ; i--){
    for(let j = 1 ; j <= i ; j++){
        result += `${i}`;
    }
    result += '\n';
}
console.log(result);

// for Loop to print Same Numbers ascending Order
theNumber = 9;
result = '';
for(let i = 1; i<= theNumber; i++){
    for(let j = 1 ; j<= i ; j++){
        result += `${i}`;
    }
    result += '\n';
}
console.log(result);

// for Loop to print
/*

54321
4321
321
21
1

 */

// for Loop to print
/*

1
21
321
4321
54321

 */
