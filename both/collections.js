Gallery = new Mongo.Collection("photos");
Gallery.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
