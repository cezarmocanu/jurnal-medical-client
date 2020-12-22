import React from 'react';
import {Page} from '../../page/Page'
import { LABELS } from '../../../strings';
import { EditionCard } from '../../cards/edition-card/EditionCard';

import './EditionPage.scss';

function EditionPage(){
  return (
    <Page title={LABELS.editions} className="edition-page">
      <EditionCard title={LABELS.loremTitle(2)} id={5}/>
      <EditionCard title={LABELS.loremTitle(2)} id={5}/>
      <EditionCard title={LABELS.loremTitle(2)} id={5}/>
      <EditionCard title={LABELS.loremTitle(2)} id={5}/>
    </Page>
  );
}

export {EditionPage};