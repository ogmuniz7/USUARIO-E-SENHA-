function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verificar se o nome de usuário e senha são válidos
    if (username === "admin" && password === "admin") {
      alert("Login bem-sucedido!");
      // Aqui você pode redirecionar para a página de sucesso ou realizar outras ações desejadas
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  }
  