const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utiles/response");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        responseReturn(res, 500, { error: error.message });
      } else {
      }
      console.log(admin);
    } catch (error) {}
  };
}
module.exports = new authControllers();
