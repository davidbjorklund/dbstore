const filterDisabled = (list, disabled, price) => {
    return list.filter(item => {
        if(disabled.some(d => 
            item.brand.toLowerCase() === d.toLowerCase() || 
            item.category.toLowerCase() === d.toLowerCase()
        ))return false;
        
        if(item.price > price)return false;
        return true;
    })
}

export default filterDisabled;