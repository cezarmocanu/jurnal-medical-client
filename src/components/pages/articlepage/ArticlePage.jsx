import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Page } from '../../page/Page';
import './ArticlePage.scss';


function ArticlePage() {
  return (
    <Page title="Article Page">
      <Pane
        className="article-page-test"
        elevation="4"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane>
    </Page>
  )
}

export { ArticlePage };