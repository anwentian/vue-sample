import Home from "./components/Home.vue"
import Column from "./components/Column.vue"
import User from "./components/User.vue"
import Article from "./components/Article.vue"
import Music from "./components/Music.vue"
export default[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/column',
      component:Column
    },
    {
      path:'/:tp/article/:id',
      component:Article
    },
    {
      path:'/:tp/music/:id',
      component:Music
    },
    {path:"/",redirect:"/home"}
   // {path:"*",redirect:"/home"}
]

