export default [
    {
        type: "dir",
        name: "Category",
        children: [
            {
                type: "subdir",
                name: "Woman",
                children: [
                    {
                        type: "checkbox",
                        name: "Tops",
                        items: 37,
                        checked: false,
                    },
                    {
                        type: "checkbox",
                        name: "Jackets",
                        items: 22,
                        checked: false,
                    },
                    {
                        type: "checkbox",
                        name: "Sweaters",
                        items: 31,
                        checked: false,
                    },
                ]
            },
            {
                type: "subdir",
                name: "Man",
            },
            {
                type: "subdir",
                name: "Kids",
            },
            {
                type: "subdir",
                name: "Sporty",
            },
            {
                type: "subdir",
                name: "Casual",
            },
        ]
    },
    {
        type: "dir",
        name: "Brands",
    },
    {
        type: "dir",
        name: "Price",
    },
    {
        type: "dir",
        name: "Size",
    },
]