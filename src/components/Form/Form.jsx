import { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
      experience: 'junior',
      license: false,
    });
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleLicense = event => {
    console.log(event.currentTarget.checked);

    this.setState({ license: event.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="formLabel">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="enter name"
            className="formInput"
          />
        </label>

        <label className="formLabel">
          Tag
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            placeholder="enter tag"
            className="formInput"
          />
        </label>

        <p>Your level:</p>
        <div className="radioContainer">
          <label>
            junior
            <input
              type="radio"
              name="experience"
              onChange={this.handleChange}
              value="junior"
              className="radioValue"
              checked={this.state.experience === 'junior'}
            />
          </label>

          <label>
            middle
            <input
              type="radio"
              name="experience"
              onChange={this.handleChange}
              value="middle"
              className="radioValue"
              checked={this.state.experience === 'middle'}
            />
          </label>

          <label>
            senior
            <input
              type="radio"
              name="experience"
              onChange={this.handleChange}
              value="senior"
              className="radioValue"
              checked={this.state.experience === 'senior'}
            />
          </label>
        </div>

        <label>
          <input
            type="checkbox"
            name="license"
            className="checkBox"
            checked={this.state.license}
            onChange={this.handleLicense}
          />
          Agree with terms
        </label>

        <button
          type="submit"
          className="formBtn"
          disabled={!this.state.license}
        >
          Sent
        </button>
      </form>
    );
  }
}

export default Form;
