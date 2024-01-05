export default [
    {
        type: "select",
        name: "sort",
        value: 0,
        children: [
            {
                type: "option",
                name: "Best Sellers",
                id: "bestsellers",
            },
            {
                type: "option",
                name: "New Arrivals",
                id: "newarrivals",
            },
            {
                type: "option",
                name: "Price Low-High",
                id: "pricelowtohigh",
            },
            {
                type: "option",
                name: "Price High-Low",
                id: "pricehightolow",
            }
        ]
    }
]