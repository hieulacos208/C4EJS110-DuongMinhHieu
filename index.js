// Cau 1 ;
   console.log = ('1.1 Var vs Const la cau lenh de khai bao bien. Var co pham vi trong 1 ham. Const co pham vi trong 1 khoi');
   console.log = ('1.2 Var co pham vi trong 1 ham, cac bien co the cap nhat va khai bao lai trong pham vi cua no. Let co pham vi trong 1 khoi, cac bien duoc cap nhat nhung ko dc khai bao lai');
   console.log = ('1.3 Let co the dc khai bao ma ko dc khoi tao. Const phai dc khoi tao trong qua trinh khai bao, cac bien ko dc cap nhat va khai bao lai');
   console.log = ('1.4 Su dung trong cac truong hop khai bao bien');

//  Cau 2 ;
   console.log = ('2.1 Boolean la kieu toan tu logic va co 2 gia tri la : True/False');
   console.log = ('2.2 Boolean ra ket qua la : Co/Khong ; Dung/Sai');
   
//  Cau 3 ;
//  3a ;
   let x = 0 ;
   for(let x = 0; x < 7; x++) {alert(x)};
//  3b ;
    var a = Number(prompt("Enter a number ?")) ;
    // let x = 0 ;
    for(let x = 0; x < a; x++) {alert(x)};
// 3c ;
    var a = Number(prompt("Enter n")) ;
    let y = 3 ;
    for(let y = 3; y < a; y++) {alert(y)};
// 3d ;
    var c = String(Number);
    var c = prompt("Enter c");
    var n = String(Number);
    var n = prompt("Enter n");
    let z = c ;
    for(let z = c; z < n; z++) {alert(z)};
// 3e ;
    // var c = String(Number);
    // var c = prompt("Enter c");
    // var n = String(Number);
    // var n = prompt("Enter n");
    // let i = c ;
    // for(let i = c; i < n; i+3) {alert(i)};

// Cau 4 ;
    var n = Number ;
    var n = prompt("Enter a number");
    var b = 1 ;
    let s = n ;
    for(let s = n; s > 1; s--)
    b*=s ;
    alert(b);

// Cau 5 ;
let age = prompt('How old are you?');
if (age < 14) {
    alert('You are not enough to view this content');
} else {alert('Enjoy !');
}

// Cau 6 ;
   var n = prompt('Enter a number');
   if(n < 4) {alert('Lower half of 9')} 
   else if(4.5 < n < 9) {alert('Higher half of 9')}

// Cau 7 ;
   x = Number;
   let x = prompt('nhap so')
   n = Number;
   let n = prompt('Nhap so');
   if(x < n) {alert(n +' '+('is in lower half of')+''+ x)}
   else if(n < x) {alert(x +' '+('is in higher half of')+' '+n)} ;

// Cau 8 ;
   x = Number ;
   var x = prompt(numberr)
    if(x % 2 == 0) {alert(x +' '+('is an even number'))}
    else alert(x +' '+('is an old number'));

// Cau 9 ;
//  9a ;
for(let h=1; h <=6;h++){
    if(h<=3){
        console.log('L')
    }else console.log('H')

//  9b ;
let x = Number(prompt('nhập số in ra L và H'));
let l,h;
for(l = 0;0 <= l & l < x;l++){
    if(l< x/2){console.log('L');}
 else  console.log('H')}

//    9c
for (var lh = 1; lh <= 8; lh++) {
    if (lh < 5) {console.log('0');}
    else {console.log('1');}

    // 9d
    var p = prompt('Viết số vào đây');
    for (let p1 = 1; p1 < p; p1++) {
        if (p1 % 3 == 0) {
            console.log("1");
        }
        else {
            console.log("0");

// Cau 10
w = Number;
var w = prompt(" Enter weight is kg")
h = Number;
var h = prompt("Enter height is cm")
var BMI=( w /((h*0.01) * (h*0.01)));
Math.ceil(BMI);
alert(Math.ceil(BMI));
if(BMI < 16){
   alert("thieu can nang")
}else if(BMI< 18){
   alert("thieu can")
}else if( BMI< 25){
   alert("binh thuong")
}else if(BMI< 30){
   alert("thua can")
}else alert("beo phi")


