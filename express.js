import express, { json } from "express"
let products=[
    {id:1,Name:"TV",price:3000},
    {id:2,Name:"Phones",price:4000},
    {id:3,Name:"fan",price:300}
]
const app=express();
app.use(express.json())
//HTTP METHODS GET POST DELETE PUT PATCH
app.get("/data",(req,res,next)=>{
    try {
        
        res.json({state:200,sucsess:true,result:products})

    } catch (error) {
        res.json({state:404,sucsess:false,result:error.message})
    }
})
app.post("/sendData",(req,res,next)=>{
  
    console.log(req.body);
    products.push(req.body)
    res.json({success:true})
})
// app.delete('/deleteitem',(req,res,next)=>{
//     try {
//         let {id}=req.body;
//     console.log(id);
//     let newdata=products.filter((x)=>x.id!=id)
//     products=[...newdata];
//    res.json({result:products})
//     } catch (error) {
//         res.json({result:error.message})
//     }
// })

app.delete("/delete/:id", (req, res, next) => {
    // let { id } = req.body;
    
    try {
        console.log(req.params);
        let {id}=req.params;
     
        let found = false;
        for (var i = 0; i < products.length; i++) {
            if (id == products[i].id) {
                found = true;
                products.splice(i, 1);
                // res.json({ id: `your id is ${id}`, newdata: data, olddata: products });
                break;
            }
        }
        if (found) {
            res.json({message:"Product deleted successfully. 😊",data:products});
        } else {
            res.end("Product not found. 😕");
        }
    } catch (error) {
        res.end(error.message);
    }
});
app.get('/getquery',(req,res)=>{
    console.log(req.query);
    res.end("query done send")
})
app.post('/postquery',(req,res)=>{
    console.log(req.query);
    res.end("query done send by post")
})
app.delete('/deletequery',(req,res)=>{
    console.log(req.query);
    res.end("query done send by delete")
})
app.put('/putquery',(req,res)=>{
    console.log(req.query);
    res.end("query done send by post")
})
app.patch('/patchquery',(req,res)=>{
    console.log(req.query);
    res.end("query done send by post")
})
app.listen(2023,()=>{
    console.log("Server is running");
})
