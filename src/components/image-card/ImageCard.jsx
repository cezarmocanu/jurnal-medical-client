import { Pane } from 'evergreen-ui';
import React from 'react';
import './ImageCard.scss';

function ImageCard({headerContent,footerContent,image}) {

    return (
        <Pane
            className="image-card"
            elevation={4}>
            <div className="image-content">
                <img src={image} alt={""}/>
            </div>
            <div className="content">
                <div className="content-header">
                    {headerContent}
                </div>
                <div className="content-footer">
                    {footerContent}
                </div>
            </div>
        </Pane>
    );
}

export {ImageCard};