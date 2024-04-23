<?php
// BANCO DE DADOS -> MySQLi

//1 CREDENCIAIS DO BANCO
$servior = "localhost";
$usuario = "root";
$senha = "";
$bancodedados = "estacionamento";
//2 CRIAR CONEXAO 
$conexao = mysqli_connect("$servidor", "$usuario", "$senha", "$estacionamento");

//CONFERIR CONEXAO
if(!$conexao){
    die("Verificar sua conexão." .mysqli_connect_error());
}