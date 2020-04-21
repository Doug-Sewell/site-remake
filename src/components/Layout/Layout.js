import React from 'react';
import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/navigation';

const layout = props => (
    <Aux>
        <Navigation />
        {props.children}
        <div>
            <p>Footer/Contact Information</p>
        </div>
    </Aux>
)

export default layout;