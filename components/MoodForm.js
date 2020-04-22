class MoodForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'okay'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You recorded you were ' + this.state.value + ' today');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            How are you feeling today? 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="happy">:)</option>
              <option value="okay">:|</option>
              <option value="sad">:'(</option>
              <option value="angry">>:(</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default MoodForm;