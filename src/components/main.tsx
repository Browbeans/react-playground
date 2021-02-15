import { TargetElement } from "@testing-library/user-event"
import { MouseEvent, ChangeEvent, CSSProperties } from "react"

interface Props {
    setUserName: (name: string) => void;
    userName: string;
}

function Main(props: Props) {
    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        props.setUserName(event.target.value) 
    }

    return(
        <main style={mainStyle}>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam accusantium voluptas cum pariatur! Esse animi fugiat, odio nemo expedita doloremque voluptatibus? Error culpa dignissimos quas quibusdam iure, iusto aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam accusantium voluptas cum pariatur! Esse animi fugiat, odio nemo expedita doloremque voluptatibus? Error culpa dignissimos quas quibusdam iure, iusto aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam accusantium voluptas cum pariatur! Esse animi fugiat, odio nemo expedita doloremque voluptatibus? Error culpa dignissimos quas quibusdam iure, iusto aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam accusantium voluptas cum pariatur! Esse animi fugiat, odio nemo expedita doloremque voluptatibus? Error culpa dignissimos quas quibusdam iure, iusto aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam accusantium voluptas cum pariatur! Esse animi fugiat, odio nemo expedita doloremque voluptatibus? Error culpa dignissimos quas quibusdam iure, iusto aliquam!</p>
            </div>
            <div style={inputStyle}>
                <label htmlFor="">Skriv in ditt namn här</label>
                <input type="text" 
                    value={props.userName}
                    onChange={handleOnChange}
                />

            </div>
        </main>
    )
}


const mainStyle: CSSProperties = {
    marginTop: '5rem',
    padding: '1rem'
}

const inputStyle: CSSProperties = {
    width: '100%', 
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '5rem'
}
export default Main