import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category
      ? this.props.category
      : {
        title: '',
      };
    this.hangdleChange = this.hangdleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  hangdleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }
  render() { 
    return ( 
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange= {this.hangdleChange}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}
 
export default CategoryForm;