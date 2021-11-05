import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Conferences from './components/Conferences';
import Footer from './components/Footer';
import AddCourse from './components/forms/AddCourse';
import LoginForm from './components/forms/LoginForm';
import SignUp from './components/forms/SignUp';
import Header from './components/Header';
import AuthProvider from './context/AuthProvider';
import DepartmentPage from './pages/DepartmentPage';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Semesterlist from './pages/Semesterlist';
import SubjectList from './pages/SubjectList';
import SubjectWisePage from './pages/SubjectWisePage';
function App() {
  return (
  <Router>
   <AuthProvider>
   <Header/>
    <Switch>

   
      <Route path='/profile'>
      <Profile/>
     </Route>
     <Route path='/login'>
       <LoginForm/>
     </Route>

     {/* <Route  path='/check'>
<CoursePost/>
     </Route> */}
     

<Route  path='/check'>
<AddCourse/>
     </Route>
     <Route path='/homepage'><HomePage/></Route>
<Route path='/conferences'> <Conferences/></Route>
     <Route exact  path='/departments/btm/:id'>
      <SubjectList/> 
      </Route>
      <Route exact  path='/departments/cse/:id'>
      <SubjectList/> 
      </Route>
      <Route exact  path='/departments/cee/:id'>
      <SubjectList/> 
      </Route>
      <Route exact  path='/departments/mpe/:id'>
      <SubjectList/> 
      </Route>
      <Route exact  path='/departments/tve/:id'>
      <SubjectList/> 
      </Route>
      <Route exact  path='/departments/eee/:id'>
      <SubjectList/> 
      </Route>

      <Route exact  path='/subjects/:id'>
      <SubjectWisePage/> 
      </Route>
            
      <Route  path='/departments/:department/:semester/:coursecode'>
 <SubjectWisePage/>
      </Route>
     <Route  path='/departments/:department'>
      <Semesterlist/> 
      </Route>
  <Route exact path='/departments'>
  <DepartmentPage/>
  </Route>



  

  <Route   path ='/signup'><SignUp/> </Route>
     
      
        <Route  exact path ='/'><HomePage/></Route>

     


  <Route path="*">404 Not Found</Route>

    </Switch>
    <Footer/>
   </AuthProvider>
  </Router>
  );
}

export default App;
