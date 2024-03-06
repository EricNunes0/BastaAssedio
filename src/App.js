import logo from './logo.svg';
import './App.css';
import Intro from './pages/intro/Intro';
import Navigation from './pages/navigation/Navigation';
import Article from './pages/article/Article';
import Footer from './pages/footer/Footer';

function App() {
	return (
		<>
			<Navigation></Navigation>
			<Intro></Intro>
			<Article></Article>
			<Footer></Footer>
		</>
  	);
}

export default App;
