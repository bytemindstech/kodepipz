<div class="container">
  <div class="row">
    <div class="col mt-5">
  <center>    <h3>Login</h3></center>
    </div>
  </div>
</div>

 <form class="form">
  <label for="username">Username</label><br>
  <input type="text" id="username" name="username" placeholder="username" required><br>
  <label for="password">Password</label><br>
  <input type="password" id="pass" name="password" placeholder="password" required><br>
  <p>Don't have an account<a href=""><u>Register</u></a></p>
  <input type="submit" value="submit">
 </form>
 <br>
 <br>
<style>
 .form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
}

.form label {
  display: block;
  margin-bottom: 5px;
}

.form input[type="text"],
.form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
