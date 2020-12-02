import { Button, Card, Elevation } from "@blueprintjs/core";
import React,{ useEffect, useState } from "react";
import {Endpoints} from '../../endpoints/Endpoints';

function ArticlePage(){
    const [articles, setArticles] = useState([
        {
            title:'Title 1'
        },
        {
            title:'Title 2'
        }
        {
            title:'Title 3'
        }
    ]);


    const renderArticles = () => {
        return articles.map( ({title}) => (
            <Card interactive={true} elevation={Elevation.TWO}>
                <h3><a href="#">{title}</a></h3>
                <p>Card content</p>
                <Button>Submit</Button>
            </Card>
        ));
    };

    return (
        <React.Fragment>
            {renderArticles()}
        </React.Fragment>
    )
}

export {ArticlePage};