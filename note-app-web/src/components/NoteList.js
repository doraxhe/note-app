import React from 'react';
import '../App.css';

class NoteList extends React.Component {

    render() {
        const notes = this.props.notes
        const note = notes.map(item => {
            return (
                <div 
                key={item.key} 
                className={item.color}
                >
                    <p >{item.text}</p>
                </div>
            )                
        })

        return (
            <div>
                {note}
            </div>
        )
    }
}

export default NoteList