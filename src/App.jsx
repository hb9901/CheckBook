import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import ExpenditureProvider from "./provider/ExpenditureProvider";
import router from "./routes/router";

function App() {
  return (
    <>
      <ExpenditureProvider>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ExpenditureProvider>
    </>
  );
}

export default App;
