import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Page } from '../../page/Page';
import './HomePage.scss';

function HomePage() {
    return (
        <Page title="Home Page">
            <Pane 
                className="home-page-test"
                elevation="4"
            >
                <Text>Cezar</Text>
                <Text size={300}>Cel Mare</Text>
            </Pane>
        </Page>
    )
}

export { HomePage };