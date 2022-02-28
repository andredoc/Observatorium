import Navigation from './components/Navigation/Navigation'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { MessageProviderWrapper } from './context/userMessage.context'

function App() {
  return (
    <>
      <Navigation />

    <MessageProviderWrapper>
        <AppRoutes />
    </MessageProviderWrapper>
      
    </>
  )
}
export default App