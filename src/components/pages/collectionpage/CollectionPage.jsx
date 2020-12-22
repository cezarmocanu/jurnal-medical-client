import React, { useState, useEffect } from 'react';
import {Page} from '../../page/Page'
import { LABELS } from '../../../strings';
import {CollectionCard} from '../../collection-card/CollectionCard'
import { Breadcrumb } from '../../breadcrumb/Breadcrumb'
import { Spinner } from 'evergreen-ui';
import { useParams } from 'react-router-dom';


const CRUMBS = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Colectii",
    path: "/colectii"
  }
]
function CollectionPage(){
  const [collections, setCollections] = useState([]);
  const params = useParams();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`https://jurnal-medical-server.herokuapp.com/collection/all`);
        const json = await response.json();
        const { data } = json;
        setCollections(data);
      } catch (e) {
        throw new Error(e);
      }
    }
    fetchData();

  }, [params])

  return (
    <Page title={LABELS.collectionPage}>
      <Breadcrumb list={CRUMBS} />
      {
        collections.length <= 0 ?
        <Spinner size={64} /> :
        collections.map(collection => (
        <CollectionCard
          title={collection.title}
          id={collection.id}
        />
      ))
      } 
    </Page>
  );
}

export {CollectionPage};