const express = require('express')
const app = express()

app.get('/sum', (req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    let sum = a + b;
    console.log(a);
    console.log(b);
    
    res.status(200).json({
        message : "The sum is "+ sum 
    })

})
app.listen(3000)
