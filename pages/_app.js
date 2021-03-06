
import ProgressBar from "@badrap/bar-of-progress";
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Router from "next/router"


// we have imported a librarydraoprogress

const progress=new ProgressBar({
  size:4,
  color: "#FE595E",
  className:"z-50",
  delay:100,
});

// when router starts finsh this will happen
Router.events.on("routeChangeStart",progress.start);
Router.events.on("routeChangeComplete",progress.finish);
Router.events.on("routeChangeError",progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
