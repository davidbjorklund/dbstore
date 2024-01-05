const sortList = (list, seed, rate, sort) => {
    if(sort.value === 1){
        // new arrivals, *1.05 of rate
        return list.sort(() => {
            seed = (seed * rate * 1.05 + 1) % 1;
            return seed - 0.5;
        })
    }
    else if(sort.value === 2){
        return list.sort((a, b)=>a.price - b.price);
    }
    else if(sort.value === 3){
        return list.sort((a, b)=>b.price - a.price);
    }
    else {
        return list.sort(() => {
            seed = (seed * rate + 1) % 1;
            return seed - 0.5;
        });
    }
}


export default sortList;