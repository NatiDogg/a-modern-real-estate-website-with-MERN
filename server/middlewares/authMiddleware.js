import userModel from '../models/userModel.js'


export const authUser = async (req, res, next) => {
    try {
        const { userId } = req.auth(); 

        if (!userId) {
            return res.json({ 
                success: false,
                message: "Not Authorized!"
            });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        req.user = user; 
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}