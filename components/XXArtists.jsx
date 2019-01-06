// import React from 'react';
// import axios from 'axios';
// import queryString from 'query-string';


// class Artists extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       artists: [],
//       anError: false,
//     };
//     console.log('constructor');
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Artists</h1>
//       </React.Fragment>
//     );
//   }
// }

// export default Artists;

// componentWillMount() {
//   console.log('componentWillMount');
// }

// componentDidMount() {
//   console.log('componentDidMount');
//   axios.get('http://127.0.0.1:3000/artists', this.state.artists, this.state.anError)
//     .then(({ data: artists }) => this.setState({ artists }))
//     .catch((err) => {
//       this.setState({
//         anError: true,
//       });
//       console.log(err);
//     });
// }

// shouldComponentUpdate(nextProps, nextState) {
//   console.log('shouldComponentUpdate', { nextProps, nextState });
//   return true;
// }

// componentWillUpdate(nextProps, nextState) {
//   console.log('componentWillUpdate', { nextProps, nextState });
// }

// componentDidUpdate() {
//   axios.get('http://127.0.0.1:3000/artists')
//     .then(({ data: artists }) => this.setState(artists))
//     .catch(err => console.log(err));
//   const values = queryString.parse(this.props.name);
//   console.log(values);
// }

