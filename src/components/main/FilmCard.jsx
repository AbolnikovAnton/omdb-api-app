import React, {useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {MAIN_LINK} from "../../utils/api";

const FilmCard = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            await fetch(MAIN_LINK)
                .then(respose => respose.json())
                .then(data => setItems(data))

            // setItems(result)
            setIsLoading(false)
        }


        fetchItems();

    }, [])

    // console.log(items)

    return (
        <React.Fragment>
            {!!items.length && items.map(item =>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={item.search.Poster}/>
                    <Card.Body>
                        <Card.Title>{item.search.Title}</Card.Title>
                        <Card.Text>{item.search.Year}</Card.Text>
                    </Card.Body>
                </Card>
            )}
            {/*<Card style={{width: '18rem'}}>*/}
            {/*    <Card.Img variant="top" src={items.Poster}/>*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title>{items.Title}</Card.Title>*/}
            {/*        <Card.Text>{items.Year}</Card.Text>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
        </React.Fragment>
    );
};

export default FilmCard;