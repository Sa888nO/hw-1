// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    if (this.length == 0) {
      return 0;
    }
    return this.length;
  };
  Array.prototype.insert = function (index, element) {
    if (typeof index != 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    if (index < 0) {
      this.unshift(element);
      return this;
    }
    if (index > this.length - 1) {
      this.push(element);
      return this;
    }
    this.splice(index, 0, element);
    return this;
  };
  Array.prototype.remove = function (element) {
    let index = this.indexOf(element);
    if (index === -1) {
      return this;
    }
    this.splice(index, 1);
    return this;
  };
};

export default patchArrays;
