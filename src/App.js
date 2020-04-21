import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Introduction from './components/Introduction/introduction';
import headshot from './assets/headshot.png';

class App extends Component {

  state = {
    introduction: ["Full Stack Developer and IT Professional with experience in object-oriented programming (OOP), Web API’s, frameworks and libraries. Received multiple scholarships related to development and have a variety of development related certifications. Driven, passionate, and love to create and learn.",
      "Over the last several years, I've learned new languages and frameworks to create modern web and software applications. Using technologies such as Java, Node, React, and others I am thrilled to utilize my skills and passion – building great things with modern technologies."],
    headshot: headshot
  }


  render() {
    return (
      <Layout >
        <Introduction photo={this.state.headshot} intro={this.state.introduction} />
        <div>
          <p>Jobs</p>
        </div>
      </Layout>
    );
  }

}

export default App;
