import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Blogs/Bookmark'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-3 px-80 py-12 w-full bg-orange-300'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  )
}

export default App
