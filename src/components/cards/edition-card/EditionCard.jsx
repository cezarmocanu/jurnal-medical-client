import React from 'react';
import {Link} from 'react-router-dom';
import { Heading,Badge } from 'evergreen-ui';

import { ImageCard } from '../../image-card/ImageCard';
import { LABELS } from '../../../strings';
import './EditionCard.scss';

function EditionCard({title, id} = {}) {

    
    return (
        <Link to={`/${id}/articles`} className="edition-card-wrapper">
            <ImageCard
                image={'http://webbut.unitbv.ro/jmb/00%20coperti/coperta%202a.jpg'}
                headerContent={
                    <Heading size={600}>{title}</Heading>
                }
                footerContent={
                    <React.Fragment>
                        <Heading size={400}>{LABELS.popularKeywords}</Heading>
                        <div className="keyword-container">
                            <Badge className="keyword" col or="blue" isSolid>{LABELS.lorem(1)}</Badge>
                            <Badge className="keyword" color="yellow" isSolid>{LABELS.lorem(1)}</Badge>
                            <Badge className="keyword" color="green" isSolid>{LABELS.lorem(1)}</Badge>
                        </div>
                    </React.Fragment>
                    
                }/>
        </Link>
    );
}

export {EditionCard};