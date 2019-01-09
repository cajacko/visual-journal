import html from "./html";
import style from "./style";
import script from "./script";
import { render } from "../utils/ejs";

export default (data, options) => render(html(style, script), data, options);
