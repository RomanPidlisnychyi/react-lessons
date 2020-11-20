import { LoremIpsum } from 'lorem-ipsum';
// import { uuid } from 'uuidv4';
import uuid from 'react-uuid';

const lorem = new LoremIpsum();

export default function createTask() {
    return {
        id: uuid(),
        text: lorem.generateSentences(5),
        completed: false,
    };
}
