import { useEffect, useState, useContext } from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { GlobalContext } from '../../context/GlobalContext';
import { useHistory } from "react-router";

const HerosTeam = () => {
    const history = useHistory();
    const {selectedHeros, deleteHero} = useContext(GlobalContext);
    
    const handleClick = () => {
        history.push('/search');
    }
    

    return (
        <>
        <button onClick={handleClick}>Select your hero</button>
        <Row className="justify-content-center" > 
            {selectedHeros.length > 0 &&
                selectedHeros.map(hero => (
                <Col md={2} sm={12} key={hero.id}>
                <Card style={{ width: '7rem' }} >
                    <Card.Img variant="top" src={hero.image.url}/>
                    <Card.Body>
                        <Card.Title>{hero.name}</Card.Title>
                            <Card.Text>
                            {hero.powerstats.power}
                            </Card.Text>
                        <Button variant="danger" onClick={() => deleteHero(hero)}>Remove Hero</Button>
                    </Card.Body>
                </Card>     
            </Col>
            ))}
        </Row>
    </>
     );
}
 
export default HerosTeam;