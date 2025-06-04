<div class="game">
  <div class="grid">
    {#each cards as {word, type, flipped}, index}
      <Card {word} {type} {flipped} onclick={handleCard(index)}/>
    {:else}
      <div class="newgame">Press the button to start a new game!</div>
    {/each}
  </div>
  <div class="scores">
    <img class="logo" src="https://cdn.freebiesupply.com/logos/large/2x/theme-logo-png-transparent.png" alt="tehemes logo">
    <div class="blue">{bScore}/8</div>
    <div class="red">{rScore}/8</div>
    <div class="controls">
      <button class="reset" onclick={newGame}>Reset / New Game</button>
      <div class="qrContainer">
        {#if cards.length}
          Game board QR!
          <img class="qr" src={`https://api.qrserver.com/v1/create-qr-code/?margin=5&bgcolor=102-51-153&color=fff&data=${url}/board?${board}`} alt="game board qr code">
        {:else}
          Start a new game to generate a QR code.
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .qrContainer{
    display: flex;
    flex-direction: column;
    background-color: rebeccapurple;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    font-weight: 900;
    color: rgb(255, 255, 255);
    height: 200px;
  }
  .qr{
    height: 150px;
    width: 150px;
    border-radius: 15px;
    margin-top: 6px;
  }
  .newgame{
    grid-row: 1 / 6;
    grid-column: 1 / 6;
    color: white;
    font-weight: 600;
    font-size: x-large;
    width: fit-content;
    height: fit-content;
  }
  .reset{
    background-color: rgb(208, 48, 48);
    border: none;
    border-radius: 10px;
    max-height: 60px;
    font-weight: 400;
    font-size: large;
    color: whitesmoke;
  }
  .reset:hover{
    background-color: rgb(249, 82, 82);
    border: rgb(253, 149, 149) 6px solid;
  }
  .logo{
    background-color: aliceblue;
    max-height: 100px;
    object-fit: scale-down;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .controls,.blue,.red{
    height: 200%;
    border-radius: 10px;
    padding: 20px 4px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .blue,.red{
    height: 40%;
    color: white;
    font-size: x-large;
    font-weight: 500;
    display:flex;
    align-items: start;
    justify-content: center;
    padding-left: 15px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    background-blend-mode: overlay;
  }
  .blue{
    background-color: rgb(39, 39, 116);
    background-image: url('$lib/img/cornflowers.png');
  }
  .red{
    background-color: rgb(255, 73, 73);
    background-image: url('$lib/img/roses.png');
  }
  .scores{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 24px 24px;
    background-color: rgb(30, 30, 30);
    box-shadow: -15px 0px 50px;
    background-image: url('https://64.media.tumblr.com/b772a97b16e120cb5cbaa5c70f266892/feb5328e15bd343c-64/s540x810/a8e5fd4dd2f3232dab1d05619e147618e0c90b67.pnj');
    
    background-size: cover;
    background-blend-mode: color-burn;
  }
  .game{
    display: flex;
  }
  .grid{
    display: grid;
    background-color: rgb(30, 30, 30);
    padding: 40px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
  }
</style>

<script>
  import Card from "./Card.svelte";
  import {words, types} from "$lib/words";
    
  let cards = []
  let bScore = 0
  let rScore = 0
  let url = window.location.href
  let board = ""

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function generateCards() {
    shuffle(words)
    shuffle(types)
    return words.slice(0,25).map(({word, word_id}, index) => ({word_id, word, type:types[index], flipped:false}));
  }

  function generateBoard(cards){
    let board = ''
    for (let index = 0; index < cards.length; index++) {
      console.log(cards[index])
      const {word_id, word, type} = cards[index]
      
      switch(type){
      case 'Rosies':
        board += `${word_id}_a-`
        break;
      case 'Cornflowers':
        board += `${word_id}_b-`
        break;
      case 'Dandelion':
        board += `${word_id}_c-`
        break;
      case 'Thorns':
        board += `${word_id}_d-`
        break;
      }
    }
    return board
  }

  function newGame(){
    let card = generateCards()
    console.log(card)
    cards = []
    bScore = 0
    rScore = 0
    board = generateBoard(card)
    console.log(board)
    for (let i = 0; i < card.length; i++) {
      cards.push(card[i])
    }
  }

  function handleCard(index) {
    cards[index].flipped = true;
    switch(cards[index].type){
      case 'Rosies':
        rScore += 1;
        break;
      case 'Cornflowers':
        bScore += 1;
    }
  }
</script>