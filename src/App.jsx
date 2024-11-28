import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Jobs from "./components/jobs";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/protectedRoute";
import JobsItemDetails from "./components/jobsItemDetails";


const App = ()=> (

  <Routes>


              <Route path = "/"  element = { <ProtectedRoute Component = {Home}/> }></Route>

              <Route path = "/login"  element = { <Login/> }></Route>

              <Route path = "/jobs"  element = { <ProtectedRoute Component = {Jobs}/> }></Route>

              <Route path = "/jobs/:id"  element = { <ProtectedRoute Component = {JobsItemDetails}/> }></Route>

              <Route path = "/*"  element = { <NotFound/> }></Route>


  </Routes>


)



export default App;