document.addEventListener('DOMContentLoaded', () => {
    const mealForm = document.getElementById('meal-form');
    const mealList = document.getElementById('meal-list');

    const meals = [];

    // Function to add meal
    function addMeal(day, breakfast, soup, mainDish) {
        const meal = {
            day,
            breakfast,
            soup,
            mainDish,
        };
        meals.push(meal);
        displayMeals();
    }

    // Function to display meals
    function displayMeals() {
        mealList.innerHTML = '';
        meals.forEach((meal, index) => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
                <h3>${meal.day}</h3>
                <p><strong>Breakfast:</strong> ${meal.breakfast}</p>
                <p><strong>Soup:</strong> ${meal.soup}</p>
                <p><strong>Main Dish:</strong> ${meal.mainDish}</p>
            `;
            mealList.appendChild(mealDiv);
        });
    }

    // Event listener for form submission
    mealForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const day = document.getElementById('day').value;
        const breakfast = document.getElementById('breakfast').value;
        const soup = document.getElementById('soup').value;
        const mainDish = document.getElementById('main-dish').value;

        addMeal(day, breakfast, soup, mainDish);

        mealForm.reset();
    });
});

