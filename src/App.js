import React  from 'react';
import Navigation from './components/headers/navigation'
import Topbar from './components/layouts/topbar';
import AllProjects from './components/layouts/allProjects';

class App extends React.Component {
    
    render() {
        
        return(
            <div>
                <Navigation />
                <Topbar  className="flex-end"/>
                <AllProjects />
            </div>
        )
    }
}

export default App;