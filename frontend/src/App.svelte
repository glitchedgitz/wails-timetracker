<script>
  import { each } from "svelte/internal";
  import { Start } from "../wailsjs/go/main/App.js";
  import { Stop } from "../wailsjs/go/main/App.js";
  import { Initialize, SetTime } from "../wailsjs/go/main/App.js";
  import Card from "./Card.svelte";
  import TitleBar from "./TitleBar.svelte";

  // @ts-ignore
  window.runtime.EventsOn("time", function (...args) {
    hours = args[0];
    minutes = args[1];
    console.log(args);
  });

  Initialize();

  // let buttonText = "Start";
  // let cal = true;

  let hours;
  let minutes;
  let time;
  let active;

  $: {
    SetTIme(projects[active].hours, projects[active].minutes);
    projects[active].hours = hours;
    projects[active].minutes = minutes;
  }

  let projects = [
    { name: "Project1", hours: 0, minutes: 0 },
    { name: "Project2", hours: 0, minutes: 0 },
    { name: "Project3", hours: 0, minutes: 0 },
    { name: "Project4", hours: 0, minutes: 0 },
  ];
</script>

<main>
  <TitleBar />
  <!-- <h1>{hour}hr {minute}min</h1>
  <button class={cal ? "start" : "stop"} on:click={cal ? start : stop}
    >{buttonText}</button
  > -->
  <div class="cards">
    {#each projects as data, i}
      <Card {data} on:click={() => (active = i)} />
    {/each}
  </div>
</main>

<style>
  .cards {
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
</style>
