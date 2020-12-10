import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Page } from '../../page/Page';
import './HomePage.scss';
import {LABELS} from '../../../strings'

function HomePage() {
    return (
        <Page title = {LABELS.homePage}/>
    )
}

export { HomePage };