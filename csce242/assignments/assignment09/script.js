class Pizza {
    constructor(name, ingredients, sauce, cheese, price, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }

    getSection() {
        return `
            <div class="pizza" onclick="spinAndShowModal('${this.name}', '${this.ingredients}', '${this.sauce}', '${this.cheese}', '${this.price}', '${this.image}', this)">
                <h4 style='color: brown;'>${this.name}</h4>
                <img src="${this.image}" alt="${this.name}">
            </div>
        `;
    }
}

const pizzas = [
    new Pizza("Hawaiian", "Ham, Pineapple", "Tomato", "Mozzarella", "18.5", "images/hawaiian.jpg"),
    new Pizza("Buffalo Chicken Ranch", "Chicken, Buffalo Sauce", "Ranch", "Cheddar", "20.0", "images/buffalo.jpg"),
    new Pizza("Margarita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", "19.2", "images/margarita.jpg"),
    new Pizza("Pepperoni", "Pepperoni", "Tomato", "Mozzarella", "17.8", "images/pepperoni.jpg"),
    new Pizza("Veggie", "Olives, Peppers, Mushrooms", "Tomato", "Mozzarella", "16.5", "images/veggie.jpg")
];

document.getElementById("pizzaList").innerHTML = pizzas.map(pizza => pizza.getSection()).join("");

function spinAndShowModal(name, ingredients, sauce, cheese, price, image, element) {
    const img = element.querySelector("img");
    
    img.classList.add("rotate"); // Add the rotation class

    setTimeout(() => {
        img.classList.remove("rotate"); // Remove the class after rotation

        // Show the modal after rotation
        document.getElementById("pizzaTitle").innerText = name;
        document.getElementById("pizzaIngredients").innerText = ingredients;
        document.getElementById("pizzaSauce").innerText = sauce;
        document.getElementById("pizzaCheese").innerText = cheese;
        document.getElementById("pizzaPrice").innerText = price;
        const modalImg = document.getElementById("pizzaImage");
        modalImg.src = image;
        modalImg.classList.remove("rotate");
        setTimeout(() => modalImg.classList.add("rotate"), 100);
        document.getElementById("pizzaModal").style.display = "block";
    }, 500); // Wait for the spin to complete before opening the modal
}
