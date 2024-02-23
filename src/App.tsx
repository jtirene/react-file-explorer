import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FileExplorer from "./FileExplorer";

const router = createBrowserRouter([
  {
    path: "*",
    element: <FileExplorer />,
  },
]);

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
