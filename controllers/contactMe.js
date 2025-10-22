import contactMeModel from "../model/contactMe.js";

export const ContactMe = async (req, res) => {
  try {
    const { name, email, message,subject } = req.body;

    // Log received data
    console.log("Contact Request Received:", req.body);

    // (Optional) Validation check
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    await contactMeModel.create({ name, email, message , subject});

    return res
      .status(200)
      .json({ message: "Contact request received successfully!" });
  } catch (err) {
    console.error("❌ Error in ContactMe:", err);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
