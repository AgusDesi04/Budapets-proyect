import env from "../utils/env.utils.js";

 const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;

  if (env.mode === "dev") {
    console.error("Error stack:", error.stack);
  } else {
    console.error("Error:", error.message);
  }

  res.status(status).json({
    success: false,
    message: env.mode === "dev" ? error.message : "Error interno del servidor",
    ...(env.mode === "dev" && { stack: error.stack }) 
  });
};

export default errorHandler