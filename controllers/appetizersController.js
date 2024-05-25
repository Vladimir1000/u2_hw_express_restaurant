
const appetizers = [
    {
        name: "Caprese",
        description: "Thread cherry tomatoes, fresh mozzarella balls, and fresh basil leaves onto skewers. Drizzle with balsamic glaze and sprinkle with salt and pepper.",
        price: "7.99$"
    },
    {
        name: "Stuffed Mushrooms",
        description: "Stuffed mushrooms with a mixture of cream cheese, garlic, breadcrumbs, and chopped herbs. Bake until golden and bubbly.",
        price: "8.20$"
    },
    {
        name: "Bruschetta",
        description: "Toast slices of baguette until crisp. Top with a mixture of diced tomatoes, minced garlic, chopped basil, olive oil, balsamic vinegar, salt, and pepper. Optional: add a sprinkle of grated Parmesan cheese on top.",
        price: "9.50$"
    }
]

const getAppetizers = (req, res) => {
    res.send(appetizers);
}
const getAppetizer = (req, res) => {
    res.send(appetizers[req.params.id]);
}
const getAppetizerPrice = (req, res) => {
    res.send(appetizers[req.params.id].price);
}

module.exports = {
    getAppetizers, 
    getAppetizer,
    getAppetizerPrice
}