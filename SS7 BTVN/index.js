//ex1
// console.log ('1-d, 2-a, 3-c, 4-b');
//ex2
// let timer= setInterval(() => alert('Hello'), 3000)
// setTimeout(() => { clearInterval(timer); alert('Bye'); }, 6000);
//ex3
// console.log('No')
// ex4
// function ex4() {
//     var x = document.getElementsByTagName("LI");
//     document.getElementById("demo").innerHTML = x[1].innerHTML;
//     console.log(x[1])
//     for(let i=0; i<x.length; i++){
//         console.log(x[i].innerHTML)
//   }
// }
// //ex5
// function ex5() {
//     let x = document.getElementsByTagName("div");
//     document.getElementsByClassName("singer").innerHTML = x[1].innerHTML;
//     console.log(x[1])
//     for(let i=1; i<x.length; i++){
//         console.log(x[i].innerHTML)
//     }
// }
// function ex71() {
//     let btn1 = document.getElementById('button1')
//     btn1.addEventListener('click', (e) => {
//         console.log(e.target)
//     });   
//     let btn2 = document.getElementById('button2')
//     btn2.addEventListener('click', (e) => {
//         console.log(e.target)
//     });  
//     console.log('e.target is the button tag that was clicked')
// }
// function ex72() {
//     let btn1 = document.getElementById('button1')
//     btn1.addEventListener('keydown', (e) => {
//         console.log(e.key)
//     });   
//     let btn2 = document.getElementById('button2')
//     btn2.addEventListener('keydown', (e) => {
//         console.log(e.key)
//     });  
//     console.log('e.key is the keypad that was pressed by user')
// }
// function ex8() {
//     alert('My name is Hieu')
//     alert('Nam nay toi se giau')
// }
// function ex9(name,wish) {
//     alert(`Your name is ${name}`)
//     alert(`Your wish is ${wish}`)
// }
// ex9('Hieu','Nam nay toi giau')
// function ex10(name,wish) {  
//     alert(`Your name is ${name}`)
//     if(!wish){
//         alert('Your doesn\'t have any wish')
//     }else{
//         alert(`Your wish is ${wish}`)
//     }
// }
// ex10('Hieu')
function ex11(){
    let nhap = document.getElementById('btn1')
    console.log(nhap)
    
    let nhap1 = document.getElementById('input1')
    console.log(nhap1)


    nhap.addEventListener('click',()=>{
        console.log('Upper button clicked')
    })
}
// ex11()
function ex11_5(){
    let nhap = document.getElementById('title1')
    console.log(nhap)

    let x = document.getElementById('input1').value
    let a = document.getElementById('btn1')
    a.addEventListener('click',()=>{
       return nhap.innerHTML = x.toUpperCase()
           
    })   
}


let items = ['Backpack','MiBand watch','Ring']
let a = document.getElementById('item_list_ul')
let b = document.getElementById('li2')
let c = document.getElementById('li1')
a.removeChild(c)
a.removeChild(b)

for (let i = 0; i < items.length; i++){
    a.insertAdjacentHTML('beforeend',`<li><span>${items[i]}</span></li>`)

} 

let x = document.getElementsByTagName("LI");
console.log(x[1])

x[0].insertAdjacentHTML('beforeend',`<button id="r1" onclick="remove1()">Remove</button>`)
x[1].insertAdjacentHTML('beforeend',`<button id="r2" onclick="remove2()">Remove</button>`)
x[2].insertAdjacentHTML('beforeend',`<button id="r3" onclick="remove3()">Remove</button>`)



function remove1(){
    console.log('Clicked remove')
    console.log(`Index: 0`)
    items.splice(0, 1)
    console.log(items)
    x[0].remove()
}
function remove2(){
    console.log('Clicked remove')
    console.log(`Index: 1`)
    items.splice(1, 1)
    console.log(items)
    x[1].remove()
}
function remove3(){
    console.log('Clicked remove')
    console.log(`Index: 2`)
    items.splice(2, 1)
    console.log(items)
    x[2].remove()
}

function addNew(){
    let a = document.getElementById('item_list_ul')
    let e = document.getElementById('input2').value
    
    console.log('clicked')
    console.log(e)
    items.push(e)
    console.log(items)
    a.insertAdjacentHTML('beforeend',`<li><span>${e}</span></li>`)
    console.log(a)

}