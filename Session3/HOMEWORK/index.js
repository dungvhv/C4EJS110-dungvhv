//câu 1 - cách 1
// let a = 5, b = 6;
// [a, b] = [b, a];
// console.log(`${a} ${b}`);

//câu 1 - cách 2

// let a = 5, b = 6;
// a  = ({a:b, _:(b=a)}).a;
// console.log(a,b);

//câu 2
// const s = 'Hello beauty there';
// const a = s.split(" ");
// console.log(a);

//câu 3
// const a = [4, 5, 7, -8];
// console.log(...a);

//câu 4
// let itemShop = ['Jean','T-Shirt','Socks'];

// {
    
//     for(i = 0; i<itemShop.length;i++)
//     {
//         console.log(`${i+1}. `+itemShop[i]);
//     }              
// }
// function cau4()
// let listItems = ["Jeans", "T-Shirt", "Socks"];

// console.log("The currents items are:");
// for (let i in listItems) {
//     console.log(`${Number(i)+1}. ${listItems[i]}`);}

//     let res;
//     do {
//         res = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?");
//         if(res == ""){
//             break;
//         }
//         else if (res == 'r' || res == 'R') {
//             readList();
//         }
//         else if (res == 'c' || res == 'C') {
//             listItems.push(prompt("Enter the name of the new item"));
//             alert("Done");
//         }
//         else if (res == 'u' || res == 'U') {
//             let posUpdate = Number(prompt("Enter the position you want to update"));
//             listItems[posUpdate-1] = prompt("Enter the new name");
//             alert("Done");
//         }
//         else if (res == 'd' || res == 'D'){
//             let posDel = Number(prompt("Enter the position you want to delete"));
//             listItems.splice(posDel-1,1);
//             alert("Done");
//         }
//         else{
//             alert("This command is not supported");
//         }
//     } while (1)

//câu 5
// let daySo = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) để tính tổng dãy số đó');
//     let tinhTong = daySo.split(",");
//     let sum = 0;
    
//     for(i=0;i<tinhTong.length;i++)
//     {
//         tinhTong[i] = Number(tinhTong[i]);
//         sum +=tinhTong[i];   
//     }
//     console.log(`Tổng của dãy số đó là ${sum}`);

//câu 6
let daySo = prompt('Nhập vào dãy số ngắn cách nhau bằng dấu phẩy(,) tìm số nhỏ nhất của dãy số đó');
let tinhTong = daySo.split(",");
let min = Infinity;
for(let x of array){
    min = min > Number(x) ? x : min;
}
alert(`The smallest number is ${min}`);

//câu 7
const arr = [3, 4, 6, -9, 10, -88, 2];
    let num = Number(prompt("Enter a number"));
    let index = arr.indexOf(num);
    if(index!=-1){
        alert(`${num} is FOUND in my array at index ${index}`);
    }
    else{
        alert(`${num} is NOT found in my array`);
    }

//câu 8.1
let demCuu = [5, 7, 300, 90, 24, 50, 75];

function ex81(){
    console.clear();
    console.log("xin chào, tên của tôi là Việt Dũng và tôi đang đếm cừu:");
    console.log(demCuu.toString().replace(/,/g, " "));
}
//câu 8.2
console.log(`\nNow my biggest sheep has size ${Math.max.apply(null, sheepSizes)}, let's shave it`);


//8.3. 

function ex83(){
    let maxIndex = sheepSizes.indexOf(Math.max.apply(null, sheepSizes));
    sheepSizes[maxIndex] = 8;
    console.log("\nAfter shearing, here is my flock");
    console.log(sheepSizes.toString().replace(/,/g, " "));
}
//8.4. 
function ex84(index){
    console.log(`\nMONTH ${index}`);
    console.log("One month has, passed, my sheeps have grown, here are their sizes");
    sheepSizes = sheepSizes.map(size => size + 50);
    console.log(sheepSizes.toString().replace(/,/g, " "));
}

//8.5. 

function ex85(){
    for(let i=2; i<=3; ++i){
        ex82();
        ex83();
        ex84(i);
    }
}
//8.6//

function ex86(){
    let sizeAll = sheepSizes.reduce((sum,value) => sum + value);
    console.log(`\nMy flock has size in total: ${sizeAll}`);
    console.log(`I would get ${sizeAll} * 2$ = ${sizeAll*2}`);
}
