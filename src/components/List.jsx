var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id": 1,"text": "Bacon"},
  {"id": 2,"text": "Peanut butter"},
  {"id": 3,"text": "Jelly Pie"}
];

var List = React.createClass({
  render: function(){
    var listItem = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} /> ;
    });
    return (<ul>{listItem}</ul>);
  }
});

module.exports = List;
