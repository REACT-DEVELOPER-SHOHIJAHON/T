import { useRoutes } from 'react-router-dom'

import Home from './home/Home'
import Details from './details/Details'
import Auth from './auth/Auth'
import SignUp from './auth/signup/SignUp'
import LogIn from './auth/login/LogIn'
import Profile from './dashboard/profile/Profile'
import NotFound from "./notfound/NotFound"
import Nav from '../components/nav/Nav'
import Create from './dashboard/create/Create'
import Private from './private/Private'
import Dashboard from './dashboard/Dashboard'

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

const RouterController = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout><Home/></Layout>
    },
    {
      path: "/details/:id",
      element: <Layout><Details/></Layout>
    },
    {
      path: "/dashboard",
      element: <Private/>,
      children: [
        {
          path: "/dashboard/",
          element: <Dashboard/>,
          children: [
            {
              path: "/dashboard/profile",
              element: <Profile/>
            },
            {
              path: "/dashboard/create",
              element: <Create/>
            }
          ]
        },
      ]
    },
    {
      path: "/auth",
      element: <Auth/>,
      children:[
        {
          path: "/auth/signUp",
          element: <SignUp/>
        },
        {
          path: "/auth/logIn",
          element: <LogIn/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    },
  ])
}

export default RouterController