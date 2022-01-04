import { useContext } from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { GlobalContext } from '../../context/GlobalContext';
import HerosStats from '../HerosStats/HerosStats';
import "../HerosTeam/HerosTeam.css"
import { useHistory } from 'react-router';


const HerosTeam = ({detailHero}) => {
    const {selectedHeros, deleteHero} = useContext(GlobalContext);
    const history = useHistory();

    const handleClick = (hero) => {
        detailHero(hero);
        history.push('/detail');
    }

    return (
        <Row className="justify-content-center" > 
            {selectedHeros.length > 0 &&
                selectedHeros.map(hero => (
                <Col md={2} sm={12} key={hero.id}>
                <Card className="bg-dark  text-light"  >
                    <Card.Img variant="top" src={hero.image.url}/>
                    <Card.Body>
                        <Card.Title className="text-center">{hero.name}</Card.Title>
                            <Card.Text>
                            <tr>
                                <th>Intelligence </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.intelligence}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Power </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.power}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Speed </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.speed}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Strength </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.strength}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Combat </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.combat}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Durability </th>
                                <td className="text-center">
                                    <span>
                                    {hero.powerstats.durability}
                                    </span>
                                </td>
                            </tr>
                            </Card.Text>
                        <Row>
                            <Button variant="danger" className="remove btn btn-sm" onClick={() => deleteHero(hero)}>Remove</Button>
                            <Button className="detail btn btn-sm" onClick={() => handleClick(hero)}>Detail</Button>
                        </Row>
                    </Card.Body>
                </Card>     
            </Col>
            ))}
            <HerosStats />
        </Row>
     );
}
 
export default HerosTeam;