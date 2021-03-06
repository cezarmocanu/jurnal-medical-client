import React from 'react';
import {Card} from '../../card/Card'
import {Badge} from 'evergreen-ui';
import './CollectionCard.scss'
import {Link} from 'react-router-dom';

function CollectionCard ({title,id} = {}) {
  const onClickFunction = () => {
    console.log("Click");
  }

  return (
    <Link className="collection-card-content" to={`/colectii/${id}`}>
      <Card headerTitle={title} onClick={onClickFunction}>
        <Badge color="green">Editia 1</Badge>
      </Card>
    </Link>
  );
}

export {CollectionCard};

