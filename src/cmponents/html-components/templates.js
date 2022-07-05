  function Templates(){
    return(
      <div className="template-container">
        <div className="enemy_cards_container playing_cards"> </div>
        <template id="my_card_template">
          <button className="my_card_button">
            <img src='' alt=""/>
          </button>
        </template>
        <template id='template-play-field'>
          <div className="play_cards_set">
            <img src="unknown" alt="" className="beat-card"/>
            <img src="unknown" alt="" className="to-beated-card"/>
          </div>
        </template>
      </div>
    );
  }
  export default Templates;