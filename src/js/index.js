// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import navbar from "./navbar";

const content = document.querySelector("#content");

content.append(navbar());
