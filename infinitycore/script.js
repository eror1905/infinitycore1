// script.js
const users = [
    { phone: "1234567890", email: "user@example.com", password: "password123" } // Test kullanıcısı
  ];
  
  // Giriş yapma işlemi
  document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const user = users.find(user => user.email === email);
  
    if (user && user.password === password) {
      alert("Başarıyla giriş yaptınız!");
      // Burada giriş işlemini başarılı şekilde yapabilirsiniz
    } else {
      document.getElementById("login-error").innerText = "Geçersiz email veya şifre.";
    }
  });
  
  // Kayıt olma işlemi
  document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const phone = document.getElementById("register-phone").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
  
    // Kayıtlı kullanıcı kontrolü
    const userExists = users.some(user => user.email === email || user.phone === phone);
  
    if (userExists) {
      document.getElementById("register-error").innerText = "Bu email veya telefon numarası zaten kayıtlı.";
    } else {
      // Kullanıcıyı sisteme kaydet
      users.push({ phone, email, password });
      alert("Başarıyla kaydoldunuz!");
      toggleAuthSection('login');
    }
  });
  
  // Ekranlar arasında geçiş
  function toggleAuthSection(section) {
    if (section === 'login') {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("register-section").style.display = "none";
    } else {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("register-section").style.display = "block";
    }
  }
  