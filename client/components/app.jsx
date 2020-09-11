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

  averageGrade() {
    let totalGrades = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      totalGrades += this.state.grades[i].grade;
    }
    const average = totalGrades / this.state.grades.length;
    return average;
  }

  render() {
    if (this.state.grades === []) {
      return <h3>No grades Recorded</h3>;
    } else {
      return (
        <div className="container-fluid">
          <Header average={this.averageGrade()} />
          <GradeTable grades={this.state.grades} />
        </div>
      );
    }
  }
}

export default App;
