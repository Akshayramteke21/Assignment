const Pool = require("pg").Pool;

const pool = new Pool({

    user:"postgres",
    password:"root",
    host:"localhost",
    port:5432,
    database:'Admin'
});

app.get('/users', async (req,res)=>{

    try {
        const allusers= await pool.query("SELECT *FROM Student")

        res.json(allusers.rows);

    } catch (error) {
        console.log(error);
    }
})



 
module.exports= pool;
