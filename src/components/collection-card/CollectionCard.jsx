import React from 'react';
import {Card} from '../card/Card'
import {Badge} from 'evergreen-ui';
import './CollectionCard.scss'
import {Link} from 'react-router-dom';

function CollectionCard () {
  const onClickFunction = () => {
    
  }

  return (
    <Link className="collection-card-content" to="/colectii/collectionID">
      <Card headerTitle="Colectia 2017" onClick={onClickFunction}>
        <Badge color="green">Editia 1</Badge>
      </Card>
    </Link>
  );
}

export {CollectionCard};

