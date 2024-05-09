const test = (req, res) => {
    res.json({ message: 'test is working' });
  }



 const registerUser= async (req,res)=>{
  try{

    const { name, email,password} = req.Body;
          if (!name) {
                   return res.json({

                    err:"name is required"
                   })
          } ;

          if (!password || password.length<10) 
            
            
            {
              return res.json({
                err:"password is required and should be 10 char long"
              })

             
          };

          const exist = await User.findOne


  }
  catch (err){
          console.log(err);
  }

 }

  module.exports={

    test,
    registerUser
  }