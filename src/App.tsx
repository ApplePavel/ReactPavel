import './App.css'
import BurgerButton from './components/button.tsx';
import Title from './components/title.tsx';

function App() {

  return (
    <>
      <BurgerButton
      />
      <div className='wrapper'>
        <Title 
            text={'Мир, дружба, жвачка!'}
            level={1}        
        />
      </div>  
    </>
  )
}

export default App
