import logo from './logo.svg';
import './App.css';
import './reveal.css';
import Intro from './pages/intro/Intro';
import Navigation from './pages/navigation/Navigation';
import Article from './pages/article/Article';
import Footer from './pages/footer/Footer';

function App() {
	const scrolls = [
		{
			"query": ".article-content#first",
			"type": "id",
			"animation": "RevealTextLeft 0.5s ease-out"
		},
		{
			"query": ".article-content#second",
			"type": "class",
			"animation": "RevealTextTop 0.5s ease-out"
		},
		{
			"query": "#article-third-content",
			"type": "id",
			"animation": "RevealTextRight 0.5s ease-out"
		},
		{
			"query": ".article-content#forth",
			"type": "id",
			"animation": "RevealTextLeft 0.5s ease-out"
		},
		{
			"query": "#article-fifth-content",
			"type": "id",
			"animation": "RevealTextLeft 0.5s ease-out"
		},
		{
			"query": ".article-content#sixth",
			"type": "id",
			"animation": "RevealTextTop 0.5s ease-out"
		}
	];
	
	function handleQueryAnimation(query, scroll) {
		console.log(query)
		let screenHeight = window.screen.height;
		const queryOffsets = query.getBoundingClientRect();
		const queryTop = queryOffsets.top;
		if(queryTop < (screenHeight - (screenHeight / 3.78))) {
			query.style.opacity = 1;
			if(query.style.animation.length === 0) {
				query.style.animation = scroll.animation;
			};
		} else {
			query.style.animation = `none`;
			query.style.opacity = 0;
			query.style.removeProperty(`animation`);
		};
	};
	
	window.addEventListener("scroll", () => {
		for(const scroll of scrolls) {
			switch(scroll.type) {
				case "id":
					let query = document.querySelector(scroll.query);
					if(query) {
						handleQueryAnimation(query, scroll);
					};
					break;
				case "class":
					let queryAll = document.querySelectorAll(scroll.query);
					if(queryAll) {
						for(let query of queryAll) {
							handleQueryAnimation(query, scroll);
						};
					};
					break;
			};
		};
	});
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
