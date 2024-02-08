import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Reservations from "./components/Reservations/Reservations";
import GlobalStyles from "./styles/GlobalStyles";
import { DineProvider } from "./context/DineContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <DineProvider>
        <RouterProvider router={router} />
      </DineProvider>
    </>
  );
}

export default App;
