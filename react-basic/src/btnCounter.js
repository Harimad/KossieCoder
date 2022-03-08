import { useState } from 'react';

const BtnCounter = (props) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	}
	const btnName = props.click || 'click';

	return (
		<button onClick={increment}>{btnName} {count}</button>
	);
}

export default BtnCounter;
