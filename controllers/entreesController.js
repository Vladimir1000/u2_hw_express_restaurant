const entrees = [
    {
        name: "Spaghetti Aglio e Olio",
        description: "Cook spaghetti according to package instructions. In a skillet, heat olive oil and sauté minced garlic until golden brown. Toss cooked pasta with the garlic oil, add red pepper flakes for heat if desired, and garnish with chopped parsley and grated Parmesan cheese.",
        price: "11.99$"
    },
    {
        name: "Grilled Cheese Sandwich",
        description: "Spread butter on two slices of bread. Place a slice of cheese (cheddar, Swiss, or your favorite cheese) between the slices. Grill the sandwich in a skillet over medium heat until golden brown and the cheese is melted. Serve with a side of tomato soup for a classic combo.",
        price: "6.20$"
    },
    {
        name: "Stir-Fried Vegetables with Tofu",
        description: " Cube tofu and stir-fry it in a pan with sesame oil until golden. Remove tofu from the pan and set aside. In the same pan, stir-fry your favorite vegetables (bell peppers, broccoli, carrots, snap peas) until tender-crisp. Add the tofu back to the pan, season with soy sauce, garlic, and ginger, and cook for a few more minutes. Serve over rice or noodles.",
        price: "9.50$"
    }
]
const getEntrees = (req, res) => {
    res.send(entrees);
}
const getEntree = (req, res) => {
    res.send(entrees[req.params.id]);
}
const getEntreePrice = (req, res) => {
    res.send(entrees[req.params.id].price);
}

module.exports = {
    getEntrees,
    getEntree,
    getEntreePrice
}