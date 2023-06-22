import React from 'react';
import { useState } from 'react';



function Text(props) {
    const [showMore, setShowMore] = useState(false)
    const {max = 50} = props;
    return (
        <div>
            <div >
                {showMore ? `${props.text.substring(0, 1000)}` : `${props.text.substring(0, max)}`}
            </div>
            <button onClick={() => {setShowMore(!showMore)}}>{showMore ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};
export default Text;