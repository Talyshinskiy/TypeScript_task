class Collection<T extends number | string> {
  constructor(private _items: T[]) { }

  add(value: T) {
    this._items.push(value)
  }

  get items(): T[] {
    return this._items
  }
}

const col1 = new Collection<number>([1, 2, 3, 4, 5, 6,])
col1.add(7)

const col2 = new Collection<string>(["1", "2", "3"])
col2.add("4")

class List <R>extends Collection<string>{
  constructor(public type: R) {
    super(["a"])
  }
}
const list1 = new List('qwerty')
const list2 = new List(100)

