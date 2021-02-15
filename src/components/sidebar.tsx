import { CSSProperties } from "react"

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}

function Sidebar(props: Props) {

    return (
        <aside 
        style={{...rootStyle, 
            left: props.isOpen ? 0 : '-100%'
        }} 
        >
            <h2 style={{...exitButton,
                left: props.isOpen ? '90%' : '-100%'
            }} 
                onClick={props.onSidebarClose}> ❌
            </h2>
            <h2>Homer</h2>
            <h2>Pricings</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </aside>
    )
}

const rootStyle: CSSProperties = {
    position: 'fixed',  
    top: 0, 
    bottom: 0, 
    width: '100%', 
    background: 'grey',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column',
    transition: 'left 2s'
}

const exitButton: CSSProperties = {
    cursor: 'pointer', 
    fontSize: '2rem', 
    position: 'fixed', 
    top: 0, 
    marginTop: '5rem',
    transition: 'left 2s'
}

export default Sidebar