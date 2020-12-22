import React from 'react';
import {Page} from '../../page/Page'
import { LABELS } from '../../../strings';
import {CollectionCard} from '../../collection-card/CollectionCard'


function CollectionPage(){
  return (
    <Page title={LABELS.collectionPage}>
      <CollectionCard/>
      <CollectionCard/>
      <CollectionCard/>
      <CollectionCard/>
      <CollectionCard/>
    </Page>
  );
}

export {CollectionPage};