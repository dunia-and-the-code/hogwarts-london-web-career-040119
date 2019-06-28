import React from 'react' 

import Hog from './Hog.js'
const HogList = props => <div>
    {
        props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    }
</div>

export default HogList