function getShortMessages(messages) {
  var result = [];
  messages.filter(function(obj) {
    if(obj.message.length < 50){
      result.push(obj.message);
    }
  });
  return result;
}

module.exports = getShortMessages