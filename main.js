
// //---------bai 1 ---------------
// function checkAge(age) {
//     result =  (age >18) ?  true : confirm('Did parents allow you?')
//     console.log(result);
//   }

//  checkAge(13)




 //----------bai 2---------------

//   const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// ) 



//------------bai 3---------------

// let x = prompt("tai khoan dang nhap")
// if(x != null){
//     if (x=== 'Admin'){
//         let y = prompt("Nhập vào mật khẩu")
//         if( y != null){
//             if (  y === 'mindX'){
//                alert("Chào mừng!")
//             }else{
//                if( y === ''){
//                    alert("Đã hủy")
//                 } else{alert("Mật khẩu sai")} 
//            }
//         }else{alert("Đã hủy")} 
//     }else{
//         if( x=== ''){
//             alert("Canceled")
//         }else{alert("Tôi không biết bạn")}
//         }
// }else {alert("Canceled")}


//-------------bai 4--------------
//..............so chia het cho 2..............
var array = [9,100,2,50,4,100,22,30]
let array1=[] 
array.forEach((Element) => {
   if ( Element %2 === 0){
    array1.push(Element)
   }  
} )
console.log(array1);
//................so lon hon 7..............
let array2=[]
for (let i= 0; i< array.length; i++){
    if (array[i] > 7){
        array2= [...array2,array[i]]
    }
}
console.log(array2);

//................so nho hon 50 va nhan doi cac so do..............
let array3= array
console.log();
const kiemtra =(mang) =>{
   for (let i= 0; i< mang.length; i++){
      if (mang[i] >= 50){
        mang.splice(i,1)
        i--
     }
  }
  return mang
}
const array4 = kiemtra(array3).map(x => x*2)
console.log(array4);
//................so nho hon 5..............
for (let i= 0; i< array.length; i++){
    if (array[i] >= 5){
     array.splice(i,1)
     i--
   }
}
console.log(array);
