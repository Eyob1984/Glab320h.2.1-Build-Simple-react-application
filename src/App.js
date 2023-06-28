import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content color='blue' text='This is my first React Application!' />
      <Content color='red' text='Wish me luck...' />
      <Content color='green' text='I 
      think I have got it!' />
      <Footer />
    </div>
  );
}

export default App;
