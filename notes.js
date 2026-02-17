//call back basic
// function greet(){
//     console.log("welcome");
// }
// function execute(fn){
//     fn();
// }

// execute(greet)

//map /filter
// const b=[1,2,3,4,5];
// let num=b.map(function(n){// map method doesnot change oruiginal array rather it store in new array
//    return n*2;
// })

// let newnum=b.map(n=>n*2);//.map(()=>) //.map((element,index)=><li>{element}<li>)

//     //add=()=>a+b;

//     //filter an array
const num1=[2,4,6,8]
const n1=num1.filter((n)=>n%2==0);
console.log(n1);

const sum=[...num1,5];
console.log(sum)