import { CSSProperties } from "react"
import { CodeFixAction } from "typescript"

interface Props {
    onMenuClick: () => void;
    userName: string
}

function Header(props: Props) {
    return (
        <header style={headerStyle}>
            <span style={burgerStyle} onClick={props.onMenuClick}>🍔</span>
            <h1>Hellow {' '} {props.userName}</h1>
            <span/>
        </header>
    )
}

const headerStyle: CSSProperties  = {
    position: 'fixed',
    zIndex: 100,
    left: 0,
    top: 0, 
    right: 0,
    height: '5rem', 
    background: 'grey',
    color: 'white', 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem'
}

const burgerStyle: CSSProperties = {
    cursor: 'pointer'
}


export default Header