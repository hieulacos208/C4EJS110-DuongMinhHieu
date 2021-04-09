//ex1
// console.log ('1-d, 2-a, 3-c, 4-b');
//ex2
// let timer= setInterval(() => console.log('Heehaw'), 3000)
// setTimeout(() => { clearInterval(timer) }, 6000);
// ex3
// console.log('No') ;
// console.log('No') ;

// ex4
// function ex4(){
//     var arr  = document.getElementsByTagName("li");
//     console.log(arr[1]);
// }
// //ex5
// function ex5(){
//     var arr  = document.getElementsByClassName("Singer");
//     console.log(arr[2]);
// }
//Ex6:
// function ex6(){
//     var arr = document.getElementById('Remove');
//     arr.remove();
// }
// ex6();
// Ex7
// function ex71(){
//     var btn1 = document.getElementById('button1');
//     btn1.addEventListener('click',(e)=>{console.log(e.target);});
//     var btn2 = document.getElementById('button2');
//     btn2.addEventListener('click',(e)=>{console.log(e.target);});
// }
// function ex72(){
//     var btn1 = getElementById('button1');
//     btn1.addEventListener('keydown',(e)=>{console.log(e.key);})
// }
// Ex8 
// function ex8() {
//     alert('My name is Hieu')
//     alert('Nam nay toi se giau')
// }
// Ex9 
// function Ex9() {
//     function list(n, w) {
//     alert (`You are ${n} and one thing you wish to do this year is ${w}`);
//     }
//     let name = prompt ('What is your name?');
//     let wish = prompt ('What is your wish?');
//     list(name, wish);
// }   
// Ex9()
// Ex10 
// function ex10(name,wish) {  
    // alert(`User's name is ${name}`)
    // if(!wish){
        // alert('User doesn\'t have any wish')
    // }else{
        // alert(`User's wish is ${wish}`)
    // }
// }
// ex10('hieu','nam nay toi giau')
// Ex11 
// function ex11(){
    // let a = document.getElementById('btn1')
    // console.log(a)
    
    // let b = document.getElementById('input1')
    // console.log(b)


    // a.addEventListener('click',()=>{
        // console.log('Upper button clicked')
    // })
// }
// ex11()
// function ex11_5(){
    // let b = document.getElementById('title1')
    // console.log(b)

    // let x = document.getElementById('input1').value
    // let a = document.getElementById('btn1')
    // a.addEventListener('click',()=>{
    //    return b.innerHTML = x.toUpperCase()
    //    console.log(x.value)
           
    // })   
// }
// ex11_5()

// Ex12 
// let items = ['Backpack', 'Miband watch', 'Ring'];
//     console.log(items);
//     let items1 = document.getElementById("items1");
//     console.log(items1);
//     for (let i=0; i<items.length; i++) {
//         items1.insertAdjacentHTML ('beforeend', 
//         `<li>${items[i]}</li>`
//         )
//     }
//     let test = document.getElementsByClassName("test");
//     while(test.length > 0) {
//         test[0].remove();
//     }