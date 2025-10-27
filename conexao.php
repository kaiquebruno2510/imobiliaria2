<?php
$servidor = "localhost";
$usuario = "root"; // padrão do XAMPP
$senha = ""; // vazio por padrão
$banco = "meus_dados"; // nome do seu banco

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
} else {
    echo "✅ Conexão bem-sucedida!";
}
?>