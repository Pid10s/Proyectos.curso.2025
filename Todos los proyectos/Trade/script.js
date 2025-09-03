// Abrir modal login
const signinBtn = document.getElementById('signin-btn');
const loginModal = document.getElementById('login-modal');
const loginClose = document.getElementById('login-close');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const userDropdownList = document.getElementById('user-dropdown-list');
const userDashboard = document.getElementById('user-dashboard');
const userDropdown = document.getElementById('user-dropdown');

// Mostrar modal
signinBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // evitar scroll fondo
    setTimeout(() => loginUsername.focus(), 180); // enfocar campo usuario
});

// Cerrar modal con X
loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = '';
});

// Cerrar click fondo
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === document.querySelector('.login-modal-bg')) {
        loginModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Mostrar menú usuario al pulsar avatar
userDashboard.addEventListener('click', function(e) {
    e.stopPropagation();
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

// Ocultar menú al hacer click fuera
document.addEventListener('click', function(e) {
    if (userDropdown.style.display === 'block') {
        userDropdown.style.display = 'none';
    }
});

// Validar formulario
document.querySelector('.login-modal-content form').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    const userMenuDropdown = document.getElementById('user-menu-dropdown');
    const usernameDisplay = document.getElementById('username-display');
    
    if (usuario !== "" && password === "mono") {
        // Acceso concedido
        userDropdownList.innerHTML = `<li>Bienvenido ${usuario}</li>`;
        loginModal.style.display = 'none';
        document.body.style.overflow = '';
        
        // Mostrar el dropdown con el nombre de usuario
        userMenuDropdown.classList.remove('hidden');
        usernameDisplay.textContent = usuario;
    } else {
        // Acceso denegado
        alert('Acceso denegado: Contraseña incorrecta');
        loginPassword.value = '';
        loginPassword.focus();
        
        // Ocultar el dropdown del usuario
        userMenuDropdown.classList.add('hidden');
    }
});