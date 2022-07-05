import logo from './logo.svg';
import './App.scss';
import Lights_out from './cmponents/html-components/Lights_out';
import Playing_cards from './cmponents/html-components/playing_cards';
import './js.js';
import Welcoming_slide from './cmponents/html-components/slides/weloming_slide';
import Templates from './cmponents/html-components/templates';
import Opponents_slide from './cmponents/html-components/slides/opponents_slide';
import Victory_popup from './cmponents/html-components/popups/victory_popup';
import Defeat_popup from './cmponents/html-components/popups/defeat_popup';
function App() {
  return (
    <section className="cards_section">
        <Lights_out />
        <Playing_cards/>
        <div className="deck_container">
          <p id='p_enemys'></p>
          <div id='deck_container_inner'></div>
          <p id='p_my'></p>
      </div>
      <Templates/>
      <div className="overlay"></div>
      <Welcoming_slide/>
      <Opponents_slide/>
      <Victory_popup />
      <Defeat_popup />
    </section>
  );
}

export default App;
