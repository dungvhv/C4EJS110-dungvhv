//Init
let listMovie = ['Sieu Nhan', 'O Nha 1 Minh', 'Nghin Le Mot Dem'];

{
    console.log(listMovie);
};

let newMovie = prompt('Nhập tên một bộ phim yêu thích của bạn');
listMovie.push(newMovie);
console.log(newMovie);
//read
for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let chooseMovie = Number(prompt("Chọn phim"));
    console.log('Bạn vừa chọn '+listMovie[chooseMovie-1]);
//update1
    {
        console.clear();
        console.log(listMovie);
        let updateMovie = prompt("Đổi tên phim đầu tiên của danh sách");
        listMovie[0] = updateMovie;
        console.log(listMovie);
    }
//update2
    {
        console.clear();
        for(i=0;i<listMovie.length;i++)
        {
            console.log(`${i+1}. `+listMovie[i]);
        }
        let n = prompt('Chọn vị trí tên phim muốn đổi');
        let updateMovie = prompt("Nhập tên phim mới");
        listMovie[n-1] = updateMovie;
        console.log(listMovie);
    }
//delete1
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let n = prompt("Nhập vị trí muốn xóa");
    listMovie.splice(n-1,1);
    console.log(listMovie);
}
//delete2
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
    let x = prompt("Nhập vị trí muốn xóa");
    let n = prompt("Nhập số phần tử muốn xóa");
    listMovie.splice(x-1,n);
    console.log(listMovie);
}
//read1
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(listMovie[i]);
    }  
}
//read2
{
    console.clear();
    for(i=0;i<listMovie.length/2;i++)
    {
        console.log(listMovie[i]);
    }
}
//read3
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i]);
    }
}
//update3
{
    console.clear();
    for(i=0;i<listMovie.length;i++)
    {
        console.log(`${i+1}. `+listMovie[i].toLowerCase());
    }
}

//Ứng dụng của while
{
    console.clear();
    while(true){
        let yourName = prompt('Đăng ký tên của bạn ( 15 ký tự )');
        if(yourName.length<=15)
        {
            alert('Good Name!');
            console.log('How many legs does a spider have?');
            let answer = ['None','4 legs','8 legs','12 legs'];
            for(i=0;i<answer.length;i++)
            {
                console.log(`${i+1}. `+answer[i])
            }
            
            while(true)
            {
                let reply = prompt('Câu trả lời của ban là gì:');
                if(reply<1 || reply >4)
                {
                    console.log('Đáp án không hợp lệ, câu trả lời phải là 1, 2, 3 or 4');
                }
                else if (reply!==3)
                {
                    console.log('Chúc bạn may mắn lần sau'); 
                }
                else
                {
                    console.log('Chúc mừng, bạn đã trả lời đúng');
                    break; 
                }
            }
            break;
        }
        else
        {
            alert('Tên của bạn quá dài!');
        }
    }
}
