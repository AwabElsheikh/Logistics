import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Quote } from "./components/Quote";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "quote", Component: Quote },
    ],
  },
]);
