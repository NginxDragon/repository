<?php
require '../../../support/connect/functions.php';
if (isset($_POST["register"]) ) {

if ( registrasi($_POST) > 0 ) {
echo "<script>
alert('Registrasi user baru berhasil!');
document.location.href = 'logout.php';
</script>";

}else{
echo mysqli_error($conn);
}

}
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../../../support/css/stylebody.css">
    <link rel="stylesheet" type="text/css" href="../../../support/css/stylecolor.css">
    <link rel="stylesheet" type="text/css" href="../../../support/css/stylecard.css">
    <link rel="stylesheet" type="text/css" href="../../../support/css/styleform.css">
    <title>Halaman Registrasi</title>
  </head>
<body>   

<!-- Content here -->

<div class="card border-light mb-3 mx-auto" style="max-width: 25rem;">
  <div class="card-header warnaheader">Halaman Registrasi</div>
  <div class="card-body">
    
  <form action="" method="post">
  <div class="form-group">
    <label for="username">ID Pegawai</label>
    <input type="text" class="form-control" id="username" name="username" placeholder="154603" required autocomplete="off">
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="pasword" name="password" required autocomplete="off">
  </div>

  <div class="form-group">
    <label for="password2">Konfirmasi Password</label>
    <input type="password" class="form-control" id="pasword2" name="password2" required autocomplete="off">
  </div>
  <button type="submit" class="btn warnabutton" name="register">Register!</button>
</form>

  </div>
</div>

<!-- Content here -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>