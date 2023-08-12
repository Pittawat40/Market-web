import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBasketShopping,
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faTrashCan,
  faStar,
  faStarHalfStroke,
  faCalendar,
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronRight,
  faHashtag,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faBasketShopping,
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faTrashCan,
  faStar,
  faStarHalfStroke,
  faCalendar,
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronRight,
  faHashtag,
  faShareNodes
);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
