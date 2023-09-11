export default [
    {
        type: "dir",
        name: "Category",
        children: [
            {
                type: "subdir",
                name: "Women",
                link: "/shop/women",
                children: [
                    {
                        type: "checkbox",
                        name: "durability",
                        items: 3,
                        checked: true,
                    },
                ]
            },
            {
                type: "subdir",
                name: "Men",
                link: "/shop/men",
                children: [
                    {
                        type: "checkbox",
                        name: "durability",
                        items: 3,
                        checked: true,
                    },
                    {
                        type: "checkbox",
                        name: "classic",
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
                items: 6,
                checked: true,
            },
            {
                type: "checkbox",
                name: "Seiko",
                items: 3,
                checked: true,
            }
        ]
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