import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Layout from './layout'
import Contact from './components/contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

//One Way of Defining

// const router = createBrowserRouter([     
// {
//   path: '/',
//   element: <Layout/>,
//   children : [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path : "about",
//       element : <About/>
//     },
//     {
//       path: 'Contact',
//       element : <Contact/>
//     }
//   ]
// }
// ])

//Second Way of Defining

const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path = '/' element ={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path = 'user/:userid' element={<User/>}/>
      <Route 
      loader = {githubInfoLoader}
      path = 'Github' element={<Github/>}/>
    </Route>
    )

)
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
