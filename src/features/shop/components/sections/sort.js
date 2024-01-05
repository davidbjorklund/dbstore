import React from 'react';

import { Filter } from '../filter';
import sorts from "./utils/sorts.js";

const Sort = () => {
    return (<>
        <div className="rel">
            <div id="sort">
                    <Filter filter={sorts} />
            </div>
        </div>
    </>)
}

export default Sort;