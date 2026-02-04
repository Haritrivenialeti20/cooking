const RecipeApp = (() => {
    'use strict';
    
    // ============================================
    // PRIVATE: DATA
    // ============================================
    const recipes = [
        {
            id: 1,
            title: 'Classic Spaghetti Carbonara',
            difficulty: 'medium',
            time: 25,
            description: 'A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
            ingredients: ['200g spaghetti', '100g pancetta', '2 large eggs', '50g grated Pecorino Romano', '50g grated Parmesan', 'Black pepper', 'Salt'],
            steps: [
                'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
                'While pasta cooks, heat pancetta in a skillet until crispy.',
                'In a bowl, whisk eggs, cheeses, and pepper.',
                'Reserve pasta water, then drain spaghetti.',
                'Toss hot pasta with pancetta, then add egg mixture off heat.',
                'Add reserved pasta water to create creamy sauce.',
                'Serve immediately with extra cheese and pepper.'
            ]
        },
        {
            id: 2,
            title: 'Quick Chicken Stir-Fry',
            difficulty: 'easy',
            time: 20,
            description: 'A fast and healthy stir-fry with tender chicken and crisp vegetables.',
            ingredients: ['400g chicken breast', '2 bell peppers', '1 broccoli head', '2 carrots', '3 tbsp soy sauce', '1 tbsp sesame oil', '2 garlic cloves', '1 inch ginger', 'Cooked rice for serving'],
            steps: [
                'Slice chicken into thin strips and season with salt.',
                'Chop vegetables into bite-sized pieces.',
                'Heat oil in wok or large skillet over high heat.',
                'Add chicken and stir-fry until cooked through.',
                'Add garlic and ginger, cook for 30 seconds.',
                'Add vegetables and stir-fry for 3-4 minutes.',
                'Add soy sauce and toss everything together.',
                'Serve over rice.'
            ]
        },
        {
            id: 3,
            title: 'Vegetarian Buddha Bowl',
            difficulty: 'easy',
            time: 30,
            description: 'A nourishing bowl packed with grains, roasted vegetables, and tahini dressing.',
            ingredients: ['1 cup quinoa', '1 sweet potato', '1 zucchini', '1 cup chickpeas', '2 cups spinach', '2 tbsp tahini', '1 lemon', '1 garlic clove', 'Salt and pepper'],
            steps: [
                'Preheat oven to 400°F (200°C).',
                'Cook quinoa according to package directions.',
                'Cube sweet potato and zucchini, toss with oil, salt, and pepper.',
                'Roast vegetables for 25 minutes.',
                'Drain and rinse chickpeas.',
                'Make dressing: whisk tahini, lemon juice, garlic, and water.',
                'Assemble bowls with quinoa, roasted veggies, chickpeas, and spinach.',
                'Drizzle with tahini dressing.'
            ]
        },
        {
            id: 4,
            title: 'Beef Tacos',
            difficulty: 'medium',
            time: 35,
            description: 'Flavorful ground beef tacos with fresh toppings and homemade salsa.',
            ingredients: ['500g ground beef', '1 onion', '2 garlic cloves', '1 tbsp chili powder', '1 tsp cumin', '8 small tortillas', '2 tomatoes', '1 lime', 'Fresh cilantro', 'Shredded lettuce', 'Shredded cheese'],
            steps: [
                'Cook ground beef in skillet until browned.',
                'Add diced onion and garlic, cook until softened.',
                'Stir in chili powder, cumin, salt, and pepper.',
                'Simmer for 10 minutes.',
                'Warm tortillas in microwave or skillet.',
                'Dice tomatoes and mix with lime juice for salsa.',
                'Assemble tacos with beef, salsa, lettuce, cheese, and cilantro.'
            ]
        },
        {
            id: 5,
            title: 'Chocolate Chip Cookies',
            difficulty: 'easy',
            time: 25,
            description: 'Classic chewy chocolate chip cookies that are perfect for any occasion.',
            ingredients: ['1 cup butter', '3/4 cup brown sugar', '1/4 cup white sugar', '1 egg', '2 tsp vanilla', '2 1/4 cups flour', '1 tsp baking soda', '1/2 tsp salt', '2 cups chocolate chips'],
            steps: [
                'Preheat oven to 375°F (190°C).',
                'Cream butter and sugars until fluffy.',
                'Beat in egg and vanilla.',
                'Mix flour, baking soda, and salt in separate bowl.',
                'Gradually add dry ingredients to wet.',
                'Stir in chocolate chips.',
                'Drop spoonfuls onto ungreased baking sheet.',
                'Bake for 9-11 minutes until golden.',
                'Cool on baking sheet for 5 minutes before transferring.'
            ]
        },
        {
            id: 6,
            title: 'Mediterranean Salmon',
            difficulty: 'medium',
            time: 30,
            description: 'Grilled salmon with a lemon-dill sauce and Mediterranean vegetables.',
            ingredients: ['4 salmon fillets', '2 tbsp olive oil', '1 lemon', '2 tbsp fresh dill', '1 cup cherry tomatoes', '1/2 cup Kalamata olives', '1 cucumber', 'Feta cheese'],
            steps: [
                'Preheat grill to medium-high.',
                'Brush salmon with olive oil and season with salt and pepper.',
                'Grill salmon for 4-5 minutes per side.',
                'Mix lemon juice, dill, and remaining olive oil for sauce.',
                'Slice cucumber and halve tomatoes.',
                'Serve salmon with vegetables, olives, feta, and sauce.'
            ]
        },
        {
            id: 7,
            title: 'Thai Green Curry',
            difficulty: 'hard',
            time: 45,
            description: 'Aromatic and spicy Thai curry with coconut milk and fresh vegetables.',
            ingredients: ['400ml coconut milk', '2 tbsp green curry paste', '400g chicken thighs', '1 eggplant', '1 bell pepper', '2 tbsp fish sauce', '1 tbsp brown sugar', 'Thai basil', 'Jasmine rice'],
            steps: [
                'Cook jasmine rice according to package.',
                'Heat coconut milk in large pot.',
                'Add curry paste and simmer for 5 minutes.',
                'Add cubed chicken and cook until done.',
                'Add chopped eggplant and bell pepper.',
                'Stir in fish sauce and brown sugar.',
                'Simmer for 15 minutes until vegetables are tender.',
                'Garnish with Thai basil and serve over rice.'
            ]
        },
        {
            id: 8,
            title: 'Caprese Salad',
            difficulty: 'easy',
            time: 10,
            description: 'Simple and elegant Italian salad with fresh tomatoes, mozzarella, and basil.',
            ingredients: ['4 large tomatoes', '250g fresh mozzarella', 'Fresh basil leaves', '2 tbsp balsamic vinegar', '2 tbsp olive oil', 'Salt and pepper'],
            steps: [
                'Slice tomatoes and mozzarella into thick slices.',
                'Arrange alternating slices on a platter.',
                'Tuck basil leaves between slices.',
                'Drizzle with olive oil and balsamic vinegar.',
                'Season with salt and pepper.',
                'Let sit for 10 minutes before serving.'
            ]
        }
    ];
    
    // ============================================
    // PRIVATE: STATE
    // ============================================
    let currentFilter = 'all';
    let currentSort = 'none';
    let searchQuery = '';
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    let debounceTimer;
    
    // ============================================
    // PRIVATE: DOM REFERENCES
    // ============================================
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const searchInput = document.querySelector('#search-input');
    const clearSearchBtn = document.querySelector('#clear-search');
    const recipeCountDisplay = document.querySelector('#recipe-count');
    
    // ============================================
    // PRIVATE: PURE FILTER FUNCTIONS
    // ============================================
    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };
    
    const filterByTime = (recipes, maxTime) => {
        return recipes.filter(recipe => recipe.time <= maxTime);
    };
    
    const filterBySearch = (recipes, query) => {
        if (!query || query.trim() === '') {
            return recipes;
        }
        
        const lowerQuery = query.toLowerCase().trim();
        
        return recipes.filter(recipe => {
            const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
            const ingredientMatch = recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowerQuery)
            );
            const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
            
            return titleMatch || ingredientMatch || descriptionMatch;
        });
    };
    
    const filterFavorites = (recipes) => {
        return recipes.filter(recipe => favorites.includes(recipe.id));
    };
    
    // ============================================
    // PRIVATE: PURE SORT FUNCTIONS
    // ============================================
    const sortByTime = (recipes) => {
        return [...recipes].sort((a, b) => a.time - b.time);
    };
    
    const sortByDifficulty = (recipes) => {
        const order = { easy: 1, medium: 2, hard: 3 };
        return [...recipes].sort((a, b) => order[a.difficulty] - order[b.difficulty]);
    };
    
    const sortByIngredients = (recipes) => {
        return [...recipes].sort((a, b) => a.ingredients.length - b.ingredients.length);
    };
    
    // ============================================
    // PRIVATE: RENDER FUNCTIONS
    // ============================================
    const renderSteps = (steps, level = 0) => {
        return steps.map(step => {
            if (typeof step === 'string') {
                return `<li>${step}</li>`;
            } else {
                return `<li>${step.text}<ul class="sub-steps">${renderSteps(step.substeps, level + 1)}</ul></li>`;
            }
        }).join('');
    };
    
    const createRecipeCard = (recipe) => {
        const isFavorited = favorites.includes(recipe.id);
        const heartIcon = isFavorited ? '❤️' : '🤍';
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                        data-recipe-id="${recipe.id}">
                    ${heartIcon}
                </button>
                
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}min</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-content">
                    <div class="recipe-section">
                        <h4>
                            <button class="toggle-btn">▶</button>
                            Ingredients (${recipe.ingredients.length})
                        </h4>
                        <ul class="recipe-list">
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="recipe-section">
                        <h4>
                            <button class="toggle-btn">▶</button>
                            Steps (${recipe.steps.length})
                        </h4>
                        <ul class="recipe-list">
                            ${renderSteps(recipe.steps)}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    };
    
    const renderRecipes = (recipes) => {
        if (recipeContainer) {
            recipeContainer.innerHTML = recipes.map(createRecipeCard).join('');
        }
    };
    
    // ============================================
    // PRIVATE: UI HELPER FUNCTIONS
    // ============================================
    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy':
                return filterByDifficulty(recipes, 'easy');
            case 'medium':
                return filterByDifficulty(recipes, 'medium');
            case 'hard':
                return filterByDifficulty(recipes, 'hard');
            case 'quick':
                return filterByTime(recipes, 30);
            case 'favorites':
                return filterFavorites(recipes);
            case 'all':
            default:
                return recipes;
        }
    };
    
    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'time':
                return sortByTime(recipes);
            case 'difficulty':
                return sortByDifficulty(recipes);
            case 'ingredients':
                return sortByIngredients(recipes);
            case 'none':
            default:
                return recipes;
        }
    };
    
    const updateActiveButtons = () => {
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === currentFilter);
        });
        sortButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.sort === currentSort);
        });
    };
    
    const updateRecipeCounter = (showing, total) => {
        if (recipeCountDisplay) {
            recipeCountDisplay.textContent = `Showing ${showing} of ${total} recipes`;
        }
    };
    
    const updateDisplay = () => {
        let recipesToDisplay = recipes;
        
        recipesToDisplay = filterBySearch(recipesToDisplay, searchQuery);
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        
        updateRecipeCounter(recipesToDisplay.length, recipes.length);
        renderRecipes(recipesToDisplay);
        updateActiveButtons();
    };
    
    // ============================================
    // PRIVATE: FAVORITES MANAGEMENT
    // ============================================
    const saveFavorites = () => {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    };
    
    const toggleFavorite = (recipeId) => {
        const id = parseInt(recipeId);
        
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
        } else {
            favorites.push(id);
        }
        
        saveFavorites();
        updateDisplay();
    };
    
    // ============================================
    // PRIVATE: EVENT HANDLERS
    // ============================================
    const handleFilterClick = (event) => {
        currentFilter = event.target.dataset.filter;
        updateDisplay();
    };
    
    const handleSortClick = (event) => {
        currentSort = event.target.dataset.sort;
        updateDisplay();
    };
    
    const handleToggleClick = (event) => {
        if (!event.target.classList.contains('toggle-btn')) {
            return;
        }
        
        const list = event.target.parentElement.nextElementSibling;
        const isExpanded = list.classList.contains('expanded');
        
        list.classList.toggle('expanded');
        event.target.classList.toggle('expanded');
        event.target.textContent = isExpanded ? '▶' : '▼';
    };
    
    const handleSearchInput = (event) => {
        const query = event.target.value;
        
        if (clearSearchBtn) {
            clearSearchBtn.style.display = query ? 'block' : 'none';
        }
        
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = query;
            updateDisplay();
        }, 300);
    };
    
    const handleClearSearch = () => {
        if (searchInput) {
            searchInput.value = '';
        }
        searchQuery = '';
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'none';
        }
        updateDisplay();
    };
    
    const handleFavoriteClick = (event) => {
        if (!event.target.classList.contains('favorite-btn')) {
            return;
        }
        
        event.stopPropagation();
        const recipeId = event.target.dataset.recipeId;
        toggleFavorite(recipeId);
    };
    
    // ============================================
    // PRIVATE: INITIALIZATION
    // ============================================
    const setupEventListeners = () => {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });
        
        recipeContainer.addEventListener('click', handleToggleClick);
        
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
        }
        
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', handleClearSearch);
        }
        
        recipeContainer.addEventListener('click', handleFavoriteClick);
        
        console.log('Event listeners attached!');
    };
    
    const init = () => {
        console.log('🍳 RecipeJS initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('✅ RecipeJS ready!');
        console.log(`📊 ${recipes.length} recipes loaded`);
        console.log(`❤️  ${favorites.length} favorites saved`);
    };
    
    // ============================================
    // PUBLIC API
    // ============================================
    return {
        init,
        updateDisplay
    };
    
})();

RecipeApp.init();
