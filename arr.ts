class Arr {
  value: string[] = [];
  length: number = 0;

  push(el: string): number {
    const array = new Array(this.value.length + 1);

    for (let i = 0; i < this.value.length; i++) {
      array[i] = this.value[i];
    }
    array[this.value.length] = el;
    this.value = array;
    return this.value.length;
  }

  filter(cb: Function): Array<string> {
    let longueur = 0;
    for (let i: number = 0; i < this.value.length; i++) {
      if (cb(this.value[i])) {
        longueur++;
      }
    }
    const result = new Array(longueur);
    let j = 0;
    for (let i = 0; i < this.value.length; i++) {
      if (cb(this.value[i])) {
        result[j] = this.value[i];
        j++;
      }
    }
    return result;
  }
}

export default Arr;
