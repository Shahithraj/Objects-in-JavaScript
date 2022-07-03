// 1.

const obj = {
    a:"one",
    b:"two",
    a:"three"
}
console.log(obj)  // {a:"three",b:"two"}

// 2. 
const nums = {
    a:100,
    b:200,
    title:"My nums"
}

const multipleByTwo = (num) => {
for(const key in num) {
    if(typeof num[key] === "number") {
        num[key] *= 2
    }
}
}

multipleByTwo(nums)
console.log(nums)  //{ a: 200, b: 400, title: 'My nums' }  

// 3.

const a = {} 
let b = {key:"b"}
// b = JSON.stringify(b)
const c= {key:"c"}

//  If b and c is converted to stringify by  JSON.stringify it will be 123 and 456 - a[b] & a[c]

a[b] = 123 // a["[object Object]"]
a[c] = 456 // a["[object Object]"]

console.log(a[b])  //456

// 4.Spread Operator 

console.log([..."shahith"]) // ['s', 'h', 'a','h', 'i', 't','h']

const user = {name:"person"}

const admin = {admin:true,...user}

console.log(admin) //  { admin: true, name: 'person' } 

// 5. JSON.stringify

const detail = {
    user:"shahith",
    level:40,
    health:"Good"
}

const data = JSON.stringify(detail,["level","health"])
console.log(data)  // only stringify level and health {"level":40,"health":"Good"}

//  6.

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter()); // 20
  console.log(shape.perimeter()); //NaN





