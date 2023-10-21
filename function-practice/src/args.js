function add(a){
  console.log(this);
  console.log(arguments);
}
add(1,2,3)