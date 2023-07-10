// try catch

const user = {email: 'jdoe@gmail.com'}


try {
  // will produce a reference error
  myFunction();
} catch(e) {
  // can change formatting
  // alert(`${e.name}: IT'S NULL!!!!!!`)
  // console.log(`${e.name}: IT'S NULL!!!!!!`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e instanceof ReferenceError);

  if (!user.name) {
    throw alert(new SyntaxError('User has no name'));
  }

} finally {
  console.log('Finally runs regardless of reslt . . .');
}



console.log('Program continues . . . ');
