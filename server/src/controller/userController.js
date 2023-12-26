import User from '../model/UserSchema.js'

export const userDeleteById = async (req, res) => {
    const { id } = req.params;
    
    try {
      if (req.role === "superadmin") {
        const user = await User.findByIdAndDelete(id);
        res.send(user);
        return
      }
      res.send("admin deyilsen pis user")
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }


  export const userGetAll= async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }


  

  export const userUpdateById=   async (req, res) => {
    try {
    
      if (req.role === "superadmin") {
  
  
        const { id } = req.params;
        const { username, role, password } = req.body;
        const user = await User.findByIdAndUpdate(id, { username, role, password }, { new: true });
        res.send(user);
        return
      }
      res.send("admin deyilsen pis user")
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }