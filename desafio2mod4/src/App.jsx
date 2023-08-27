import './App.css'
import RegisterBox from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This exports the whole icon packs for Brand and Solid.
library.add(fab, fas)



function App() {


  return (
    <>

        
      <RegisterBox /> 
  
      

    </>
  )
}

export default App
