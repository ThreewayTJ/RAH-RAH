const express = require('express');
const app = express();
const PORT = 3000;

let recipes = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBiQ5F83TZ1y-mfEGEOx4XFeDLOlyo7Fryw&s',
        title: 'Chicken Caesar Salad',
        link: 'https://www.youtube.com/watch?v=AGwfmY60FOM',
        description: 'A classic salad with tender chicken, crisp lettuce, and savory dressing.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnsWLGk9-hlSFLEfYsE6JO6sq7Q4nBd-EYQ&s',
        title: 'Birria Tacos',
        link: 'https://www.youtube.com/watch?v=4wORLNNsZc8',
        description: 'Traditional Mexican tacos filled with flavorful birria meat and served with consommé.'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRJf8UfO0F_ElOiSgGeXE8uo3p_YS0-lfoA&s',
        title: 'Spaghetti',
        link: 'https://www.youtube.com/watch?v=hQH4-5o0BMM',
        description: 'Classic Italian pasta dish with tomato sauce, herbs, and parmesan cheese.'
    },
    {
        image: 'https://joyfoodsunshine.com/wp-content/uploads/2022/01/vegetarian-chili-recipe-square.jpg',
        title: 'Vegan Chili',
        link: 'https://www.youtube.com/watch?v=wtS8PTaedzA',
        description: 'Hearty chili made with beans, vegetables, and spices, perfect for vegans and vegetarians.'
    }
];

app.get('/recipes', (req, res) => {
    res.json(recipes);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
