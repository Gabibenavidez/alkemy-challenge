import {Col, Card, Button } from "react-bootstrap";
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


const Character = ({character}) => {
    const {addHero} = useContext(GlobalContext);

    const handleNewHero = (e) => {
        addHero(character);
    }
    
    return (  
        <Col md={2} sm={12}>  
            <Card style={{ width: '7rem' }}>
                <Card.Img variant="top" src={character.image.url} />
                    <Card.Body>
                        <Card.Title>{character.name} </Card.Title>
                        <Button className="btn btn-primary btn-sm" 
                        onClick={handleNewHero}>
                        Add hero</Button>
                    </Card.Body>
            </Card>
        </Col>
        
    );
}

export default Character;