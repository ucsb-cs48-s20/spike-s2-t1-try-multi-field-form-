class SleepForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '0 hour(s)'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You recorded ' + this.state.value + ' of sleep last night');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            How many hours of sleep did you have?
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="0 hour(s)">0 hour(s)</option>
              <option value="1 hour(s)">1 hour(s)</option>
              <option value="2 hour(s)">2 hour(s)</option>
              <option value="3 hour(s)">3 hour(s)</option>
              <option value="4 hour(s)">4 hour(s)</option>
              <option value="5 hour(s)">5 hour(s)</option>
              <option value="6 hour(s)">6 hour(s)</option>
              <option value="7 hour(s)">7 hour(s)</option>
              <option value="8 hour(s)">8 hour(s)</option>
              <option value="9 hour(s)">9 hour(s)</option>
              <option value="10+ hour(s)">10+ hour(s)</option>

            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default SleepForm;