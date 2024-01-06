export default [
    {
        type: "dir",
        name: "Category",
        children: [
            {
                type: "subdir",
                name: "Women",
                link: "/dbstore/shop/women",
                children: [
                    {
                        type: "checkbox",
                        name: "durability",
                        id: "women-durability",
                        items: 3,
                        checked: true,
                    },
                    {
                        type: "checkbox",
                        name: "classic",
                        id: "women-classic",
                        items: 1,
                        checked: true,
                    }
                ]
            },
            {
                type: "subdir",
                name: "Men",
                link: "/dbstore/shop/men",
                children: [
                    {
                        type: "checkbox",
                        name: "durability",
                        id: "men-durability",
                        items: 3,
                        checked: true,
                    },
                    {
                        type: "checkbox",
                        name: "classic",
                        id: "men-classic",
                        items: 3,
                        checked: true,
                    }
                ]
            }
        ]
    },
    {
        type: "dir",
        name: "Brands",
        children: [
            {
                type: "checkbox",
                name: "G-Shock",
                id: "g-shock",
                items: 6,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Seiko",
                id: "seiko",
                items: 6,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Tissot",
                id: "tissot",
                items: 3,
                checked: true
            },
            {
                type: "checkbox",
                name: "Orient",
                id: "orient",
                items: 1,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Citizen",
                id: "citizen",
                items: 1,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Claude Bernard",
                id: "claude-bernard",
                items: 1,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Certina",
                id: "certina",
                items: 1,
                checked: true,
            }
        ]
    },
    {
        type: "dir",
        name: "Price",
        children: [
            {
                type: "label",
                name: "Max",
                id: "max",
                value: 64000,
            },
            {
                type: "range",
                name: "Price",
                id: "price",
                min: 0,
                max: 6,
            },
        ]
    }
]