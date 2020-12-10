import React from 'react';
import { Pane, Text } from 'evergreen-ui';
<<<<<<< HEAD
import { Page } from '../../page/Page';
=======
import { Screen } from '../../screen/Screen';
import {Card} from '../../card/Card'

>>>>>>> 75ec7c98442a20b48590b9cc023f479e9e8d678a
import './ArticlePage.scss';


function ArticlePage() {
  return (
<<<<<<< HEAD
    <Page title="Article Page">
      <Pane
=======
    <Screen title="Article Page">
      {/* <Pane
>>>>>>> 75ec7c98442a20b48590b9cc023f479e9e8d678a
        className="article-page-test"
        elevation="4"
      >
        <Text>Elevation 1</Text>
        <Text size={300}>Floating Panes</Text>
<<<<<<< HEAD
      </Pane>
    </Page>
=======
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
>>>>>>> 75ec7c98442a20b48590b9cc023f479e9e8d678a
  )
}

export { ArticlePage };