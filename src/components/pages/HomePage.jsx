import React from 'react';
import { Pane, Text } from 'evergreen-ui'
import { Screen } from '../screen/Screen'

function HomePage() {
    return (
        <Screen title="Home Page">
            <Pane
                elevation={4}
                float="left"
                width={200}
                height={120}
                margin={24}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Text>Cezar</Text>
                <Text size={300}>Cel Mare</Text>
            </Pane>
        </Screen>
    )
}

export { HomePage };