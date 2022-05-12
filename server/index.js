const express=require('express')
const bodyParser=require('body-parser')
const { restart } = require('cors')
const app=express()

const mysql=require('mysql')
const b=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'CRUDDataBase'
});
app.use(cors());
app.use(express.jason())
app.use(bodyParser.urllencoded({extended:true}))

app.get('/api/get',(req,res)=>{
    const sqlSelect=
    "Select FROM Book";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
      //  console.log(result);
    });
});
app.post("/api/insert", (req,res)=>{
    // const sqlInsert="Insert Into Books (BookName, Author) VALUES ('C++', 'S Srinivasn');"
    // db.query(sqlInsert,(err,result)=>{
    //     res.send("hello YashSrivastava");
    // })
    const BookName=req.body.BookName
    const Author=req.body.Author
    const sqlInsert="Insert Into Books (BooksName, Author) VALUE(?,?)"

    db.query(sqlInsert,[BookName,Author],(err,result)=>{
        console.log(err);
    });
   
});
app.delete('/api/delete/:BookName',(req,res)=>
{
    const name=req.body.params.BookName
    const  sqlInsert="Delete FROM Book_Library WHERE BookName=?";
     db.query(sqlDelete,name,(err,result)=>
     {
        if(err) console.log(err);
     })
})
app.put('/api/update',(req,res)=>
{
    const name=req.body.params.BookName
    const  sqlUpdate="Update SET Book_Library BookName=? WHERE Author=?";
     db.query(sqlupdate,[Author,name],(err,result)=>
     {
        if(err) console.log(err);
     })
})

app.listen(3002,() => {
    console.log("running on port 3002");
});