import "./Header.css";


function Header({decrement,increment}){
    

    return (
    
        <>
            <button id="counter-increment" onClick={decrement}>Counter Azalt</button>
            <button id="counter-increment" onClick={increment}>Counter Arttır</button>
            <p>Burada ilk komponentimizi oluşturmuş olduk.</p>
        </>
    )
}

export default Header;