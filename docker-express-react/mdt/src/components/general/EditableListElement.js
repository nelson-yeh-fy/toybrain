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
      editText: props.fieldValueTBUpdate,
      isEditing: false,
    };
  }

  // handleEdit() {
  //   this.setState(prevState => ({
  //     isEditing: !prevState.isEditing,
  //   }));
  // }
  handleChange(e) {
    this.setState({ editText: e.target.value });
  }

  handleOnFocus(e) {
    this.setState({
      isEditing: true,
    });
  }

  handleOnBlur(e) {
    if (this.state.editText !== this.props.fieldValueTBUpdate) {
      console.log('value changed, try update');
      this.props.funcToInvoke({
        toBeUpdateId: this.props.itemIdToBeUpdate,
        [this.props.fieldKeyTBUpdate]: this.state.editText,
      });
    }
  }

  handleKeyDown(e) {
    if (e.which === this.ESCAPE_KEY) {
      this.setState({
        editText: this.props.fieldValueTBUpdate,
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
          onBlur={e => this.handleOnBlur(e)}
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
  funcToInvoke: PropTypes.func.isRequired,
  itemIdToBeUpdate: PropTypes.string.isRequired,
  fieldValueTBUpdate: PropTypes.string.isRequired,
  fieldKeyTBUpdate: PropTypes.string.isRequired,
};

export default EditableListElement;
