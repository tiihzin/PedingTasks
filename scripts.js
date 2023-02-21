var tipo = document.querySelector('input[name="senha"]');
                      
document.getElementById('esc').addEventListener('click', () => {
    if (tipo.value) {
        tipo.type = tipo.type === 'password' ? 'text' : 'password';
        tipo.focus();
        document.getElementById('esc').style.display = 'none';
        document.getElementById('ver').style.display = 'inline-block';
    }
});
                      
document.getElementById('ver').addEventListener('click', () => {
    if (tipo.value) {
        tipo.type = tipo.type === 'text' ? 'password' : 'text';
        tipo.focus();
        document.getElementById('esc').style.display = 'inline-block';
        document.getElementById('ver').style.display = 'none';
        }
});
                     