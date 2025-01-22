<!DOCTYPE html>
<html lang="en"></html>

<html>

<head>
    <title>ContactCV</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="CV.css">
    <?php $pdo = new PDO('mysql:host=localhost;dbname=note_app', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    var_dump($pdo); ?>
</head>
<body>
<h1>&#8734; Hilistina Banze (she/her) &#8734; </h1>
    <header id="header">
        <nav>
            <div class="btn-group" role="group">
                <button type="button" class="button" id="home"><a href="CV_home.html">home</a></button>
                <button type="button" class="button" id="home"><a href="CV 11_2024.html">about</a></button>
                <button type="button" class="button" id="home"><a href="contact.html">contact</a></button>
            </div>
        </nav>
    </header>
<br>
<br>
<br>
<h4>
Welcome <?php echo $_POST["name"]; ?> !<br>
Your email address is: <?php echo $_POST["email"]; ?> <br> <br>
Your message has been sent! <br>
 I'll get in touch with you as soon as possible.
 </h4>
</body>
</html>

