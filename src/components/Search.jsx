var Search = (props) => (
  <div className="search-bar form-inline">
    {console.log(props)}
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// ReactDOM.render(<Search />, document.getElementById('app'))
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
