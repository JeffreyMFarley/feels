import './App.less'
import Mood from './components/Mood'

function App() {
  return (
    <div id="App">
      <header>Header</header>
      <main>
        <nav>
          <Mood />
        </nav>
        <section>
          <article>Article 1</article>
          <article>Article 2</article>
          <article>Article 3</article>
        </section>
        <aside>ads</aside>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
