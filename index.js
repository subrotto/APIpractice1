// function add(num1,num2=10){
//     return num1+num2;
// }

// console.log(add(10));

// const str=['abu','babu','kanu','chalu'];
// let i=1;
// for(const ar of str){
    
//     console.log(`Person No${i}: ${ar}`);
//     i++;
// }
// const name=(str)=>{
//     for(const ar of str){
    
//         console.log(`Person No${i}: ${ar}`);
//         i++;
//     }
// }
// name(str);

// const number=[10,20,30,40,50];
// const maxi=Math.max(...number);
// console.log(maxi);

// const number2=[...number];
// number.push(20);
// console.log(number2);


// const student={
//     name:'abu',
//     work:'Google',
//     activities:{
//         play:'Football',
//         hobby:'Cricket',
//         location:{
//             city:'sirajganj',
//             division:'Rajshahi'
//         }
//     },
//     age:20

// }

// const {play,hobby}=student.activities;
// console.log(play,hobby);
// const {city,division}=student.activities.location;
// console.log(city);

// const [phone,zilla]=['0155','rjshah'];
// console.log(phone,zilla);

// const num=[2,4,6,8];
// console.log(num.map(x=>x*x));

// const student=[
//     {name:'ananya',age:22},
//     {name:'subroto',age:22},
//     {name:'opu',age:23}
// ];
// const list=student.map(stu=>stu.name);
// console.log(list);
// student.forEach(s=>console.log(s.age));
// const list2=student.filter(s=>s.name=='ananya');
// console.log(list2);
// const list3=student.find(s=>s.name=='subroto');
// console.log(list3);

// class Student{
//    name;
//     roll;
//     constructor(name,roll){
//         this.name=name;
//         this.roll=roll;
//     }
//     display(){
//         console.log(this.name,'is present');
//     }
// }
// class Person extends Student{
//     age;
//     constructor(name,roll,age){
//         super(name,roll);
//         this.age=age;
//     }
//     display2(){
//         console.log(this.name,"is a good person");
//     }
// }

// const student1=new Student('Ananya',51);
// const student2=new Student('subroto',22);
// student1.display();
// const p1=new Person('opu',22,23);
// // console.log(p1);
// p1.display2();

const student={
name:'ananya',
age:22,
education:'b.sc',
skill:{
play:'heart'
}
};

const stu1=JSON.stringify(student);
console.log(stu1);
const stu2=JSON.parse(stu1);
console.log(stu2);