const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
//loadSingleUser();

const displaySingleUser = user => {
    console.log(user);
}


//meal db
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    //display spinner
    toggleSpinner('block');
    toggleSearchResult('none');

    loadMeals(searchText);
    document.getElementById('search-field').value = '';

}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if (!meals) {

    }

    meals?.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngradient18 ? meal.strIngradient18 : ''}</p>
        <button onclick="loadMealDeatil('${meal.strMeal}')">Click me</button>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block');
}

loadMeals('fish');




const loadMealDeatil = mealName => {
    console.log(mealName);
}