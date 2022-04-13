import Layout from './Component/Layout';
import {Routes , Route} from 'react-router-dom';
import About from "./Component/Pages/About";
import Blog from "./Component/Pages/Blog";
import Contact from "./Component/Pages/Contact";
import Home from "./Component/Pages/Home";
import NotFound from "./Component/Pages/NotFound";
import Posts from './Component/Pages/Posts';
import SinglePost from './Component/Pages/SinglePost';
import './App.css'
function App() {
 
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index  element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="posts" element={<Posts/>}/>
       <Route path='posts/:id' element={<SinglePost/>}/>
       <Route path="blog" element={<Blog/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
       </Route>
     </Routes>
   
    </>
  );
}

export default App;
