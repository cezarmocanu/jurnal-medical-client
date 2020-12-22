import React from 'react';
import {Card} from '../../card/Card'
import {Text} from 'evergreen-ui';
import './ArticleCard.scss';
import { LABELS } from '../../../strings';


function ArticleCard({title}){

    
      return (
        
          <Card headerTitle={title} footerText={LABELS.loremSmall}>
            <Text size="16">{LABELS.loremMedium}</Text>
          </Card>
       
      );
    }


export {ArticleCard};