import express from "express";
import path from "path";
import layout from "express-ejs-layouts";
import { serverConfig } from "./config.js";
import { viewRouter } from "./routes/view.routes.js";
import { mainRouter } from "./routes/main.routes.js";
import { model } from "./model/model.js";
import { cartRouter } from "./routes/cart.routes.js";

const app = express();
app.set("layout", "layout/layout")
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")))
app.use(layout);
app.use(express.urlencoded({extended: true}));

app.use(model)

app.use(viewRouter);

app.use(cartRouter);
app.use("/api", mainRouter);

let {PORT} = serverConfig;
app.listen(PORT, () => console.log(`Server is running on ${PORT}-port`));

// authentication
// order (count)
// logout

// profile update
// bookmark