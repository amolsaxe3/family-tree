class FamilyTree {
  constructor (name) {
    if (typeof name === 'string'){
    this.value = name;
    this.children = [];
    //this.dashes = '--';
    this.family = '';
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
    // console.log('this---->', JSON.stringify(this, null, 2) + 'memberName---->'+ memberName)
    if (this.value === memberName) return this;
    let famTreeIfFound = undefined;
    for (let i = 0; i < this.children.length; i++){
      const objFamTree = this.children[i]
      // console.log('objFamTree: outside if check but inside for', this.children[i])
      if (objFamTree.value === memberName) {
        // console.log('objFamTree: inside true condition ', this.children[i])
        famTreeIfFound = objFamTree
      } else {
        // console.log ('inside else cond--->');
        if (objFamTree.children.length > 0) { famTreeIfFound = objFamTree.findMember(memberName);}
      }
      // return this.children[i].findMember(this.children[i].value);
    }
      return famTreeIfFound;
  }
  
  log (finalString = '', dashes = '') {
    console.log('finalString/dashes beginnig of LOG fn() return===>', finalString, '====dashes===>', dashes);
        if (finalString === '') {
          dashes += '--';
          finalString += `${dashes} ${this.value}`;
        }
      if (this.children.length > 0){  
        dashes += '--';
        for (let i = 0; i < this.children.length; i++) {
          finalString +=  `\n${dashes} ${this.children[i].value}`
          finalString = this.children[i].log(finalString, dashes)
        }
      } 

    console.log('finalString before return===>',finalString)
    return finalString;
  }
  
 }

module.exports = FamilyTree;
