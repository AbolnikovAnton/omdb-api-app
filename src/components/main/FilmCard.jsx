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
                .then(data => console.log(data))

            // // setItems(result)
            // // setIsLoading(false)
        }
        console.log(items)


        fetchItems();

    }, [])


    return (
        <React.Fragment>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={items.Poster}/>
                <Card.Body>
                    <Card.Title>{items.Title}</Card.Title>
                    <Card.Text>{items.Plot}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default FilmCard;