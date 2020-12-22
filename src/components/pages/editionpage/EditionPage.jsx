import React,{useState,useEffect} from 'react';
import {Page} from '../../page/Page'
import { LABELS } from '../../../strings';
import { EditionCard } from '../../cards/edition-card/EditionCard';
import { useParams } from 'react-router-dom';

import './EditionPage.scss';
import { Spinner } from 'evergreen-ui';

const MOCK_IMAGES = [
    "http://webbut.unitbv.ro/jmb/00%20coperti/coperta%201a.jpg",
    "http://webbut.unitbv.ro/jmb/00%20coperti/coperta%202a.jpg",
    "http://webbut.unitbv.ro/jmb/00%20coperti/coperta%203%20a.jpg",
    "http://webbut.unitbv.ro/jmb/00%20coperti/coperta%204%20a.jpg"
]

function EditionPage(){
    const [editions,setEditions] = useState([]);
    const params = useParams(); 

    //TODO: Endpoint logic
    useEffect(()=>{
        const {collectionId} = params;
        
        const fetchData = async () => {
            try{
                const response = await fetch(`http://jurnal-medical-server.herokuapp.com/collection/${collectionId}/editions`);
                const json = await response.json();
                const {data} = json;
                //TODO:remove after adding image API
                const finalData = data.map(edition => ({...edition,image:MOCK_IMAGES[parseInt(Math.random() * MOCK_IMAGES.length)]}));
                setEditions(finalData);
            }
            catch(e){
                throw new Error(e);
            }
        }
        fetchData();
    },[params])

    return (
        //TODO:Beautify code
        <Page title={LABELS.editions} className="edition-page">
            {
                editions.length <= 0 ?
                <Spinner size={64}/> :
                editions.map(edition => (
                    <EditionCard
                        id={edition.id}
                        title={edition.title}
                        image={edition.image}
                    />
                ))
            }
        </Page>
    );
}

export {EditionPage};