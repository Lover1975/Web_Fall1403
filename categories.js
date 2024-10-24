document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌜';
    } else {
        icon.textContent = '🌞';
    }
});

document.getElementById('add-category-btn').addEventListener('click', function() {
    const newCategoryName = document.getElementById('new-category').value;
    if (newCategoryName.trim() !== '') {
        const categoriesContainer = document.getElementById('categories-container');

        const newCategoryBox = document.createElement('div');
        newCategoryBox.classList.add('category-item');
        newCategoryBox.innerHTML = `
            <h3>${newCategoryName}</h3>
            <p>تعداد سوالات: 0</p>
        `;

        categoriesContainer.appendChild(newCategoryBox);

        document.getElementById('new-category').value = '';
    }
});
