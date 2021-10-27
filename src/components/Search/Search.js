import { useState } from 'react';
import {InputGroup, FormControl, Form} from "react-bootstrap";




const Search = ({ findCharacter }) => {
    const [character, setCharacter] = useState("");

    const getCharactersInfo = (e) => {
       e.preventDefault();
       findCharacter(character);
    }

    return ( 
       <Form onSubmit={getCharactersInfo}>
           <InputGroup>
               <FormControl 
                placeholder="Find your character..."
                onChange={(e) => setCharacter(e.target.value)}
                value={character}
                name="character"
                />
           </InputGroup>
       </Form>
       
     );
}
 
export default Search;