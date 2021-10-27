import {Row} from 'react-bootstrap';
import Character from '../Character/Character'

const Characters = ({characters}) => {
    return ( 
        <Row className="justify-content-center">
            {characters?.length > 0 &&
            characters.map((character) => (
                   <Character character={character} key={character.id}/>
            ))}
        </Row>
     );
}
 
export default Characters;