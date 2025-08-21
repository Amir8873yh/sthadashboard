import { Toaster } from "react-hot-toast";
import AppNavigator from "./config/AppNavigator";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          position: "top-center",
          duration: 3000,
          maxToasts: 1,
          style: {
            zIndex: 9999,
          },
        }}
      />
      <AppNavigator />
    </>
  );
}

export default App;
