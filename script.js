for(let i =1; i<= 12; i++){
    const checkbox = document.getElementById(`task${i}`);
    const label = document.getElementById(`text${i}`);
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through';
        } else {
            label.style.textDecoration = 'none';
        }
    })
};