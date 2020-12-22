import React from 'react';
import { Pane} from 'evergreen-ui';
import './Page.scss';
import "../../variabiles.scss";

function Page({ title, children, className }) {
    return (
        <div className={`screen ${className}`}>
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

export { Page };