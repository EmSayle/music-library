import React from 'react';
import '../components/styles/AddArtist.css';
import axios from 'axios';

const initialFields = {
  name: '',
  genre: '',
};

class AddArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: initialFields,
      isSuccess: false,
      isError: false,
    };
    // this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleAddArtist = (event, err) => {
    event.preventDefault();
    console.log(this.state.fields);

    this.setState({
      isSuccess: false,
      isError: false,
    });

    axios.post('http://127.0.0.1:3000/artists', this.state.fields)
      .then(() => {
        this.setState({
          isSuccess: true,
          fields: initialFields,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
        console.log(err);
      });
  };

  handleFieldChange = (event) => {
    const fields = { ...this.state.fields };
    fields[event.target.name] = event.target.value;
    this.setState({ fields: fields });
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="title">Add An Artist</h1>
          <form className="addArtist" onSubmit={this.handleAddArtist}>
            <label>Artist</label>
            <input id="input" name="name" value={this.state.fields.name} onChange={this.handleFieldChange} type="text" />
            <label id="form">Genre</label>
            <input id="input" name="genre" value={this.state.fields.genre} onChange={this.handleFieldChange} type="text" />
            <button id="formButton" type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}


export default AddArtist;
