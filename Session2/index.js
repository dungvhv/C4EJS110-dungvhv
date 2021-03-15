//Câu 1a:
console.log('var, let và const là các từ khóa (keywords) dùng để khai báo biến.');
console.log('const là từ khóa khai báo biến hằng số');

//Câu 1b:
console.log('var có phạm vi lớn , còn let có phạm vi khối (block scoped).');
console.log('Trong phạm vi sử dụng, dùng var: các biến có thể cập nhật và khai báo lại, còn dùng let: các biến có thể cập nhật nhưng không được khai báo lại.');

//Câu 1c:
console.log('let có thể được khai báo mà không cần khởi tạo giá trị, còn const phải được khởi tạo giá trị khi khai báo.');

//Câu 1d:
console.log('Dùng const khi biết giá trị của biến không thay đổi(hằng số).');
console.log('Dùng let trong các trường hợp giá trị của biến thay đổi và biến được đặt trong 1 block(như vòng lặp for, câu lệnh điều kiện if,...).');
console.log('Dùng var trong các trường hợp giá trị của biến thay đổi và biến là biến toàn cục trong chương trình.');

//Câu 2a:
console.log('Boolean là kiểu dữ liệu logic.');
//Câu 2b:
console.log('Boolean chỉ có 2 giá trị là true và false.');

//Câu 3a
for (let x = 0; x < 7; x++){
    console.log(x)
}

//Câu 3b
let n = prompt('Nhập 1 số bất kỳ?');
    for (let x = 0; x < n; x++){
       console.log(x);}

//Câu 3c
let n = prompt('Nhập 1 số bất kỳ?');
    for (let x = 3; x < n; x++){
       console.log(x);}

//Câu 3d     
let n = Number(prompt('Nhập số lớn'));
let c = Number(prompt('Nhập số bé'));
    while (c < n )  {
        console.log(c)
        c = c++
    }

//Câu 3e
let n = Number(prompt('Nhập số lớn'));
let c = Number(prompt('Nhập số bé'));
    while (c < n) {
        console.log(c);
        c = c + 3;
    }

//Câu 3f
let n = Number(prompt('Nhập số lớn'));
let c = Number(prompt('Nhập số bé'));
let s = Number(prompt('Nhập bước nhảy tăng'));
    while (c<n){
        console.log(c);
        c = c + s;
    }

//Câu 4   
let n = Number(prompt('Nhập số bất kỳ'));
let factorial = 1;
    for(let i = 1; i<=n; i++){
        factorial= factorial*i;
    }
    console/log(`Giai thừa của ${n} là ${factorial}`);

//Câu 5
let age = Number(prompt('Nhập số tuổi của bạn'));
    if (age < 14) {
        alert('Bạn chưa đủ tuổi để xem nội dung này')
    } else {alert('Quất luôn');}

//Câu 6
let x = Number(prompt('Nhập số bất kỳ'));
    if(x>9)
    {
        alert('Không thỏa mãn điều kiện');
    }
    else
    {
        let n=9/2;
        if(x>n)
        {
            alert(`${x} là nửa trên của 9`);
        }
        else if(x=n)
        {
            alert(`${x} là một nửa của 9`);
        }
        else
        {
            alert(`${x} là nửa dưới của 9`);
        }    
    }

//Câu 7
let x = Number(prompt('nhập số x'));
let n = Number(prompt('nhập số n'));
if(x>n)
{
    alert('Bạn nhập sai, '+x+' lớn hơn '+ n +'!');
}
else 
{
    n = n/2;
    if(x=n)
    {
        alert(x+' bằng '+ n +'!');

    }
    else if(x<n)
    {
        alert(x+' là nửa dưới của '+n*2);
    }
    else
    {
        alert(x+' là nửa trên của '+n*2);
    }    
}

//Câu 8
let x = Number(prompt('Nhập số x'));
    if(x%2)
    {
        alert('Đây là số lẻ');
    }
    else
        alert('Đây là số chẵn');

//Câu 9a
for (let i = 1; i <= 6; ++i) {
    if (i < 4) {
        console.log('L');
    }
    else {
        console.log('H');

    }
}
//Câu 9b
let n = Number(prompt(`Nhập tổng số của L's và H's?`));
let tmp = n / 2;
    while (n > 0) {
        if (n > tmp) {
            console.log('L');
        }
        else {
            console.log('H');
        }
        n--;
    }
//Câu 9c
for (let i = 0; i < 8; ++i) {
    if (i % 2) {
        console.log('1');
    }
    else {
        console.log('0');
    }
 }    

 //Câu 9d
 let n = Number(prompt("Nhập tổng số của 1's and 0's"));
 for (let i = 0; i < n; ++i) {
     if (i % 2) {
         console.log('1');
     }
     else {
         console.log('0');
     }
 }

 //Câu 10
 let w = Number(prompt(' cân nặng của bạn là (kg)?'));
    let h = Number(prompt(' chiều cao của bạn là (cm)?'));
    h = h / 100;
    let bmi = w / (h * h);
    alert(`Cân nặng của bạn là ${w}kg. Chiều cao là ${h}m`);
    if(bmi<16)
    {
        alert('Suy dinh dưỡng');
    }
    else if( bmi > 16 && bmi < 18.5)
    {
        alert('Thiếu cân');
    }
    else if( bmi > 18.5 && bmi < 25)
    {
        alert('Bình thường');
    }
    else if( bmi > 25 && bmi < 30)
    {
        alert('Thừa cân');
    }
    else
    {
        alert('Béo phì');
    }

    