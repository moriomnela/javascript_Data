// let dev = {
//     name : "Moriom Islam Nela",
//     age : 20,
//     location : "Gazipur",
//     ismarried : false,
//     gender : "Female",
//     phone : "01752331716",
//     food : ["mango", "vegetable", "fish", "meat"],
//     edu : {
//        ssc : "4.90",
//        hsc : "5",
//        bsc : "3.50",
//     },
//     blood_donation : [
//         {
//             name : "Rifat",
//             purpose :"tyfhoyed",
//         },
//         {
//             name : "Raju",
//             purpose : "jor",
//         },
//     ],
// };

// dev = {
//     ...dev,
//     name: "Obaydul Islam",
//     edu : {
//        ...dev.edu,
//        hsc: "4.59",
//     },
//     blood_donation : [...dev.blood_donation.map((item,index) => {
//         if(item.name=="Rifat"){
//           return {
//             ...item,
//             name :"Rubayet Rifat",
//           } ;    
//         }
//         else {
//             return item;
//         }
//     })],
// };

// console.log(dev);