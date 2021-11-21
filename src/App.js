import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ArticleDetail } from './components/ArticleDetail';
import { Articles } from './components/Articles';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import ArticlesState from './context/articles/ArticlesState';
import 'semantic-ui-css/semantic.min.css'
import './assets/App.scss';

function App() {
  return (
    <ArticlesState>
      <Router>
        <main className="app">
          <Nav />
          <div className='container'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path='/articles' element={<Articles />} />
                <Route path='/articles/:articleId' element={<ArticleDetail />} />
              </Routes>
            </div>
        </main>
      </Router>
    </ArticlesState>
  );
}

export default App;
