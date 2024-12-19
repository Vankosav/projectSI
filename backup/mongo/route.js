// import dbConnect from "@/utils/dbConnect";
// import ApplicationForm from "@/models/Application";
// import multer from "multer";
// import nextConnect from "next-connect";

// //file upload
// const upload = multer({ dest: "uploads/" });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Something went wrong! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.single("cv"));

// apiRoute.post(async (req, res) => {
//   await dbConnect();
//   const { firstName, lastName, phone, email, personalUrl } = req.body;
//   const cv = req.file?.path;

//   try {
//     const application = new ApplicationForm({
//       firstName,
//       lastName,
//       phone,
//       email,
//       personalUrl,
//       cv,
//     });
//     await application.save();
//     res.status(201).json({ message: "Application submitted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to submit application." });
//   }
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disables the default body parser for file upload
//   },
// };
