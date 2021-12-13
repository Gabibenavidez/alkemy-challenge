import { useContext } from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { GlobalContext } from '../../context/GlobalContext';


const HerosTeam = () => {

    const {selectedHeros, deleteHero} = useContext(GlobalContext);


    return (
        <Row className="justify-content-center" >  
            {selectedHeros.length > 1 &&
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
     );
}
 
export default HerosTeam;