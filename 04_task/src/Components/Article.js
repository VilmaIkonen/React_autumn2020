import React, { Component } from 'react';
import '../styles/Article.css';

class Article extends Component {
  state = { votes: 0 };
  addHandler = () => {
    this.setState({ votes: this.state.votes + 1 });
  };
  render() {
    return (
      <div className="container">
        <img
          alt="colourful laptop on dark bakground"
          src="https://source.unsplash.com/u76CN5rZeOU/"
        />
        <h2>Full Stack Web Developer program</h2>
        <p>
          Full Stack Web Developer program is designd for adults who want to
          works as software developers. Studying in the program is very
          practical in comparison to academic studies. The studies focus 100% on
          getting the core skills needed as software developer.
        </p>
        <div className="votes">{this.state.votes} people like this article</div>
        <div className="buttons">
          <button onClick={''}>Read more</button>
          <button onClick={this.addHandler}>Give a vote</button>
        </div>
      </div>
    );
  }
}

export default Article;
