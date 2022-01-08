import Profile from './components/profile/Profile';
import Packages from './components/packages/Packages';
import Inspirations from './components/inspirations/Inspirations';
import Specialties from './components/specialties/Specialties';
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Profile/>
        <Packages/>
        <Inspirations/>
        <Specialties/>
      </div>
    </div>
  );
}

export default App;
