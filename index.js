let n = +prompt("Введите номер задания от 1 до 6", 6);

function task1() {
  let m = prompt("Введите число, сколько раз нужно отобразить * "), simbol = `*`;
  console.log(simbol.repeat(m));
}

function task2(limit1, limit2, numbr) {
  for (let i = limit1; i<=limit2; i++){
    if(i % numbr ===0){
     return console.log(i);
    }
  }
}
function task3() {
  let arr = [1,2,3,4,5,6,7,8,9,10]; 
        let sum = 0;
        for (let i=0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                sum += arr[i];
            }
        }
        console.log(arr);
        console.log(sum);
}

function task4() {
  let a =  [16,7,54,4,12,56,47,4,46];
for (let i=0; i < a.length; i++){
  if(a[i]<=10){
    a[i]=0;
  }
  a[i]=a[i]
}
console.log(a);
}

function task5(num, len=5){
  if (num >= 0) {
    return console.log(num.toString().padStart(len, "0"));
  } else {
    return console.log('-' + (-num).toString().padStart(len, "0"));
  }
}

function task6(){
  let array1 = [16,7,54,4];
  let array2 = [22,3,25,66];
  let array3 = [...array1, ...array2];
  console.log(array3);
}

switch (n) {
  case 1:
    task1();
    break;
  case 2:
    let limit1 = +prompt("Введите минимальное число ");
    let limit2 = +prompt("Введите максимальное число ");
    let numbr = +prompt("Введите число на которое делим ");
    task2(limit1, limit2, numbr);
    break;
  case 3:
    task3();
    break;
  case 4:
    task4();
    break;
  case 5:
    let num = prompt(`Please enter number `);
    task5(num, len=5);
    break;
  case 6:
    task6();
    break;
}








