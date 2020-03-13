import Home from './components/Home';
import Friends from './components/Friends';
import Profile from './components/Profile';
import FriendDetail from './components/FriendDetail';
import page404 from './components/404';
import Login from './components/Login';
export default  [
    {
        // will match everything
        path: '*',
        component: page404
    },
    {path: "/", component: Home, name: "home",  meta: { requiresAuth: true }},
    {path: "/friends",
      component: Friends,
      name:"friends",
      meta: { requiresAuth: true },
      children:[
        {path:"/view/:id", name: "friendDetail", component: FriendDetail}
      ]
    },
    {path: "/friends/:id", 
        meta: { requiresAuth: true },
        component: Profile, name:"profile"
    },
    {path: "/login", component:Login, name:"login"}
  ]