import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Screen } from '../../screen/Screen';
import './ArticlePage.scss';

function ArticlePage() {
  return (
    <Screen title="Article Page">
      <Pane
        className="article-page-test"
        elevation="4"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane>
    </Screen>
  )
}

export { ArticlePage };