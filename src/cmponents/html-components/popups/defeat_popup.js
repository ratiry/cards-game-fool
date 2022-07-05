function Defeat_popup (){// defeat but it's victory 
  return(
    <div className="end-game-popup defeat">
    <div className="title">
      <p className='congrats'>Regrets!</p>
      <p className='result'>You lose!</p>
      <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/722/871/632.jpg" alt=""/>
    </div>
    <div className="advise">
      <span>
        if you want to play again , you'd rather
      </span>
    </div>
    <div className="press_F5-container">
      <button className='press_F5_button'>
        click here
      </button>
    </div>
  </div>
  );
}
export default Defeat_popup;