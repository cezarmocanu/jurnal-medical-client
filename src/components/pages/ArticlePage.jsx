import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import {Screen} from '../screen/Screen'

function ArticlePage(){
  return (
    <Screen title="Article Page">
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
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane>
    </Screen>
  )
}

export {ArticlePage};