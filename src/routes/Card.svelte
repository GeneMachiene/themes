<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class={flipped ? 'container_flipped' : 'container'}
  {onclick}
  role="button"
  tabindex="0"
  >
    <div class="back {type}">{word ? word.toUpperCase() : "undefined"}</div>
    <div class="front">{word ? word.toUpperCase() : "undefined"}</div>
</div>

<style>
  .container_flipped,
  .container{
    user-select: none;
    position: relative;
    width: 95%;
    max-height: 90%;
    transition: transform .3s, box-shadow .3s;
    
    border: 3px inset rgb(63, 63, 63);
    border-radius: 12px;

    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .container_flipped{
    transform: rotateY(180deg);
  }
  .container:hover{
    transform: scale(1.1) translate(-10px, -10px);
    box-shadow: 10px 10px 10px;
  }

  .front,
  .back{
    position: absolute;

    font-weight: 900;
    font-size: x-large;

    border: 2px;
    border-style: solid;
    border-radius: 6px;
    padding: 2px 6px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .front{
    border-color: bisque;
    background-color: bisque;
    background-image: url('$lib/img/card.png');
  }
  .back{
    transform: rotateY(180deg);
    font-size: medium;
    font-weight: 600;
  }

  .Rosies{
    background-image: url('$lib/img/roses.png');
    background-color: rgb(169, 30, 30);
    border-color: rgb(252, 125, 125);
  }
  .Cornflowers{
    background-image: url('$lib/img/cornflowers.png');
    background-color: #1f2b81;
    border-color: rgb(131, 153, 242);
  }
  .Dandelion{
    background-image: url('$lib/img/dandelion.png');
    background-color: rgb(255, 247, 0);
    border-color: rgb(255, 231, 164);
  }
  .Thorns{
    background-image: url('$lib/img/thorns.png');
    background-color: rgb(30, 30, 30);
    border-color: rgb(117, 117, 117);
    color: whitesmoke;
  }
</style>

<script>
  let {word, type, flipped, onclick} = $props();
</script>