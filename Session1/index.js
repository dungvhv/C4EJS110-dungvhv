console.log('Câu 1.1');
console.log('Trong JS những tên biến không hợp lệ là gì');
console.log('Bắt đầu bằng số');
console.log('Bắt đầu bằng ký tự đặc biệt');
console.log('trùng với các keyword mẫu trong JS');
console.log('ví dụ về tên biến không hợp lệ');
console.log('29old - bắt đầu bằng số');
console.log('yourold? - chứa ký đặc biệt'),
console.log('name - trùng với keyword trong JS');
console.log('Câu 1.2');
console.log('Để kiểm tra kiểu dữ liệu trong JS ta dùng typeof');

console.log('Câu 2');
console.log(' 1-b, 2-a, 3-e, 4-c')

console.log('Câu 3.1');
let message = 'Coding is great';
console.log(message);
console.log('Câu 3.2');
let studenCount = 0;
console.log(studenCount);

console.log('Câu 4.1')
{ let message = 'Coding might not be easy, but is great'; }
console.log(message);
console.log('Câu 4.2');
{ let studenCount = 17};
console.log(studenCount);
console.log('Câu 4.3')
{ let message = message.toLowerCase()};
console.log(message);
console.log('Câu 4.4');
{ let studenCount = studenCount++};
console.log(studenCount);

console.log('Câu 5');
let tomorow = 'Have a nice day';
alert(tomorow);

console.log('Câu 6');
let yourname = prompt('Your name is');
alert('Hey' + " " yourname + ', Have a nice day');

console.log('Câu 7')
let firstname = prompt('Tên của bạn');
let lastname = prompt('Họ của bạn');
alert('Hi' + " " + lastname + " " + firstname);

console.log('Câu 8');
let hinhvuong = prompt('Nhập kích thước 1 cạnh hình vuông');
hinhvuong = Number(hinhvuong);
let dientich = hinhvuong * hinhvuong
alert(`Diện tích hình vuông là ${dientich}`);

console.log('Câu 9');
let pi = 3.14,
let R = prompt('Nhập bán kinh hình tròn của bạn');
R = Number(R);
let hinhtron = R * R * pi;
alert(` Diện tích hình tròn của bạn là ${hinhtron.toFixed(2)}`);

console.log('Câu 10');
let doC = prompt('Bạn muốn biết độ C bằng bao độ F. Hãy cho tôi biết nhiệt độ C ngoài trời của bạn');
let doF = doC * 1.8 + 32;
alert(` Nhiệt độ ngoài trời của bạn đang là ${doC} độ C tương ứng là ${doF} độ F`);
