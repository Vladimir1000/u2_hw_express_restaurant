const desserts = [
    {
        name: "Fruit Salad",
        description: "Chop up a variety of fresh fruits such as strawberries, grapes, kiwi, pineapple, and oranges. Toss them together in a bowl and serve as is, or add a drizzle of honey or a sprinkle of cinnamon for extra flavor.",
        price: "6.99$"
    },
    {
        name: "Chocolate-Dipped Strawberries",
        description: "Melt some chocolate chips in the microwave or over a double boiler. Dip fresh strawberries into the melted chocolate, then place them on a baking sheet lined with parchment paper. Let them cool in the refrigerator until the chocolate hardens.",
        price: "7.20$"
    },
    {
        name: "Vanilla Ice Cream with Berries",
        description: "Scoop vanilla ice cream into bowls and top with fresh berries such as raspberries, blueberries, or sliced strawberries. For extra indulgence, drizzle with chocolate sauce or caramel syrup.",
        price: "9.50$"
    }
]

const getDesserts = (req, res) => {
    res.send(desserts);
}
const getDessert = (req, res) => {
    res.send(desserts[req.params.id]);
}
const getDessertPrice = (req, res) => {
    res.send(desserts[req.params.id].price);
}

module.exports = {
    getDesserts, 
    getDessert, 
    getDessertPrice
}