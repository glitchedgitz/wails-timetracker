<script>
  function min() {
    // @ts-ignore
    window.runtime.WindowMinimise();
  }

  function max() {
    // @ts-ignore
    window.runtime.WindowMaximise();
  }

  function quit() {
    // @ts-ignore
    window.runtime.Quit();
  }
</script>

<header style="--wails-draggable:drag">
  <span on:click={min} class="icon" style=" margin-left: auto;">-</span>
  <span on:click={quit}>x</span>
</header>

<style>
  header {
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    display: flex;
    cursor: grab;
    width: 100%;
    /* background: rgba(0, 0, 0, 0.5); */
  }
</style>
