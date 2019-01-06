// import React from 'react';
// import '../components/styles/AddArtist.css';
// import axios from 'axios';

// const initialFields = {
//   name: '',
//   year: '',
// };

// class AddSong extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fields: initialFields,
//       isSuccess: false,
//       isError: false,
//     };
//     // this.handleNameChange = this.handleNameChange.bind(this);
//   }

//   handleAddSong = (event, err) => {
//     event.preventDefault();
//     console.log(this.state.fields);

//     this.setState({
//       isSuccess: false,
//       isError: false,
//     });

//     axios.post('http://127.0.0.1:3000/album/:id/song', this.state.fields)
//       .then(() => {
//         this.setState({
//           isSuccess: true,
//           fields: initialFields,
//         });
//       })
//       .catch((err) => {
//         this.setState({
//           isError: true,
//         });
//         console.log(err);
//       });
//   };

//   handleFieldChange = (event) => {
//     const fields = { ...this.state.fields };
//     fields[event.target.name] = event.target.value;
//     this.setState({ fields: fields });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h1 className="title">Add A Song</h1>
//           <form className="addSong" onSubmit={this.handleAddSong}>
//             <label>Song</label>
//             <input id="input" name="name" value={this.state.fields.name} onChange={this.handleFieldChange} type="text" />
//             <label id="form">Year</label>
//             <input id="input" name="year" value={this.state.fields.year} onChange={this.handleFieldChange} type="number" />
//             <button id="formButton" type="submit">Add</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


// export default AddSong;
