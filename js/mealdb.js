document.getElementById('errorMessage').style.display = 'none';

const searchFood = async() => {
    const searchField = document.getElementById('search_field')
    const searchText = searchField.value 
    searchField.value ='';
    document.getElementById('errorMessage').style.display = 'none';
    if (searchText == '') {
       alert('Please enter a food name');
    }
    else{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayFoodResult(data.meals)
        // fetch(url)
        // .then (response=> response.json())
        // .then(data=> displayFoodResult(data.meals))
    }
    
}

// display search food results

const displayFoodResult =meals=> {
    const foodResult = document.getElementById('food_result');
    foodResult.textContent ='';
    if(meals == null) {
        document.getElementById('errorMessage').style.display = 'block';
    }
    else{
        meals.forEach(meal => {
            // console.log(meal)
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML =` 
                                 <div onclick="loadFoodDeatails(${meal.idMeal})" class="card h-100">
                                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                     <h5 class="card-title">${meal.strMeal}</h5>
                                     <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                                    </div>
                                </div>       
          `;
          foodResult.appendChild(div);
        })
    }
    
}

// display foodDeatails 

const loadFoodDeatails =async mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url)
    const data = await res.json()
    displayFoodDeatails(data.meals[0])
    // fetch(url)
    // .then(response => response.json())
    // .then(data => displayFoodDeatails(data.meals[0]))
}

const displayFoodDeatails = meal => {
    
    // console.log(meal)
    const mealDetails = document.getElementById('meal_details');
    mealDetails.textContent='';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">See videos</a>
    
    `;
    mealDetails.appendChild(div);
}