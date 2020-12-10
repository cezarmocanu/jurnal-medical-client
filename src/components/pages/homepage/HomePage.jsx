import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Screen } from '../../screen/Screen';
import './HomePage.scss';

function HomePage() {
    return (
        <Screen title="Home Page">
            <Pane 
                className="home-page-test"
                elevation="4"
            >
                <Text>Cezar</Text>
                <Text size={300}>Cel Mare</Text>
            </Pane>
        </Screen>
    )
}

export { HomePage };