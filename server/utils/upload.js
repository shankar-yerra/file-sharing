import multer from "multer"; // to build middleware

const upload = multer({ dest: 'uploads'});

export default upload; 