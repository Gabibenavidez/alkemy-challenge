import {Row} from 'react-bootstrap';
import Character from '../Character/Character'

const Characters = ({characters, selectedHero}) => {
    return ( 
        <Row className="justify-content-center">
            {characters?.length > 0 &&
            characters.map((character) => (
                   <Character selectedHero={selectedHero} character={character} key={character.id}/>
            ))}
        </Row>
     );
}
 
export default Characters;