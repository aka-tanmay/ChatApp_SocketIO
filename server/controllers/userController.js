//Signup a new user

export const signup = async (req,res)=>{
    const {fullname,email,password,bio} = req.body;

    try {
        if (!fullname || !email || !password || !bio){
            return res.json({success:false, message:"Missing Details"})
        } 

    } catch (error) {
        
    }
}








