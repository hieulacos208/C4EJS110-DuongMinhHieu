//video 1.1
// var a = Math.floor(Math.random()*101)
// console.log (a/100)
//video 1.2
// let a =[2,5,6,9,10]
// let random = a[Math.floor(Math.random() * a.length)];
// console.log(random)
//video 1.3
// let question=[
//     {
//         quizzes:"Quần rộng nhất là quần gì? ",
//         listAnswer: ['quần đảo', 'quần âu ', 'quần jean', 'quần đùi'],
//         answerCorrect: 1
//     },
//     {
//         quizzes: "Núi nào mà bị chặt ra từng khúc?",
//         listAnswer: ['Núi Phú Sĩ ', 'Núi Thái Sơn', 'Núi Phú Lương', 'Núi Phan xi păng'],
//         answerCorrect:2
//     },
//     {
//         quizzes: "Con trai có gì quý nhất?",
//         listAnswer: ['Vỏ trai', 'Tóc', 'Ngọc trai', 'Mắt'],
//         answerCorrect: 3
//     },
//     {
//         quizzes:"Quốc gia có diện tích lớn nhất?",
//         listAnswer: ['Nga', 'Canada', 'Hoa Kỳ', 'Trung quốc'],
//         answerCorrect: 1
//     }
// ]
// let random =Math.floor(Math.random() * question.length);
// let quizz=question[random];
 
// let answer = quizz.quizzes;
 
// for(let i in quizz.listAnswer){
//  answer += `\n${Number(i) + 1}. ${quizz.listAnswer[i]}`;
 
// }
// let ans = Number(prompt(answer));
// // if(ans == quizz.answerCorrect){
// //     alert('Bạn đã trả lời đúng');
// // }
// // else{
// //     alert('Bạn đã trả lời sai ')
// // }
// let questionAnswer = {};
//     let countQuestion = question.length;
//     let countQuestionAnswer = 0;
//     let countCorrect = 0;
//     while (countQuestionAnswer != countQuestion) {
//         let random =Math.floor(Math.random() * question.length); 
//         if (!questionAnswer[random]) {
//             questionAnswer[random] = 1;
//             countQuestionAnswer++;
//             quzz = question[random];
//             let res = quzz.quizzes;
//             for (let i in quzz.listAnswer) {
//                 res += `\n${Number(i) + 1}. ${quzz.listAnswer[i]}`;
//             }
//             let ans = Number(prompt(res));
//             if (ans == quzz.answerCorrect) {
//                 countCorrect++;
//             }
//         }
//     }
//     alert("We are out of question!");
//     alert(`You answered correctly ${countCorrect} out of ${question.length} questions.`)
//video 2.1
// {
//     let word =['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool','hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color','now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
//     let countWord = {};
//     for(let x of word){
//         if(countWord[x]){
//             countWord[x] ++;
//         }
//         else{
//             countWord[x] = 1;
//         }
//     }
//     for(let x in countWord){
//         console.log(`${x}: ${countWord[x]}`);
//     }
// }
// // video 2.2
// {
//     const inventory = [
//         {
//         name: 'HP Envy 13aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//         },
//         {
//             name: 'Dell XPS 9370',
//             price: 30000,
//             brand: 'Dell',
//             quantity: 1,
//             },
//             {
//             name: 'Dell Inspiron 3567',
//             price: 9300,
//             brand: 'Dell',
//             quantity: 12,
//             },
//             {
//             name: 'Dell Latitude E5450',
//             price: 8600,
//             brand: 'Dell',
//             quantity: 2,
//             },
            
//             {
//             name: 'Asus Zenbook',
//             brand: 'Asus',
//             price: 20000,
//             quantity: 4,
//             },
//             {
//             name: 'HP Pavilion',
//             brand: 'HP',
//             price: 14000,
//             quantity: 7,
//             },]
// //video 2.3
//     let inventoryByGroup ={};    
//     for(let i of inventory){
//         let brand = i.brand.toLocaleLowerCase();
//         if(!inventoryByGroup[brand]){
//         inventoryByGroup[brand] = [];
//         inventoryByGroup[brand].push(i);
//     }
//     else{
//         inventoryByGroup[brand].push(i)
//     }
// }
//     console.log(inventoryByGroup)
// //video 2.4
//          let brand = prompt("Which brand?");
//              brand = brand.toLowerCase();
//         if(inventoryByGroup[brand]){
//     alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory`);
//       }
//        else{
//     alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
//      }
// //video 2.5
//        let brand = prompt("Which brand?");
//          brand = brand.toLowerCase();
//          if(inventoryByGroup[brand]){
//         let geren = "";
//           for(let x of inventoryByGroup[brand]){
//             geren += x.name + `\n`;
//         }
//          alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n${geren}`);
//       }
//        else{
//         alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
//         }
// //video 2.6
//         let brand = prompt("Which brand?");
//             brand = brand.toLowerCase();
//         if(inventoryByGroup[brand]){
//             let geren = "";
//             let detai = 0;
//         for(let x of inventoryByGroup[brand]){
//             geren += x.name + `\n`;
//             detai += x.quantity * x.price;
//         }
//             alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai}K`);
//         }
//         else{
//             alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
//         }
// //video 2.7
//         let brand = prompt("Which brand?");
//         brand = brand.toLowerCase();
//         if(inventoryByGroup[brand]){
//             let geren = "";
//             let detai = 0;
//         for(let x of inventoryByGroup[brand]){
//             geren += x.name + `\n`;
//             detai += x.quantity * x.price;
//         }
//             detai = detai * 1000;
//             alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai.toLocaleString("da-DK")}VND`);
//         }
//         else{
//             alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
//         }
//     }








// function hiNam() {
    // alert('Hi Nam') ;
    // alert('Nam, function is great') ;
// }

// function sayHi (name) {
    // alert ('Hi' + name) ;              sayHi ('Nam', "Function is great");
    // alert ('${name}, ${comment}') ;    sayHi ('Duyen', "You look great");
// }

let x = sayHi ;
x('Hello') ;
function sayHi(name) {
    alert('Hi' + name);
}
function sayGoodBye(name){
    alert('Goodbye' + name)
}
function testSay(f) {
    alert("Here I say") ;
    f() ;
}
testSay(sayHi) ;
testSay(sayGoodBye) ;