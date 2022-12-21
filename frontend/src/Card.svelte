<script>
  export let data;

  import Icon from "@iconify/svelte";
</script>

<div class="card">
  <input bind:value={data.title} />

  <div class="right">
    {data.time}
    <button on:click>
      <Icon icon="material-symbols:play-arrow-rounded" />
    </button>
  </div>
</div>

<style>
  .card {
    width: inherit;
    height: 40px;
    background: rgb(12, 13, 21);
    border-radius: 8px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    font-size: 14px;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.15); */
  }

  .active * {
    color: rgb(8, 158, 106);
  }

  .card:last-child {
    border-bottom: none;
  }
  .right {
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 12px;
  }

  input {
    background: none;
    border: none;
    outline: none;
    padding: 0px 16px;
    height: 100%;
    width: auto;
  }

  input:hover {
    background: rgba(103, 103, 103, 0.1);
  }

  button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
  }

  button:hover {
    background: rgb(8, 158, 106);
  }
</style>
