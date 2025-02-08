import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Category from './components/Category'
import Classification from './components/Classification';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Category/>
      <Classification title='أضيف حديثًا' API_url='https://api.itbook.store/1.0/search/mongodb'/>
      <Classification title='الأكثر مبيعاً' API_url='https://api.itbook.store/1.0/search/mongodb'/>
      <Classification title='جريمة وتشويق' API_url='https://api.itbook.store/1.0/search/mongodb'/>
      <Classification title='عروض مميزة' API_url='https://api.itbook.store/1.0/search/mongodb'/>
      <Classification title='English Books' API_url='https://api.itbook.store/1.0/search/mongodb'/>
      <Classification title='هدايا وأدوات مكتبية' API_url='https://api.itbook.store/1.0/search/mongodb'/>

    </div>
  );
}

export default App;
