import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import { Screen } from '../../screen/Screen';
import {Card} from '../../card/Card'

import './ArticlePage.scss';


function ArticlePage() {
  return (
    <Screen title="Article Page">
      {/* <Pane
        className="article-page-test"
        elevation="4"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
      </Pane> */}
      <Card footerText="First footer">
        <h3>Special title</h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis ea reiciendis vero cupiditate. Deserunt iusto ratione similique natus ipsa soluta explicabo eius quisquam voluptatum praesentium. Corporis, voluptatum. Mollitia, tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quo dolorem velit porro? Maiores consequuntur assumenda ab velit minima possimus consequatur laudantium, fugit, ullam quo explicabo. Sit vero repellat atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam quas, modi mollitia harum, tempora ab sequi a, ratione nesciunt voluptatem dolore officiis. Debitis nemo expedita tempora temporibus eaque reiciendis?</h4>
      </Card>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </Screen>
  )
}

export { ArticlePage };