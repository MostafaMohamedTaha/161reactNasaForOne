import NavbarComponent from './components/NavbarComponent'
import Sidebar1 from './components/Sidebar1'
import Project1 from './components/Project1'
import Footer1 from './components/Footer1'
import 'flowbite'
function App() {
  return (
    <div className='dark:bg-slate-900'>
    <NavbarComponent/>
    <Sidebar1 className='mt-[100px]'/>
    <Project1/>
    <Footer1/>
    </div>
  )
}

export default App
