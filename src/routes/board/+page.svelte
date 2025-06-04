<div class="grid">
  {#each board_parse as {word_id, type}}
  <div class='container'>
    <div class="front {type}">{word_id}</div>
  </div>
  {/each}
</div>

<style>
  .grid{
    display: grid;
    background-color: rgb(30, 30, 30);
    padding: 40px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
  }

  .container{
    user-select: none;
    position: relative;
    width: 95%;
    max-height: 90%;
    
    border: 1px solid rgb(10, 10, 10);
    border-radius: 12px;
  }

  .front{
    font-weight: 900;
    font-size: large;

    border: 1px;
    border-radius: 6px;
    padding: 2px 6px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    background-image: url('$lib/img/card.png');
    background-blend-mode: overlay;
  }

  .a{
    background-image: url('$lib/img/roses.png');
    background-color: rgb(190, 109, 109);
  }
  .b{
    background-image: url('$lib/img/cornflowers.png');
    background-color: #5963ab;
  }
  .c{
    background-image: url('$lib/img/dandelion.png');
    background-color: rgb(196, 192, 88);
  }
  .d{
    background-image: url('$lib/img/thorns.png');
    background-color: rgb(15, 15, 15);
    color: whitesmoke;
  }
</style>

<script>
    import { page } from '$app/stores';
    import {words} from '$lib/words'
    function parse_word(Id) {
      return words[Id-1].word;
    }

    const board = $page.url.searchParams.toString().split('-').slice(0,-1)
    const board_parse = board.map((word)=>({word_id: parse_word(word.split('_')[0]), type: word.split('_')[1]}))
    console.log(board_parse)
</script>