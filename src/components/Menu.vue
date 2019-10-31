<template>
  <div class="menu_wrapper">
    <!-- menu -->
    <div class="menu">
      <h3>~ Authentic handmade pizza ~</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>~ Pepperoni ~</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis nostrum praesentium sequi perspiciatis, repudiandae dolore earum rem. Architecto magni inventore iste nostrum illum quam saepe voluptate est? Laudantium, doloremque?</small>
            </td>
          </tr>
          <tr>
            <td>9"</td>
            <td>$6.95</td>
            <td>
              <button type="button" class="btn_green">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
}

.menu_wrapper {
  display: flex;
  flex-direction: column;
}

.menu {
  background: #f1e6da;
  border-radius: 3px;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}

@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }

  .menu {
    width: 65vw;
  }
}
</style>