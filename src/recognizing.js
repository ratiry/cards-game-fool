
import cards_object from './js.js';
let recognizing_card = function(card,button, worth, house){
  if(button == 'button'){
    let card_img = card.querySelector('img');
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][0] == card_img.src){
        let card_inf =[]; 
        card_inf.push(Object.values(cards_object)[i][1]);
        card_inf.push(Object.values(cards_object)[i][2]);
        return card_inf;
      }
    }
  }else if(button != 'find_img'){
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][0] == card.src){
        let card_inf =[]; 
        card_inf.push(Object.values(cards_object)[i][1]);
        card_inf.push(Object.values(cards_object)[i][2]);
        card_inf.push(Object.values(cards_object)[i][0]);
        return card_inf;
      }
    }
  }else if(button == 'find_img'){
    for(let i=0;i<Object.values(cards_object).length;i++){
      if(Object.values(cards_object)[i][1] == worth & Object.values(cards_object)[i][2] == house){
        return Object.values(cards_object)[i][0];
      }
    }
  }
} 

export default recognizing_card;