import { useState, useEffect } from 'react';


function Home(props) {
    useState();

    function buttonHandler() {
        setCount(
            count + 1
        );
        console.log("count value ", { count })
    }
    let [count, setCount] = useState(0);


    useEffect(() => {
        console.log("updated count value  using useefect", { count })
    }, [count]);
    return (
        <div className='card'>
            <h2>{props.text} </h2>
            <button onClick={buttonHandler}>{count}</button>
        </div>
    );


}
export default Home;