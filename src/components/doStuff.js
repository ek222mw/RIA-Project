var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var doStuff = React.createClass({
    propTypes: {
        doStuff: ptypes.func.isRequired,
		doMoreStuff: ptypes.func.isRequired,
		button1: ptypes.func.isRequired,
		button2: ptypes.func.isRequired,
		button3: ptypes.func.isRequired,
		button4: ptypes.func.isRequired
    },
    showScores: function(){

      var array = this.props.highscoreArray;
      for (i=0;i<array.length;i++)
      {
          document.getElementById("scores").appendChild(array[i+1].name + " " + array[i+1].score);
      }
    },

    render: function(){
        return (
            <div>
                <h2>Highscore</h2>
                <p>Message: {this.props.currentValue}</p>
                <p>
                    <button onClick={this.props.doStuff}>Hello World!</button>
					          <button onClick={this.props.doMoreStuff}>Reset</button>

                </p>



        				<h2>Testing</h2>
                <button onClick={this.showScores}>Show</button>
                <div id="scores">

                </div>

            </div>
        );
    }
});

var mapStateToProps = function(state){
    return state.doStuff;
};

var mapDispatchToProps = function(dispatch){
    return {
        doStuff: function(){
            dispatch(actions.doStuff());
        },
		doMoreStuff: function(){
            dispatch(actions.doMoreStuff());
        },
		button1: function(){
            dispatch(actions.button1());
        },
		button2: function(){
            dispatch(actions.button2());
        },
		button3: function(){
            dispatch(actions.button3());
        },
		button4: function(){
            dispatch(actions.button4());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(doStuff);
