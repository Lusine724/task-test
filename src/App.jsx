import cls from "./App.module.scss"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>   
    <div className={cls.main}>
      <Header />
      <Main />      
    </div>
    <Footer />
    </>
  )
}

export default App
