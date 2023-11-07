import express from 'express'

const app=express();
app.use(express.json())
// let dataa=[{Name:"youssef",email:"youssef@yahoo.com"},
// {Name:"ali",email:"ali@yahoo.com"},
// {Name:"noura",email:"noura@yahoo.com"}

// ]
// app.get('/get/:email',(req,res,next)=>{
//     try {
//         let {email}=req.params;
//     console.log(email);
//     if(!dataa.includes(email)){
//         return res.json({status:404,success:false,message:"mail not found"}) 
//     }
//     else{
//         next()
//     }
//     } catch (error) {
//         res.end(error.message) 
//     }
//     // console.log(dataa.find(mail));
//     // res.end("sacsa")
//     // if(data.includes(mail))
// // let found = false;
// // for(let i=0;i<data.length;i++){
// // if(data[i].email==mail){
// //     found=true;
// //     break;
// // }
// // else{
// //     found=false;
// // }
// // }
// // if(!found){
// //     return res.json({status:404,success:false,message:"mail not found"})  
// // }
// // else{
// //     next()
// // }
// },(req,res,next)=>{
//     return res.json({status:200,success:true,message:"Welcome"})

// })
let data=[
    {
        id:1,
        name:"Dell",
        price:2000
    },
    {
        id:2,
        name:"samsung",
        price:3000
    }
    ,
    {
        id:3,
        name:"cars",
        price:2000
    }
]
app.put('/update/:id',(req,res)=>{
let {id}=req.params;
let {price}=req.body
console.log(req.body);
console.log(id);
let updateitem=data.findIndex((x)=>x.id==id);
data[updateitem].price=price
res.json({dataIndex:updateitem,result:data})
})
app.patch('/update/:id',(req,res)=>{
    let {id}=req.params;
    let {price}=req.body
    console.log(req.body);
    console.log(id);
    let updateitem=data.findIndex((x)=>x.id==id);
    data[updateitem].price=price
    res.json({dataIndex:updateitem,result:data})
    })
app.listen(3000,()=>{
    console.log("Server Is Running");
})