import recognizing_card from './recognizing.js';
let cards_object = {
  six_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/819px-Playing_card_spade_6.svg.png',1,'spears'],
  six_squares :['https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/1200px-Playing_card_diamond_6.svg.png',1,'squares'],
  six_hearts :['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1200px-Playing_card_heart_6.svg.png',1,'hearts'],
  six_leaves :['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkG3mvESzVKHo54_8nzN85XqcVa4QT6vVHD98UfP5dYslYq5UEG2HmwBDiIXdxEceVlKo&usqp=CAU',1,'leaves'],
  seven_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png',2,'spears'],
  seven_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/819px-Playing_card_heart_7.svg.png',2,'hearts'],
  seven_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/819px-Playing_card_club_7.svg.png',2,'leaves'],
  seven_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/1200px-Playing_card_diamond_7.svg.png',2,'squares'],
  eight_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/1200px-Playing_card_heart_8.svg.png',3,'hearts'],
  eight_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/1200px-Playing_card_diamond_8.svg.png',3,'squares'],
  eight_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/1638px-Playing_card_spade_8.svg.png',3,'spears'],
  eight_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/1200px-Playing_card_club_8.svg.png',3,'leaves'],
  nine_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/1200px-Playing_card_heart_9.svg.png',4,'hearts'],
  nine_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/819px-Playing_card_club_9.svg.png',4,'leaves'],
  nine_spears : ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/1200px-Playing_card_spade_9.svg.png',4,'spears'],
  nine_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/1200px-Playing_card_diamond_9.svg.png',4,'squares'],
  ten_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/1200px-Playing_card_heart_10.svg.png',5,'hearts'],
  ten_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/1638px-Playing_card_spade_10.svg.png',5,'spears'],
  ten_leaves:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/819px-Playing_card_club_10.svg.png',5,'leaves'],
  ten_squares:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/1200px-Playing_card_diamond_10.svg.png',5,'squares'],
  jack_leaves:['https://media.istockphoto.com/vectors/poker-playing-card-jack-club-new-design-of-playing-cards-vector-id1277184951?k=20&m=1277184951&s=170667a&w=0&h=372MSwHgxGHwgX8JC50yAlEZni7FgUpzwk7u4HBEyog=',6,'leaves'],
  jack_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/English_pattern_jack_of_spades.svg/360px-English_pattern_jack_of_spades.svg.png',6,'spears'],
  jack_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/English_pattern_jack_of_hearts.svg/360px-English_pattern_jack_of_hearts.svg.png',6,'hearts'],
  jack_squares:['https://previews.123rf.com/images/synchr/synchr1209/synchr120900010/15278736-hand-drawn-jack-of-diamonds-playing-card.jpg',6,'squares'],
  queen_hearts:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsvIf-RV_yw0FKMW3nMdUe-u7s0xzXnylvXHQQrxOATaqoYR5bk2FQ_1Aq7os8uacWU0&usqp=CAU',7,'hearts'],
  queen_leaves:['https://i.pinimg.com/236x/3a/94/14/3a9414b746760a40ec53bb0dc7e8f179.jpg',7,'leaves'],
  queen_spears:['https://previews.123rf.com/images/mannaggia/mannaggia1409/mannaggia140900013/32651175-queen-of-spades-playing-card.jpg',7,'spears'],
  queen_squares:['https://media.istockphoto.com/vectors/queen-of-diamonds-vector-id165931594?b=1&k=20&m=165931594&s=170667a&w=0&h=9qLHBhwAbyYNiCRlu4CjsUyVNGFPzHicTMrG-QbkatQ=',7,'squares'],
  king_hearts:['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Atlas_deck_king_of_hearts.svg/1200px-Atlas_deck_king_of_hearts.svg.png',8,'hearts'],
  king_leaves:['https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png',8,'leaves'],
  king_squares:['https://previews.123rf.com/images/mannaggia/mannaggia0911/mannaggia091100009/5957152-king-of-diamonds-playing-card.jpg',8,'squares'],
  king_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Atlas_deck_king_of_spades.svg/800px-Atlas_deck_king_of_spades.svg.png',8,'spears'],
  ace_spears:['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ace_of_spades.svg/706px-Ace_of_spades.svg.png',9,'spears'],
  ace_hearts:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_y3kPW1ZBh4cXuuyW_DMwJMU0iIuOnPCTQHg-6rtQIvF-aWsNYoDgF1IO2PA7aU6fMM&usqp=CAU',9,'hearts'],
  ace_squares:['https://img.favpng.com/6/22/23/playing-card-ace-of-hearts-suit-ace-of-spades-png-favpng-2W0YEWWnFNHrHnWnH1guZP6SL.jpg',9,'squares'],
  ace_leaves:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufPIDtEHH4j7LHphChOlE1lcoqq9bQ9Wa4A&usqp=CAU',9,'leaves']
}
export default cards_object;
window.onload = function(){
  let html = document.querySelector('html');
  let press_F5 = document.getElementById('press_F5');
  let lights_out_container = document.querySelector('.lights_out_container_inner');
  let lights_out_button = document.getElementById('lights_out_button');
  let deck_container = document.getElementById('deck_container_inner');
  let play_field_container = document.querySelector('.play_field_container');
  let my_cards_container = document.querySelector('.my_cards_container');
  let enemy_cards_container = document.querySelector('.enemy_cards_container');
  let p_my = document.getElementById('p_my');
  let p_enemys = document.getElementById('p_enemys');
  let template_my_card = document.getElementById('my_card_template');
  let template_play = document.getElementById('template-play-field');
  let press_F5_buttons = document.querySelectorAll('.press_F5_button');
  let enemy_cards_filler = document.querySelector('.enemy_cards_filler');
  let start_game_button = document.getElementById('starter_button');
  let welcoming_slide = document.querySelector('.welcoming-slide');
  let opponent_slide = document.querySelector('.opponents-slide');
  let back_to_main_from_opponents = document.getElementById('back_to_main_from_opponents');
  let buttons_opponents = document.getElementsByClassName('button-opponent');
  let button_fool = document.getElementById('button_fool');
  let button_greedy = document.getElementById('button_greedy');
  let button_swindler = document.getElementById('button_swindler');
  let greedy_regime = false;
  let swindler_regime = false;
  let choice_trump =  Math.floor(Math.random() * 3);
  let permission_to_succumb = false;
  if(choice_trump == 0){
    choice_trump = 'hearts';
  }else if(choice_trump ==1){
    choice_trump='spears';
  }else if(choice_trump ==2){
    choice_trump = 'leaves';
  }else if(choice_trump ==3){
    choice_trump = 'squares';
  }
  let my_trump_importance_array = [];
  let enemy_importance_array = [];
  let choice_badge_trump= choice_trump;
  let small_my_trump = 0;
  let small_enemy_trump = 0;
  
  let giving_cards = Object.values(cards_object);
  let deck_card_src = 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Atlas_deck_card_back_green_and_dark_red.svg';
  let trump_array=[];
  for(let i=0;i<Object.keys(cards_object).length;i++){
    if(Object.values(cards_object)[i][2] == choice_trump){
      Object.values(cards_object)[i][1] = Object.values(cards_object)[i][1] + 100;
      trump_array.push(Object.values(cards_object)[i]);

    }
  }

  let chosen_trump = 0;




  let chosen_trump_index =0;
  for(let i=0;i<Object.values(cards_object).length;i++){
    let img = document.createElement('img');
    if(i==0){
      chosen_trump = Math.floor(Math.random() * trump_array.length);
      for(let ii=0;ii<Object.values(cards_object).length;ii++){
        if(trump_array[chosen_trump] == Object.values(cards_object)[ii]){
          chosen_trump_index = ii;
          break;
        }
      }
      img.src = trump_array[chosen_trump][0];
      chosen_trump = trump_array[chosen_trump][0];
    }else{
      img.src = deck_card_src;
    }
    deck_container.appendChild(img);
  }

  let been_cards_array = [];
  been_cards_array.push(chosen_trump_index);



  function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
  }




  let seeking_for_repeats_function = function(was_card,giving_card){
    for(let ii=0;ii<been_cards_array.length;ii++){
      if(giving_card ==been_cards_array[ii]){
        was_card=true;
      }
    }
    return was_card;
  }
  let shuffling_function = function(container){
    if(deck_container.children.length > 6-container.children.length){
      let my_cards = [];
      for(let i=0;i<6-container.children.length;i++){
        let giving_card= Math.floor(Math.random()*giving_cards.length);
        let was_card = false;
        for(let ii=0;ii<been_cards_array.length;ii++){
          if(giving_card ==been_cards_array[ii]){
            was_card=true;
          }
        }
        if(was_card==false){
          my_cards.push(Object.values(cards_object)[giving_card]);
        }else{
          while(was_card == true){
            giving_card= Math.floor(Math.random()*giving_cards.length);
            let was_card_2 = false;
            was_card_2= seeking_for_repeats_function(was_card_2,giving_card);
            if(was_card_2 == false){
              my_cards.push(Object.values(cards_object)[giving_card]);
              was_card=false;
            }
          }
        }

        been_cards_array.push(giving_card);
      }
      my_cards = bubbleSort(my_cards);
      return my_cards;
    }else{
      let my_cards = [];
      for(let i=0;i<deck_container.children.length;i++){
        let giving_card= Math.floor(Math.random()*giving_cards.length);
        let was_card = false;
        if(i == deck_container.children.length-1){ 
          been_cards_array.splice(0,1);
        }
        for(let ii=0;ii<been_cards_array.length;ii++){
          if(giving_card ==been_cards_array[ii]){
            was_card=true;
          }
        }
      
        if(was_card==false){
          my_cards.push(Object.values(cards_object)[giving_card]);
        }else{
          while(was_card == true){
            giving_card= Math.floor(Math.random()*giving_cards.length);
            let was_card_2 = false;
            was_card_2= seeking_for_repeats_function(was_card_2,giving_card);
            if(was_card_2 == false){
              my_cards.push(Object.values(cards_object)[giving_card]);
              was_card=false;
            }
          }
        }

        been_cards_array.push(giving_card);
      }
      my_cards = bubbleSort(my_cards);
      return my_cards;
    }

  }

  function sorting_cards(container) {
    let arr = [];
    let my_cards_imgs = container.querySelectorAll('img');
    let my_cards_inf = [];
    for(let i=0;i<my_cards_imgs.length;i++){
      arr.push(recognizing_card(my_cards_imgs[i])[0]);
      my_cards_inf.push(recognizing_card(my_cards_imgs[i]));
    }
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    for(let i=0;i<arr.length;i++){
      for(let ii=0;ii<my_cards_inf.length;ii++){
        if(arr[i] == my_cards_inf[ii][0]){
          my_cards_imgs[i].src = my_cards_inf[ii][2];
          my_cards_inf.splice(ii,1);
          break;
        }
      }
    }
    return arr;
  }

  let placing_my_cards = function(){
    if(deck_container.children.length>0){
      let quanity_placing_numbers = shuffling_function(my_cards_container);
      for(let i=0;i<quanity_placing_numbers.length;i++){
        let my_new_card = template_my_card.cloneNode(true);
        let my_new_card_img =my_new_card.querySelector('img');
        let my_new_card_button = my_new_card.querySelector('button');
        my_new_card_img.src = quanity_placing_numbers[i][0];
        my_cards_container.appendChild(my_new_card_button);
        if(quanity_placing_numbers[i][2] ==choice_badge_trump){
          my_trump_importance_array.push(quanity_placing_numbers[i][1]);
        }
      }

      if(deck_container.children.length>quanity_placing_numbers.length){
        for(let i=quanity_placing_numbers.length;i>0;i--){
          deck_container.children[i].remove();
          } 
      }else{
          for(let ii=0;ii<5;ii++){
            for(let i=0;i<deck_container.children.length;i++){
              deck_container.children[i].remove();
            }
          }
        }
    }
    sorting_cards(my_cards_container);
  }
  placing_my_cards();
  let placing_enemy_cards = function(){
    if(deck_container.children.length>0){
      let enemy_cards_quanity = shuffling_function(enemy_cards_container);
      for(let i=0;i<enemy_cards_quanity.length;i++){
        let img = document.createElement('img');
        let img_cover = document.createElement('img');
        img_cover.src = deck_card_src;
        img.src = enemy_cards_quanity[i][0];
        enemy_cards_filler.appendChild(img_cover);
        enemy_cards_container.appendChild(img);

        if(enemy_cards_quanity[i][2] == choice_badge_trump){
          enemy_importance_array.push(enemy_cards_quanity[i][1]);
        }
      }
      if(deck_container.children.length>enemy_cards_quanity.length){
        for(let i=enemy_cards_quanity.length;i>0;i--){
          deck_container.children[i].remove();
        } 
      }else{
        for(let ii=0;ii<5;ii++){
          for(let i=0;i<deck_container.children.length;i++){
            deck_container.children[i].remove();
          }
        }
      }
    }
    sorting_cards(enemy_cards_container);

  }
  placing_enemy_cards();
  let whose_turn = '';
  small_my_trump = Math.min.apply(null, my_trump_importance_array);
  small_enemy_trump =Math.min.apply(null, enemy_importance_array);
  let flag_to_switch_move = false;

  if(my_trump_importance_array.length !==0 & enemy_importance_array.length !==0){
    if(small_my_trump > small_enemy_trump){

      p_enemys.textContent = 'the first move';
      whose_turn = 'enemys';
      flag_to_switch_move = true;
    }else{
      p_my.textContent = 'the first move';
      whose_turn = 'my';
      flag_to_switch_move = false;
    }
  }else{
    p_my.textContent = 'the first move';
    flag_to_switch_move = false;
  }

  let counting_doubles_function = function(array){
    var counts = {};

  for (var i = 0; i < array.length; i++)
      counts[array[i]] = (counts[array[i]] + 1) || 1;
    return counts;
  }
  let count_for_clicking = 0;





  let futher_moves_enemy = function(enemy_worth_array,enemy_house_array,enemy_cards_inf){
    let play_field_imgs = play_field_container.querySelectorAll('img');
    let play_field_imgs_inf = [];
    let giving_cards = [];
    let to_resume = false;
    for(let i=0;i<play_field_imgs.length;i++){
      play_field_imgs_inf.push(recognizing_card(play_field_imgs[i]));
    }
    for(let i=0;i<play_field_imgs_inf.length;i++){// fix the bag with ace leaves
      for(let ii=0;ii<enemy_worth_array.length;ii++){
        if(enemy_worth_array[ii] ==play_field_imgs_inf[i][0]  || enemy_worth_array[ii] ==play_field_imgs_inf[i][0]-100){
          giving_cards.push(enemy_cards_inf[ii]);
          to_resume = true;
          break;       
        }else if(deck_container.children.length ==0){
          if(enemy_worth_array[ii]-100 ==play_field_imgs_inf[i][0]){
            giving_cards.push(enemy_cards_inf[ii]);
            to_resume = true;
            break;
          }
        }
      }
    }
    if(to_resume == true){
      let chosen_card_inf = giving_cards[0];
      let chosen_card = recognizing_card('','find_img',chosen_card_inf[0],chosen_card_inf[1]); 
      return chosen_card;
    }else{
      return 'lights_out';
    } 
  }



  let first_move_enemy = function(){
    let enemy_worth_array = [];
    let enemy_house_array = [];
    let enemy_cards_inf = [];
    for(let i=0;i<enemy_cards_container.children.length;i++){
    let enemy_card_inf= recognizing_card(enemy_cards_container.children[i]);
    enemy_worth_array.push(enemy_card_inf[0]);
    enemy_house_array.push(enemy_card_inf[1]);
    enemy_cards_inf.push(enemy_card_inf);
    }
    if(permission_to_succumb == true){
      let chosen_worth_card = Math.max.apply(null,enemy_worth_array);
      let chosen_house_card = '';
      for(let i=0;i<enemy_cards_inf.length;i++){
        if(chosen_worth_card == enemy_cards_inf[i][0]){
          chosen_house_card = enemy_cards_inf[i][1];
          break;
        }
      }
      let chosen_card = '';
      chosen_card = recognizing_card('', 'find_img',chosen_worth_card,chosen_house_card);
      return chosen_card;
    }else{
      let counting_doubles_object = counting_doubles_function(enemy_worth_array);
      let doubles = false;
      for(let i=0;i<Object.keys(counting_doubles_object).length;i++){
        if(Object.values(counting_doubles_object)[i] >1){
          doubles = true;
          break;
        }
      }
      if(doubles == true){
        let repeats = [];
        for(let i=0;i<Object.values(counting_doubles_object).length;i++){
          repeats.push(Object.values(counting_doubles_object)[i]);
        }
        let the_biggest_repeat = Math.max.apply(null,repeats);
        let enemys_worth_cards = 0;
        for(let i=0;i<Object.keys(counting_doubles_object).length;i++){
          if(Object.values(counting_doubles_object)[i] == the_biggest_repeat){
            enemys_worth_cards = Object.keys(counting_doubles_object)[i];
            break;
          }
        }
        let enemys_worth_cards_array = [];
        for(let i=0;i<enemy_cards_container.children.length;i++){
          if(recognizing_card(enemy_cards_container.children[i])[0] ==enemys_worth_cards ){
            enemys_worth_cards_array.push(recognizing_card(enemy_cards_container.children[i]));
          }
        }
        let chosen_cards = [];
        for(let i=0;i<enemys_worth_cards_array.length;i++){
          chosen_cards.push(recognizing_card('','find_img',enemys_worth_cards_array[i][0],enemys_worth_cards_array[i][1])) ;
        }
        return chosen_cards[0];
      }else{
        let chosen_worth_card = Math.min.apply(null,enemy_worth_array);
        let chosen_house_card = '';
        for(let i=0;i<enemy_cards_inf.length;i++){
          if(chosen_worth_card == enemy_cards_inf[i][0]){
            chosen_house_card = enemy_cards_inf[i][1];
            break;
          }
        }
        let chosen_card = '';
        chosen_card = recognizing_card('', 'find_img',chosen_worth_card,chosen_house_card);
        return chosen_card;
      }
    }
  }
  
  let selecting_enemys_cards = function(){
    let enemy_worth_array = [];
    let enemy_house_array = [];
    let enemy_cards_inf = [];
    for(let i=0;i<enemy_cards_container.children.length;i++){
    let enemy_card_inf= recognizing_card(enemy_cards_container.children[i]);
    enemy_worth_array.push(enemy_card_inf[0]);
    enemy_house_array.push(enemy_card_inf[1]);
    enemy_cards_inf.push(enemy_card_inf);
    }
    if(play_field_container.childElementCount ==0){
      return first_move_enemy();
    }else{
      return futher_moves_enemy(enemy_worth_array,enemy_house_array, enemy_cards_inf);
    }
  }
  let clicked_card = 0;


  let accept_listener  = function(){
    lights_out_button.removeEventListener('click',accept_listener);
    lights_out_button.style.display = 'none';
    let play_field_imgs = play_field_container.querySelectorAll('img');
    for(let i=0;i<play_field_imgs.length;i++){
      play_field_imgs[i].parentElement.remove();
      play_field_imgs[i].remove();
      if(play_field_imgs[i].src !== "unknown"){
        making_my_card(play_field_imgs[i]);
      }else{
        break;
      }
    }
    my_cards_container.children[my_cards_container.children.length-1].remove();

    enemys_move('accept');
  }


  let enemys_move_forming_card = function(enemy_card_src){
    let enemy_imgs = enemy_cards_container.querySelectorAll('img');
    let enemy_imgs_filler = enemy_cards_filler.querySelectorAll('img');
    let victory_flag = false;
    for(let i=0;i<enemy_imgs.length;i++){
      if(enemy_imgs[i].src == enemy_card_src){
        enemy_imgs_filler[i].remove();
        enemy_imgs[i].remove();
        if(enemy_cards_container.children.length ==0){
          victory_flag = true;
        }
        break;
      }
    }
    let template_play_2 = template_play.cloneNode(true);
    let div_template_2 = template_play_2.querySelector('div');
    let enemy_card = div_template_2.querySelector('.beat-card');
    enemy_card.src = enemy_card_src;
    play_field_container.appendChild(div_template_2);
    if(victory_flag == true){
      return enemys_move('victory');
    }
    
  }
  let permitting_to_beat = function(inf_1,inf_2){
    let permission = false;
    if(inf_1[0] > inf_2[0]){
      if(inf_1[1] == inf_2[1] || inf_1[1] ==choice_badge_trump){
        permission = true;
      }
    }
    return permission;
  }
  let making_my_card = function(img){
    let button = document.createElement('button');
    button.classList.add('my_card_button');
    button.appendChild(img);
    my_cards_container.appendChild(button);
  }




  let my_response = function(event){
    let response_card = event.target;
    let last_set_cards = play_field_container.children[play_field_container.children.length-1];
    let beat_card = last_set_cards.querySelector('.beat-card');
    let beat_card_inf = recognizing_card(beat_card);
    let response_card_inf = recognizing_card(response_card);
    let restriction_to_pulsing = false;
    let my_cards_imgs = my_cards_container.querySelectorAll('img');
    for(let i=0;i<my_cards_imgs.length;i++){
      let my_card_inf = recognizing_card(my_cards_imgs[i]);
      if(permitting_to_beat(my_card_inf,beat_card_inf)){
        restriction_to_pulsing = true;
      }
    }
    if(restriction_to_pulsing == false){
      lights_out_button.parentElement.classList.add('pulsing_lights_out_button');
    }
    if(permitting_to_beat(response_card_inf,beat_card_inf)){
      let button_response_card = response_card.parentElement;
      button_response_card.remove();
      if(my_cards_container.children.length ==0){
        let beated_card = last_set_cards.querySelector('.to-beated-card');
        beated_card.style.display = 'block';
        beated_card.src = response_card.src; 
        enemys_move('my victory');
      }else{
        let beated_card = last_set_cards.querySelector('.to-beated-card');
        beated_card.src = response_card.src; 
        beated_card.style.display = 'block';
        for(let i=0;i<my_cards_container.children.length;i++){
          my_cards_container.children[i].removeEventListener('click',my_response);
        }
        enemys_move();
      }
    }
  }

  let lights_out_function = function(){
    let play_field_imgs = play_field_container.querySelectorAll('img');
    for(let i=0;i<play_field_imgs.length;i++){
      play_field_imgs[i].parentElement.remove();
      play_field_imgs[i].remove();
      play_field_imgs[i].src = deck_card_src;
      lights_out_container.appendChild(play_field_imgs[i]);

    }
  }


  let enemys_move = function(result){
    lights_out_button.parentElement.classList.remove('pulsing_lights_out_button');
    p_enemys.textContent = 'moves';
    p_my.textContent = '';
    if(result !== 'victory' & result !== 'my victory'){
      if(result == 'lights_out'){
        setTimeout(() => {   
          lights_out_function();
          placing_enemy_cards();
          placing_my_cards(); 
          for(let i=0;i<my_cards_container.children.length;i++){
            my_cards_container.children[i].removeEventListener('click',my_response);
          }
          lights_out_button.style.display = 'none';
          lights_out_button.removeEventListener('click',accept_listener);
          return my_move();
        }, 500);
      }else if(result != 'accept'){
        selecting_enemys_cards();
        let selected_enemy_card = selecting_enemys_cards();
        if(selected_enemy_card == 'lights_out'){
          return enemys_move('lights_out');
        } 
        enemys_move_forming_card(selected_enemy_card);
        lights_out_button.style.display = 'block';
        lights_out_button.textContent = 'accept';
        lights_out_button.addEventListener('click',accept_listener);
        for(let i=0;i<my_cards_container.children.length;i++){
          my_cards_container.children[i].addEventListener('click',my_response);
        }
      }else if(result == 'accept'){
        placing_my_cards();
        placing_enemy_cards();
        enemys_move();
      }
    }else if(result == 'victory'){
      p_enemys.textContent = 'WON';
      lights_out_button.removeEventListener('click',accept_listener);
      lights_out_button.remove();
      enemy_cards_filler.classList.add('noscroll');
      setTimeout(() => {  
        html.classList.add('end-game');
        html.classList.add('enemys-victory');
      }, 500);
    }else if(result == 'my victory'){
      p_enemys.textContent = '';
      p_my.textContent = 'WON';
      lights_out_button.removeEventListener('click',accept_listener);
      lights_out_button.remove();
      html.classList.add('end-game');
      html.classList.add('my-victory');
      my_cards_container.classList.add('noscroll');
    }
  }

  let enemys_response = function(){
    let play_set = play_field_container.children[play_field_container.children.length-1];
    let beat_card = play_set.querySelector('.beat-card');
    let beat_card_inf =  recognizing_card(beat_card);
    let enemys_cards_inf = [];
    for(let i=0;i<enemy_cards_container.children.length;i++){
      enemys_cards_inf.push(recognizing_card(enemy_cards_container.children[i]));
    }
    let response_cards = [];
    let response_cards_worth = [];
    for(let i=0;i<enemys_cards_inf.length;i++){
      if(enemys_cards_inf[i][0] > beat_card_inf[0] & enemys_cards_inf[i][1] == beat_card_inf[1] ){
        response_cards.push(enemys_cards_inf[i]);
        response_cards_worth.push(enemys_cards_inf[i][0]);
      }else if( enemys_cards_inf[i][1] == choice_badge_trump & enemys_cards_inf[i][0] > beat_card_inf[0]){
        response_cards.push(enemys_cards_inf[i]);
        response_cards_worth.push(enemys_cards_inf[i][0]);
      }
    }
    if(response_cards.length !=0){
      let chosen_card_worth = Math.min.apply(null, response_cards_worth);
      let chosen_card_src = '';
      if(chosen_card_worth >100){
        chosen_card_src = recognizing_card('','find_img',chosen_card_worth,choice_badge_trump);
      }else{
        chosen_card_src = recognizing_card('','find_img',chosen_card_worth,beat_card_inf[1]);
      }
      let to_beated_card = play_set.querySelector('.to-beated-card');
      to_beated_card.style.display = 'block';
      to_beated_card.src =chosen_card_src; 
      if(play_field_container.children.length >0){
        lights_out_button.addEventListener('click',lights_out_listener);
        lights_out_button.textContent = 'lights out';
        lights_out_button.style.display = 'block';
      }
      for(let i=0;i<enemy_cards_container.children.length;i++){
        if(enemy_cards_container.children[i].src == chosen_card_src){
          enemy_cards_container.children[i].remove();
          enemy_cards_filler.children[i].remove();
          break;
        }
      }

      if(enemy_cards_container.children.length ==0){
        my_move('enemys victory');
      }
    }else{
      my_move('accept');
    }
  }

  let my_move_listener = function(event){
    let card = event.target;
    let card_inf = recognizing_card(card);
    let play_set = document.getElementById('template-play-field').cloneNode(true);
    let play_set_div = play_set.querySelector('div');
    if(play_field_container.children.length ==0){
      let play_set_beat_img = play_set_div.querySelector('.beat-card');
      card.parentElement.remove();
      if(my_cards_container.children.length ==0){
        play_set_beat_img.src = card.src;
        play_field_container.appendChild(play_set_div);
        enemys_move('my victory');
      }else{
        play_set_beat_img.src = card.src;
        play_field_container.appendChild(play_set_div);
        enemys_response();
      }
    }else{
      let play_field_imgs = play_field_container.querySelectorAll('img');
      let permission_to_give = false;
      let my_cards_imgs = my_cards_container.querySelectorAll('img');
      let restriction_to_pulsing = false;
      for(let i=0;i<my_cards_imgs.length;i++){
        let my_card_inf = recognizing_card(my_cards_imgs[i]);
        for(let ii=0;ii<play_field_imgs.length;ii++){
          let play_field_img_inf = recognizing_card(play_field_imgs[ii]);
          if(play_field_img_inf[0] == my_card_inf[0] || play_field_img_inf[0] -100== my_card_inf[0] ||play_field_img_inf[0]== my_card_inf[0] -100){
            restriction_to_pulsing = true;
            break;
          }
        }
      }
      if(restriction_to_pulsing == false){
        lights_out_button.parentElement.classList.add('pulsing_lights_out_button');
      }
      for(let i=0;i<play_field_imgs.length;i++){
        let play_field_card_inf = recognizing_card(play_field_imgs[i]);
        if(play_field_card_inf[0] == card_inf[0] ||play_field_card_inf[0] -100== card_inf[0] || play_field_card_inf[0] == card_inf[0]-100){
          permission_to_give = true;
          break;
        }
      }
      if(permission_to_give == true){
        let play_set_beat_img = play_set_div.querySelector('.beat-card');
        card.parentElement.remove();
        play_set_beat_img.src = card.src;
        play_field_container.appendChild(play_set_div);
        if(my_cards_container.children.length ==0){
          play_set_beat_img.src = card.src;
          play_field_container.appendChild(play_set_div);
          enemys_move('my victory');
        }else{
          enemys_response();
        }
      }
    }
  } 
  let lights_out_listener = function(){
    let play_field_imgs = play_field_container.querySelectorAll('img');
    for(let i=0;i<play_field_imgs.length;i++){
      play_field_imgs[i].parentElement.remove();
      play_field_imgs[i].remove();
      play_field_imgs[i].src = deck_card_src;
      lights_out_container.appendChild(play_field_imgs[i]);
    }
    placing_my_cards();
    placing_enemy_cards();
    lights_out_button.removeEventListener('click',lights_out_listener);
    lights_out_button.parentElement.classList.remove('pulsing_lights_out_button');
    lights_out_button.style.display = 'none';
    my_move('lights_out');
  }
  let accept_function = function(){
    let play_field_imgs = play_field_container.querySelectorAll('img');
    for(let i=0;i<play_field_imgs.length;i++){
      let button = play_field_imgs[i].parentElement;
      button.remove();
      play_field_imgs[i].remove();
      enemy_cards_container.appendChild(play_field_imgs[i]);
      let img = document.createElement('img');
      img.src = deck_card_src;
      enemy_cards_filler.appendChild(img);
    }
    enemy_cards_container.children[enemy_cards_container.children.length-1].remove();
    enemy_cards_filler.children[enemy_cards_filler.children.length-1].remove();  
  }
  let my_move = function(result){
    lights_out_button.removeEventListener('click',lights_out_listener);
    lights_out_button.style.display = 'none';
    lights_out_button.parentElement.classList.remove('pulsing_lights_out_button');
    if(result !== 'my victory' & result !== 'enemys victory'){
      if(result == 'lights_out'){
        for(let i=0;i<my_cards_container.children.length;i++){
          my_cards_container.children[i].removeEventListener('click',my_move_listener);
        }
    
        return enemys_move();
      }else{
        p_enemys.textContent = '';
        p_my.textContent = 'moves';
      if(result == 'accept'){
        for(let i=0;i<my_cards_container.children.length;i++){
          my_cards_container.children[i].removeEventListener('click',my_move_listener);
        }
        setTimeout(() => {   
          accept_function();
          placing_my_cards();
          placing_enemy_cards();
          return my_move();
        }, 500);
      }else{
        for(let i=0;i<my_cards_container.children.length;i++){
          my_cards_container.children[i].addEventListener('click',my_move_listener);
        }
      }
      
    }
      
    }else if(result == 'enemys victory'){

      p_enemys.textContent = 'WON';
      p_my.textContent = '';
      lights_out_button.removeEventListener('click',lights_out_listener);
      lights_out_button.remove();
      enemy_cards_filler.classList.add('noscroll');
      setTimeout(() => {  
        html.classList.add('end-game');
        html.classList.add('enemys-victory');
      }, 500);
    }else if(result == 'my victory'){
      p_enemys.textContent = '';
      p_my.textContent = 'WON';
      lights_out_button.removeEventListener('click',lights_out_listener);
      lights_out_button.remove();
      html.classList.add('end-game');
      html.classList.add('my-victory');
      my_cards_container.classList.add('noscroll');
    }
  }
  
  html.classList.add('start-game');
  let start_game_function = function(){
    html.classList.remove('start-game');
    welcoming_slide.style.display = 'none';
    opponent_slide.style.display = 'none';
    start_game_button.removeEventListener('click',start_game_function);
    if(flag_to_switch_move == true){
      for(let i=0;i<my_cards_container.children.length;i++){  
        my_cards_container.children[i].removeEventListener('click', my_move_listener);
      }
      setTimeout(() => {
        enemys_move();
      }, 1000)
    }else{
      my_move();
    }
  }
  let play_button_function = function(){
    welcoming_slide.style.display = 'none';
    opponent_slide.style.display = 'flex';
  }
  for(let i=0;i<buttons_opponents.length;i++){
    buttons_opponents[i].addEventListener('click',start_game_function);
  }
  button_greedy.addEventListener('click',function(){
    greedy_regime = true;
  })
  button_swindler.addEventListener('click',function(){
    swindler_regime = true;
  })
  let back_to_main_from_opponents_function = function(){
    welcoming_slide.style.display = 'flex';
    opponent_slide.style.display = 'none';
  }
  start_game_button.addEventListener('click',play_button_function);
  back_to_main_from_opponents.addEventListener('click',back_to_main_from_opponents_function);

  for(let i=0;i<press_F5_buttons.length;i++){
    press_F5_buttons[i].addEventListener('click', function(){

    });
  }
}
