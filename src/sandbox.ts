type StrOrNum = string | number
type  userObj = {name: string, uid: StrOrNum}

const firstFunction = (uid: StrOrNum, item: string) {
  console.log(`${item} has a uid of ${uid}`);
}
firstFunction(1, 'hello')

const secondFunction = (user: userObj) => {
  console.log(`${user.name} says hello`);
}

secondFunction({name: 'hi', uid:10})