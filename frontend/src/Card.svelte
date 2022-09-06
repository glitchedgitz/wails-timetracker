<div class="card">
  <h1>I am a reusable box</h1>
  <slot></slot>
</div>

<style>
  .card {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    padding: 1em;
    margin: 0 0 1em 0;
  }
</style>