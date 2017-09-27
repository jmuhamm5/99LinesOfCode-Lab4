// Create an array called `friends`. It will hold five of your friends' names.
/*
    For every friend in the friend array, you will want to `console.log` the descending chorus of this brand-new, never before seen song 100 times. The lyric must include your friend's name, and must be grammatically correct when we get down to 1. See the example output for more information.
*/

var friends = ['Brandon', 'Len', 'Tyffani', 'Jake', 'Carlton'];

for(var j = 0; j < friends.length; j++){
  for(var i = 100; i > 0; i--){
    if(i === 1){
      console.log(i+' bottle of water in the fridge, '+i+' bottle of water, '+friends[j]+' drinks a water '+' chugs it out, no more bottles of water in the fridge.');
    } else if(i === 100) {
      console.log(i+' bottles of water in the fridge, '+i+' bottles of water, '+friends[j]+' opens the fridge '+' and is ready to drink like a pig, '+ i +' bottles of water');
    } else {
      console.log(i+' bottles of water in the fridge, '+i+' bottles of water, '+friends[j]+' drinks a water '+' chugs it out, '+i+' bottles of water in the fridge.');
    }

  }
}


document.write('<html style="background-color:green;"></html>')
document.write('<title>99 Lines Of Code In The File</title>');
document.write('<h1 style="color:red;">My Singing Friend</h1>');

document.write('<div style="background-color:orange;text-transform: uppercase;" class="friend"><p>Test 1</p><p>Test 2</p><p>Test 3</p><p>Test 4</p><p>Test 5</p></div>');
