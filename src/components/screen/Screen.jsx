import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import './Screen.scss';
import "../../variabiles.scss";


function Screen({ title, children }) {
    return (
        <div className="screen">
            <Pane className="screen-header">
                <h1 color="white">
                    {title}
                </h1>
            </Pane>

            <Pane className="screen-content">
                {children}
            </Pane>
        </div>
    );

}

export { Screen };