import React from 'react';
import './App.css';
import NoteList from './components/NoteList';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      note: {
        text: '',
        color: '',
        key: ''
      }
    }
  
  // When using handleInput(e) method, in this.setState(), "this" keyword doesn't point to the class automatically, so we need to hard bind it to the constructor. But using handleInput = e => {} won't need hard bind.
  // this.handleInput = this.handleInput.bind(this);
  // this.addItem = this.addItem.bind(this);
  // this.handleSelection = this.handleSelection.bind(this);
  
  
  // a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().
  }


  // arrow function doesn't need .bind
  handleInput = e => {
    this.setState({
        note: {
            ...this.state.note,
            text: e.target.value, // the value of entered in textarea
            key: Date.now() // returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
        }            
    })
    console.log(e.target.value);
  }

  handleSelection = e => {
    this.setState({
      note: {
      ...this.state.note,
      color: e.target.value, // e.target.value = value of option tag
      key: Date.now()
      }            
    })
    console.log(e.target.value);

  // The e is the argument of an event handler you attach to a certain event on a certain component.
  // Events are objects with certain properties, and e.target almost always represents a DOM element.
  // Thus e.target.value is the value property of some DOM element, in this case that means the text entered/selected.
  // It retrieves value of whatever input it was called on.
  }


  submitClicked = e => {
    e.preventDefault();
    // prevent webpage from being refreshed and getting back to original condition where nothing is entered or selected
    // cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. 
    // The browser won't refresh itself by just clicking the button.

    console.log(this.state.note)

    // add new note to the note list
    const newNote = this.state.note
    if (this.state.note.text !== '' && this.state.note.color !== '') {
      const newList = [...this.state.notes, newNote]

      this.setState({
        notes: newList,
        note: {
          text: '',
          color: '',
          key: ''
        }
      })
    }      
  }

  cancelClicked = e => {
    e.preventDefault();

    this.setState({
      notes: this.state.notes,
      note: {
        text: '',
        color: '',
        key: ''
      }
    })
  }


  // when including JS variables and functions in html codes, add {} in order to use JSX object    
  render() { 
    return (
      <div className="app">
        <h1 className="notesTitle">Notes</h1>

        <NoteList 
        notes = {this.state.notes}></NoteList>

        <form className="todoForm"> {/* same effect as <button onClick={this.handleSubmit}> */}
          <div className="left">
            <label>Text</label>
            <textarea
              type="text"
              placeholder="Enter task"
              value={this.state.note.text}
              onChange={this.handleInput}
            // valuve={this.state.text} links the textarea field to the note; set the content of textarea field to be the text of note.
            // By setting the value of <textarea>, <textarea>, and <select> to be this.state.object, React is controlling the <form>. Thus <form> now is a controlled component.
            // "value" attribute is firstly set to the state property, "onChange" attribute fires an event and updates the state by using setState(), and this new state will be again assinged to the "value" attribute. It is like a loop.
            />
          </div>

          <div className="left">
            <label>Color</label>
            <select
              value={this.state.note.color}
              onChange={this.handleSelection}
            >
              <option value="">Select a color</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          <div>
            <button className="submit" type="submit" onClick={this.submitClicked}>Submit</button>            
            <button className="cancel" type="submit" onClick={this.cancelClicked}>Cancel</button>
            {/** type="submit" also allows user to submit by clicking the "Enter" key */}
          </div>
        </form>
      </div>
    )
  }
}

export default App;
