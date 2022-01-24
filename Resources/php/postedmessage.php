<!DOCTYPE html>
<?php 
      $pdo = require './connect.php';

      // if ($_SERVER['REQUEST_METHOD'] == "POST") {
        
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto'];
        $mensagem = $_POST['mensagem'];

        $sql_query = 'INSERT INTO user_message (nome, email, assunto, mensagem) VALUES (:nome, :email, :assunto, :mensagem);';
        
        $statement = $pdo->prepare($sql_query);

        $statement->execute([
          ':nome' => $nome,
          ':email' => $email,
          ':assunto' => $assunto,
          ':mensagem' => $mensagem
        ]);
      
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Óptica Gomes | Home</title>
    <link
      rel="icon"
      href="./img/logotipo/oculista.jpg"
      type="image/x-icon"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
    <!-- <link rel="stylesheet" href="./Resources/ionicons-2.0.1/css/ionicons.css" /> -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <header class="header" id="header_id">
      <nav class="nav__bar">
        <ul class="nav__bar__container">
          <a href="#header"
            ><img
              class="left"
              src="./Resources/material/logo_grande.jpg"
              alt="Logotipo da loja"
          /></a>

          <li class="nav__bar--item">
            <a href="#header_id" class="nav__bar--link">Home</a>
          </li>

          <li class="nav__bar--item">
            <a href="#Sobrenos" class="nav__bar--link">Sobre nós</a>
          </li>
          <!-- <li class="nav__bar--item">
              <div class="dropdown">
                  <button class="dropbtn">Serviços</button>
                <div class="dropdown-content">
                  <a href="#">Oftalmologia</a>
                  <a href="#">Optometria</a>
                  <a href="#">Contactologia</a>
                  <a href="#">Exames Visuais Gratuitos</a>
                  <a href="#">Medição da Pressão Intraocular</a>
                  <a href="#">Gabinete técnico</a>
                </div>
              </div>
          </li> -->
          <li class="nav__bar--item">
            <a href="#Acordos" class="nav__bar--link">Acordos</a>
          </li>
          <li class="nav__bar--item">
            <a href="#Atualizacoes" class="nav__bar--link">Atualizações</a>
          </li>
          <li class="nav__bar--item">
            <a href="#Testemunhos" class="nav__bar--link">Testemunhos</a>
          </li>
          <li class="nav__bar--item">
            <a href="#Galeria" class="nav__bar--link">Galeria</a>
          </li>
          <li class="nav__bar--item">
            <a href="#Contactos" class="nav__bar--link">Contactos</a>
          </li>
          <li class="nav__bar--item">
            <a href="#formulario" class="nav__bar--link">Formulário</a>
          </li>
        </ul>
      </nav>
      <div class="center">
        
        <h2>Obrigado por submeter a sua mensagem.</h2>  
      </div>
    </header>