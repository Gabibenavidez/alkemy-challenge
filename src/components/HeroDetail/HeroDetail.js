import {Row, Col, Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';

const HeroDetail = ({hero}) => {
    const aliases = hero.biography.aliases;
    const history = useHistory();

    const handleClick = () => {
       history.push('/');
    }
    return (
        <Row>
            <Col md={5} sm={12}>
            <Card className="bg-dark text-light"  >
                    <Card.Body>
                        <Card.Title className="text-center">{hero.name}</Card.Title>
                        <Card.Img variant="top" src={hero.image.url}/>
                            <Card.Text >
                            <tr>
                                <th>Full Name </th>
                                <td>
                                    <span>
                                    "{hero.biography["full-name"]}"
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Aliases </th>
                                    {aliases.map((alias) => <p key={hero.id}>"{alias}"</p>)}
                            </tr>
                            <tr>
                                <th>Height </th>
                                <td>
                                    <span>
                                    "{hero.appearance.height[1]}"
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>
                                    <span>
                                    "{hero.appearance.weight[1]}"
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Hair Color </th>
                                <td>
                                    <span>
                                    "{hero.appearance["hair-color"]}"
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Eye Color </th>
                                <td>
                                    <span>
                                    "{hero.appearance["eye-color"]}"
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Workplace </th>
                                <td>
                                    <span>
                                    "{hero.work.base}"
                                    </span>
                                </td>
                            </tr>
                            </Card.Text>
                        <Row>
                            <Button type="button" className="btn btn-success btn-sm btn-block" onClick={handleClick}>Back</Button>
                        </Row>
                    </Card.Body>
                </Card>     
            </Col>
        </Row>
    )
}
 
export default HeroDetail;