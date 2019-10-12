class FamilyTree {
  constructor (name) {
    if (typeof name === 'string'){
    this.value = name;
    this.children = [];
    } else {
      throw 'error';
    }
  }

  insert (childName) {
    let newChild = new FamilyTree(childName)
    this.children.push(newChild);
  }

  familySize () {// children plus parents
    if (this.children.length === 1) {
      return 1;
    }
    return this.children.length + 1;
  }

  findMember(memberName) {
    console.log('this is: ', this)
    if (this.value === memberName) return this;
    for (let i = 0; i< this.children.length; i++){
      return this.children[i].findMember(this.children[i].value);
    }
      return undefined;
  }

  log () {

  }
 
 }

module.exports = FamilyTree;
