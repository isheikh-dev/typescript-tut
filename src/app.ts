// const names: Array<string>  = ['Max' , 'Manual'];

// const promise: Promise<number> = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })

function merge<T  extends object, U  extends object>(objA: T , objB: U) { 
    return Object.assign(objA, objB)
}

const mergedOb = merge({name: "Max" , age : 30} , {hobbies : ['none']})
console.log(mergedOb)


interface Lengthy { 
    length: number;
}
function countAndDescription<T extends Lengthy >(element: T) : [T, string] { 
    let descriptiontext = "Got no value"
    if (element.length === 1){ 
        descriptiontext = "got 1 element "
    } else if  (element.length > 1) { 
        descriptiontext = "got " + element.length + " elements" 
    }
    return [element , descriptiontext]
}

console.log(countAndDescription("hi there"))