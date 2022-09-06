<script>
  import {Start} from '../wailsjs/go/main/App.js'
  import {Stop} from '../wailsjs/go/main/App.js'
  import {Initialize} from '../wailsjs/go/main/App.js'

  
  // @ts-ignore
  window.runtime.EventsOn("time", function(...args) {
      hour = args[0]
      minute = args[1]
      console.log(args)
  })

  Initialize()
  
  let buttonText = "Start"
  let cal = true

  let hour = "0"
  let minute = "0"
  
  function start(){
    Start()
    buttonText = "Stop"
    cal = !cal
  }

  function stop(){
      Stop()
      buttonText = "Start"
      cal = !cal
  }

  function min(){
  // @ts-ignore
  window.runtime.WindowMinimise()
  }
  function max(){
  // @ts-ignore
  window.runtime.WindowMaximise()
  }

  function quit(){
  // @ts-ignore
  window.runtime.Quit()
  }

</script>

<main>
  <header>
    <span id="title-label" data-wails-drag>Time Tracker</span>
		<span on:click="{min}">-</span>
		<span on:click="{quit}">x</span>
  </header>
  <h1>{hour}hr {minute}min</h1>
  <button class="{cal ? 'start' : 'stop'}" on:click="{cal ? start : stop}">{buttonText}</button>
</main>

<style>
  header{
    cursor:'pointer';
    width:100%;
    height: 32px;
    background:rgba(0, 0, 0, 0.5);
  }
  button{
    font-size:16px;
    padding:16px 24px;
    color:white;
    border-radius:16px;
    border:none;
    outline: none;
  }
  .start{
    background: rgb(23, 38, 121);
  }
  .stop{
    background: rgb(110, 36, 15);
  }
</style>
