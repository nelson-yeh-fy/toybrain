import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import '../../assets/App.css';
// import imgOK from '../../assets/images/ok_blue.png';

class EditableListElement extends Component {
  constructor(props) {
    super(props);
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      editText: props.editText,
      isEditing: props.isEditing,
    };
  }

  // handleEdit() {
  //   this.setState(prevState => ({
  //     isEditing: !prevState.isEditing,
  //   }));
  // }
  handleOnFocus(e) {
    this.setState({
      isEditing: true,
    });
  }

  handleChange(e) {
    this.setState({ editText: e.target.value });
  }

  handleSubmit(e) {
    const val = this.state.editText.trim();
    console.log(val);
    if (val) {
      this.setState({
        editText: val,
        isEditing: false,
      });
    }
  }

  handleKeyDown(e) {
    if (e.which === this.ESCAPE_KEY) {
      this.setState({
        editText: this.props.editText,
        isEditing: false,
      });
    }
  }

  render() {
    return (
      <Form>
        <textarea
          rows={4}
          maxLength="512"
          className={this.state.isEditing ? 'cfs-description' : 'cfs-description no-border'}
          onChange={e => this.handleChange(e)}
          onFocus={e => this.handleOnFocus(e)}
          onBlur={e => this.handleSubmit(e)}
          onKeyDown={e => this.handleKeyDown(e)}
          value={this.state.editText}
        />
        {
        /*
        <Rail
          internal
          position="right"
          className={this.state.isEditing ? '' : 'hidden'}
        >
          <Button icon={imgOK} />
        </Rail>
        <input
          className={this.state.isEditing ? 'cfs-description' : 'cfs-description hidden'}
          onChange={e => this.handleChange(e)}
          onBlur={e => this.handleSubmit(e)}
          onKeyDown={e => this.handleKeyDown(e)}
          value={this.state.editText}
        />
        */
        }
      </Form>
    );
  }
}

EditableListElement.propTypes = {
  editText: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default EditableListElement;
