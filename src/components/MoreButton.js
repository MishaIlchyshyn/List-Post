import React from '../react-api';

class MoreButton {
    createButton() {
        const btn = React.createElement(
            'button',
            undefined,
            'More Button'
        );

        return btn;
    };  
}

export default new MoreButton();
