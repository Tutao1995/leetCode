/* 
1.列表 List
描述： 列表是一组有序的数组。
列表中的数据项称为元素，元素可以为任意数据类型
 */
class List {
  constructor() {
    /* 当前元素的位置
      @type { number }
      @private
    */
    this.position = 0;
    /* 列表元素类型；
      @type { Array }
      @private 
     */
    this.dataStore = [];
  }
  /* 
    从列表中查找某个元素；
    @protected 
    @params {*} element 待查找的元素
    @return {number} 元素位置
  */
  find(element) {
    return this.dataStore.indexOf(element);
  }
  /* 
    从列表中插入某个元素；
    @protected 
    @params {*} element 待插入的元素
    @params {*=} prev 待插入元素前一个元素，可选
  */
  insert(element, prev) {
    let prevAt = this.find(prev);
    if (prevAt > -1) {
      this.dataStore.splice(prevAt, 0, element);
    } else {
      this.dataStore.push(element);
    }
  }
  /* 
    从列表中删除某个元素
    @protected 
    @params {*} element 待删除的元素
  */
  remove(element) {
    let elementAt = this.find(element);
    if (elementAt > -1) {
      this.dataStore.splice(elementAt, 1);
    }
  }
  /* 
    清空列表
    @protected
  */
  clear() {
    this.dataStore.length = 0;
  }
  /* 
    第一个元素的位置
    @protected
  */
  front() {
    this.position = 0;
  }
  /* 
    最后一个元素的位置
    @protected
  */
  end() {
    this.position = this.dataStore.length - 1;
  }
  /* 
    前一个元素的位置
    @protected
  */
  prev() {
    --this.position;
  }
  /* 
    后一个元素的位置
    @protected
  */
  next() {
    if (this.position < this.dataStore.length) {
      ++this.position;
    }
  }
  /* 
    将元素移到某个位子
    @params {number} position 位置索引
    @protected 
  */
  moveTo(position) {
    this.position = position;
  }
  /* 
    当前元素是否存在前一个元素
    @protected
    return {Boolean} 是否存在
  */
  hasNext() {
    return this.position < this.dataStore.length;
  }
  /* 
    当前元素是否存在下一个元素
    @protected
    @return {Boolean} 是否存在
  */
  hasPrev() {
    return this.position >= 0;
  }
  /* 
    获取当前元素
    @protected
    @return {*} 当前元素
  */
  getElement() {
    return this.dataStore[this.position];
  }
  /* 
    获取当前列表元素数
    @protected
    @return {number} 当前列表长度
  */
  length() {
    return this.dataStore.length;
  }
}
/* 
2.栈 Stack
描述：栈内的元素只能通过列表的一端访问，这一端为栈顶
结构为后入先出   last in first out (LIFO)
*/
class Stack {
  constructor() {
    /* 
      栈元素容器
      @type {Array}
      @private
    */
    this.dataStore = [];
  }
  /* 
    查看栈顶元素
    @protected 
    return {*} 栈顶元素
  */
  peek() {
    let topAt = this.dataStore.length - 1;
    return this.dataStore[topAt];
  }
  /* 
    将元素压入栈
    @protected
    @params{*} element 压入栈的元素
  */
  push(element) {
    this.dataStore.push(element);
  }
  /* 
    将元素弹出栈
    @protected 
    @params {*} 弹出栈的元素
  */
  pop() {
    return this.dataStore.pop();
  }
  /* 
    清空栈
  */
  clear() {
    this.dataStore.length = 0;
  }
  /* 
    获取当前栈元素数
    @protected
    @return {number} 当前栈长度
  */
  length() {
    return this.dataStore.length;
  }
}
/* 
3.队列 Queue
描述：队列只能在队尾插入元素，队首删除元素
结构为先进先出  first in first out(FIFO)
*/
class Queue {
  constructor() {
    /* 
      队列元素容器
      @type{Array}
      @private
    */
    this.dataStore = [];
  }
  /* 
    查看队首元素
    @protected
    @return {*} 队首元素
  */
  head() {
    let headAt = 0;
    return this.dataStore[headAt];
  }
  /* 
    查看队尾元素
    @protected
    @return {*} 队尾元素
   */
  end() {
    let endAt = this.dataStore.length - 1;
    return this.dataStore[endAt];
  }
  /* 
    入队
    @protected
    @params {*} element 入队元素
  */
  enqueue(element) {
    this.dataStore.push(element);
  }
  /* 
    出队
    @protected
    @return {*} 出队元素
  */
  dequeue() {
    return this.dataStore.shift();
  }
  /* 
    清空队列
  */
  clear() {
    this.dataStore.length = 0;
  }
  /* 
    获取当前队列元素数
    @protected
    @return{number} 当前队列长度 
  */
  length() {
    return this.dataStore.length;
  }
}
/* 
4.链表 LinkList  链表节点 (node)
描述：是由一组节点组成的集合
每个节点使用一个对象的引用指向下一个节点
指向另一个节点的引用叫 链（this.next）
*/
class Node {
  constructor(element) {
    /* 
      保存节点数据
      @type {*}
      @private
    */
    this.element = element;
    /* 
      保存指向下一个节点
      @type {null}
      @private
    */
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = new Node("head");
  }
  /* 
    查找节点
    params{*} element 节点元素
    @protected
    @return {Object} 链表节点
  */
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.next !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  /* 
   查找链表最后一个节点
   @protected
   return {Object} 链表节点 
  */
  findLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  /* 
    插入节点
    params {*} element 带插入节点元素
    params {*} prevElement 上一个节点元素
    @protected
    return {Object} 链表节点
  */
  insert(element, prevElement) {
    let currentNode = new Node(element);
    let preNode = this.find(prevElement) || this.findLast();
    currentNode.next = preNode.next;
    preNode.next = currentNode;
  }
  /* 
    查找上一个节点
    params {*} element 当前节点元素
    @protected
    @return {Object} 链表节点
  */
  findPrev(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  /* 
    删除节点
    params {*} element 要删除的节点
    @protected
  */
  remove(element) {
    let prevNode = this.findPrev(element);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
}

/* 
5.字典 Dictionary
描述：字典是一种以键值对形式的数据存储的数据结构
*/
class Dictionary {
  constructor() {
    /* 
      字典容器
      @type {Array}
      @private
    */
    this.dataStore = {};
  }
  /* 
    向字典添加键值对
    @params {String} key  字典的键
    @params {*} value  字典的值
  */
  add(key, value) {
    this.dataStore[key] = value;
  }
  /* 
    查找字典中元素
    @params {String} key 待查找的键
    @protected
    @return {*} 待查找的值
  */
  find(key) {
    return this.dataStore[key];
  }
  /* 
    删除字典中的元素
    @params {String} key 待删除的键
    @protected
  */
  remove(key) {
    delete this.dataStore[key];
  }
  /* 
    清空字典元素
    @protected
  */
  clear() {
    Object.keys(this.dataStore).forEach((key) => {
      delete this.dataStore[key];
    });
  }
  /* 
    展示字典中元素
    @protected
  */
  display() {
    Object.keys(this.dataStore).forEach((key) => {
      console.log(`${key}: ${this.dataStore[key]}`);
    });
  }
}
/* 
6.散列  HashTable
描述：通过散列函数尽量的将键均匀的映射到数组中
*/
class HashTable {
  constructor() {
    /* 
      散列表容器
      @type{Array}
      @private
    */
    this.table = new Array(137);
  }
  /* 
    散列算法
    @params {String} str 待转换的字符，使用触发留余法
    @protected 
    @return {Number} 转换后的值
  */
  hashFunc(str) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length + 1;
    }
    return parseInt(total);
  }
  /* 
    将数据存入散列表
    @params {String} key 待存入数据的键
    @params {String} data 待存入数据
    @protected 
  */
  put(key, data) {
    let position = this.hashFunc(key);
    this.table[this.position] = data;
  }
  /* 
    获取对应键的值
    @params {String} key 待取数据的键
    @protected 
    @return {number} 对应键的值 
  */
  get(key) {
    let position = this.hashFunc(key);
    return this.table[position];
  }
  /* 
    删除对应键的值
    @params {String} key 待删除数据的键
    @protected 
  */
  remove(key) {
    let position = this.hashFunc(key);
    delete this.table[position];
  }
  /* 
    展示散列表
  */
  display() {
    this.table.forEach((item, index) => {
      if (item) {
        console.log(item);
      }
    });
  }
}
/* 
7.集合 Set
描述：集合是一组无序但彼此之间又有一定相关性的成员构成，每个成员在集合中只出现一次
*/
class Set {
  constructor() {
    this.dataStore = [];
  }
  /* 
    添加元素
    @params {*} element 待添加的元素
    @protected
    @return {Boolean} 添加成功 返回true 否则返回false
  */
  add(element) {
    if (!this.dataStore.includes(element)) {
      this.dataStore.push(element);
      return true;
    }
    return false;
  }
  /* 
    删除元素
    @params {*} element 待删除的元素
    @protected
    @return {Boolean} 删除成功 返回true 否则返回false
  */
  remove(element) {
    let elementAt = this.dataStore.indexOf(element);
    if (~elementAt) {
      this.dataStore.splice(elementAt, 1);
      return true;
    }
    return false;
  }
  /* 
    与其他集合的合并
    @params {Set} set 待合并的结合
    @protected
    @return {Set} 合并后的集合
  */
  union(set) {
    let tempSet = new Set();
    this.dataStore.forEach((item) => {
      tempSet.add(item);
    });
    set.forEach((item) => {
      if (!tempSet.dataStore.includes(item)) {
        tempSet.add(item);
      }
    });
    return tempSet;
  }
  /* 
    与其他集合交集
    @params {Set} set 其他集合
    @protected
    @return {Set} 两集合共同存在的成员的集合
  */
  intersect(set) {
    let tempSet = new Set();
    this.dataStore.forEach((dItem) => {
      if (set.dataStore.includes(dItem)) {
        tempSet.add(dItem);
      }
    });
    return tempSet;
  }
  /* 
    与其他集合补集
    @params {Set} set 其他集合
    @protected
    @return {Set} 属于该集合而不属于其他集合的成员的集合
  */
  difference(set) {
    let tempSet = new Set();
    this.dataStore.forEach((dItem) => {
      if (set.dataStore.includes(dItem)) {
        tempSet.add(dItem);
      }
    });
    return tempSet;
  }
  /* 
    判读是不是其他集合子集
    @params {Set} set 其他集合
    @protected
    @return {Boolean} 是不是其他集合子集
  */
  subSet(set) {
    if (this.dataStore.length > set.dataStore.length) return false;
    else
      return !this.dataStore.find((element) => set.dataStore.includes(element));
  }
  /* 
    展示集合
  */
  display() {
    this.dataStore.forEach((element, index) => {
      console.log(`${index}: ${element}`);
    });
  }
}
/* 
8.二叉查找树 BST  书节点 Node
描述：树是一种非线性的数据结构，以分层的方式存储数据
树：由一组以边链接的节点组成
从一个节点到另一个节点的这一组边称为路径，以某种特定顺序访问树中的所有节点称为树的遍历
二叉树：子节点不超过两个的树
BST：二叉查找树是一种特殊的二叉树，相对小的值保存在左节点，较大的值保存在右节点中
*/
class Node {
  constructor(data, left, right) {
    /* 
      节点保存的数据
      @type{*}
      @private
    */
    this.data = data;
    /* 
      左节点
      @type{Node}
      @private
    */
    this.left = left;
    /* 
      右节点
      @type{Node}
      @private
    */
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  /* 
    插入节点
    @type {Node}
    @private
  */
  insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) this.root = n;
    else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  /* 
    中序遍历
    @params {Node} node 遍历的根节点
    @private
  */
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  /* 
    先序遍历
    @params {Node} node 遍历的根节点
    @private
  */
  preOrder(node) {
    if (node) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  /* 
    后序遍历
    @params {Node} node 遍历的根节点
    @private
  */
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
  /* 
    获取最小节点
    @params {Node} node 待查找的节点
    @private
    @return {Node} 拥有最小值的节点
  */
  getMin(node) {
    let current = node || this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  /* 
    获取最大节点
    @params {Node} node 待查找的节点
    @private
    @return {Node} 拥有最大值的节点
  */
  getMax(node) {
    let current = node || this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }
  /* 
    查找指定数据的节点
    @params {*} data 待查找的数据
    @private
    @return {Node} 拥有指定数据的节点
  */
  find(data) {
    let current = this.root;
    while(current !== null) {
      if(current.data === data) {
        return current
      } else if(data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
  /* 
    删除指定数据的节点
    @params {*} data 待查删除的数据
    @private
  */
  remove(data) {
    let self = this;
    this.root = removeNode(this.root, data)
    function removeNode(node, data) {
      if(node === null) return null
      if(data === node.data) {
        if(node.left === null && node.right === null) {
          return null
        }
        if(node.left === null) {
          return node.right
        }
        if(node.right === null) {
          return node.left
        }
        let tempNode = self.getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node
      } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      } else {
        node.right = removeNode(node.right, data);
        return node
      }
    }
  }
}
