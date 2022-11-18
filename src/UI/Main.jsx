import { Route, Switch } from 'react-router-dom';
import Aboute from '../Page/Aboute';
import Contact from '../Page/Contact';
import Home from '../Page/Home';
import NodFoud from '../Page/NodFoud';
import Category from '../Page/Category';
import Composition from '../Page/Composition';
import './Main.css';

const Main = () => {
  return (
    <>
    <main className='text-center'>
      <div className="container">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aboute' component={Aboute} />
          <Route path='/contact' component={Contact} />
          <Route path='/category/:name' component={Category}/>
          <Route path='/meals/:id' component={Composition}/>
          <Route component={NodFoud} />
        </Switch>
      </div>
    </main>
    </>

  )
}

export default Main