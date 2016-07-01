var functions = {
  filterActive: function(array) {
    return array.filter(function(item){
      return item.user_data.active === 1;
    })
  }
}

module.exports = functions
