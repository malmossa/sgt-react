import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }));
  }

  render() {
    if (this.state.grades === []) {
      return <h3>No grades Recorded</h3>;
    } else {
      return (
        <div className="container-fluid">
          <Header text="Student Grade Table" />
          <GradeTable grades={this.state.grades} />
        </div>
      );
    }
  }

}

export default App;
