import './App.scss';
import { Navbar } from './components';
import { Conversations, Footer, Grow, Header, Users } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Grow />
        <Conversations />
        <Users />
      </main>
      <Footer />
    </div>
  );
}

export default App;
