
import {useState} from 'react';

function CustomHook (){
const [count, setCount] = useState(0);

const incrementButton = () => setCount(count + 1);
return {
    count,
    incrementButton
};
}
export default CustomHook;