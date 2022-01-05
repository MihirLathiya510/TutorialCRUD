const express= require("express");
const logger=require("morgan");
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const swaggerUI=require("swagger-ui-express");
const tutorialRoutes=require("./routes/tutorials");
const swaggerfile=require("./swagger.json");

dotenv.config();

//app area

const app=express()
const PORT=process.env.PORT || 3000;

//swagger

//middleware

app.use(express.json());
app.use(logger("dev"));
app.use("/swagger",swaggerUI.serve,swaggerUI.setup(swaggerfile))
app.use("/tutorials",tutorialRoutes)
//db
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true }).then(()=>{
    console.log("DB connected")
})

//server 
app.listen(PORT,()=>console.log(`server is running on ${PORT}`)); 
