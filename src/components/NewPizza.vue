<template>
  <form>
    <h3>Add new pizza:</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea type="text" id="description"></textarea>
    </div>
    <p>
      <strong>Option 1:</strong>
    </p>
    <div class="form-group">
      <label for="size1">Size (")</label>
      <input type="text" id="size1" />
    </div>
    <div class="form-group">
      <label for="price1">Price</label>
      <input type="text" id="price1" />
    </div>
    <p>
      <strong>Option 2:</strong>
    </p>
    <div class="form-group">
      <label for="size2">Size (")</label>
      <input type="text" id="size2" />
    </div>
    <div class="form-group">
      <label for="price2">Price</label>
      <input type="text" id="price2" />
    </div>
    <button type="button" class="btn_green">Add</button>
  </form>
</template>

<script>
export default {
  name: "addNewPizza"
};
</script>

<style>
.form-group {
  margin: 10px 0;
}
label {
  display: block;
  margin: 0 0 10px 0;
}
input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(254, 254, 252);
  border: solid 1px #f79e38;
}

button {
  background: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>