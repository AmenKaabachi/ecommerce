import './styles/App.css'
import styles from './styles/Headers.module.css'
import './styles/Paragraphs.module.css'
import Navbar from './components/Navbar'
// import statement for unused 'navbarStyles'
import './styles/Navbar.module.css'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container" style={{ paddingTop: '70px' }}>
        <section>
          <h1 className={`${styles.h1} text-center mt-5`}>Welcome to our shop !!!</h1>
        </section>
      </main>
    </div>
  )
}

export default App
