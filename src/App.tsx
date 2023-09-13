import { Provider } from "react-redux";
import store from "@/store";
import "@/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import Router from "@/router/router";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#d9d9d9" highlightColor="#aaa">
        <Provider store={store}>
          <Toaster
            position="top-center"
            toastOptions={{
              // Define default options
              className: "text-blue-300",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
          <Router />
        </Provider>
      </SkeletonTheme>
    </>
  );
}

export default App;
