document.getElementById('copy-btn').addEventListener('click', () => {
    const apiInput = document.getElementById('api-url');
    apiInput.select();
    apiInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy'); // Copies the selected text
});


function updateApi() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiInput = document.getElementById('api-url');
    apiInput.value = `https://flood-api-mbrishabh.onrender.com/weather?latitude=${latitude}&longitude=${longitude}`;
}