// 01 - Map Double

// const array = [1,2,3,4,5]

// const doubles = array.map ((num) => {
//     return num * 2
// })

// console.log(doubles)

// 02 - Map Names

// const longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     },
// ]

// const shortNames = longNames.map((name)=>{
//     return {
//         name: `${name.firstName} ${name.lastName}`
//     }
// })

// console.log(shortNames)

// 03 - Filter Numbers

// const array = [1, "toto", 34, "javascript", 8]

// const numbers = array.filter((num) => {
//     return typeof(num) === "number"
// })

// console.log(numbers)

// 04 - Filter Even

// const numbers = [1,2,3,4,5,6,7,8]

// const even = numbers.filter((num) => {
//     return num % 2 === 0
// })

// console.log(even)

// 05 - Cakes

// const cakes = [
//     {
//         name: "cake",
//         flavor: "vanilla",
//         status: "available"
//     },

//     {
//         name: "brownie",
//         flavor: "chocolate",
//         status: "available"
//     },
//     {
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// const chocolateCake = cakes.filter((cake) => {
//         if (cake.flavor === "chocolate"){
//             return cake
//         } 
// }).map((cake) => {
//         cake.status = "Sold out !"
//         return cake
//  })

// console.log(chocolateCake)

// 06 - Cake v2

const cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },

    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const pieCake = cakes.find((cake) => {
    return cake.name === "pie" 
})

console.log(pieCake)