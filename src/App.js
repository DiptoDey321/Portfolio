import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <Layout></Layout>,
      children : [
        {
          path : '/',
          element: <Home></Home>
        },
        {
          path : '/contact',
          element: <Contact></Contact>
        },
        {
          path : '/project/:id',
          element: <ProjectDetails></ProjectDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
