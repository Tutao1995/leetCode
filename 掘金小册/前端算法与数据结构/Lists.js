/*
链表的合并
*/

//  输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function ListNode() {
    this.value = '';
    this.next = null
}

const mergeTwoLists = (l1, l2) => {
    let head = new ListNode();
    let cur = head;
    while(l1 && l2) {
        if(l1.value <= l2.value) {
            cur.value = l1.value;
            l1 = l1.next
        } else {
            cur.value = l2.value;
            l2 = l2.next
        }
        // “针”在串起一个结点后，也会往前一步
        cur = cur.next
    }
    cur.next = l1!==null ? l1 : l2;
    return head.next
}


/*
    链表节点的删除
*/

const deleteLists = (l1) => {
    let cur = l1;
    while(cur !== null && cur.next !== null) {
        if(cur.next.value === cur.value) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next
        }
    }
    return l1
}


/*
    dummy 节点
*/

const deleteListsDummy = head => {
    if(!head || !head.next) {
        return head
    }

    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    while(cur.next && cur.next.next) {
        if(cur.next.value === cur.next.next.value) {
            let val = cur.next.value;
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while(cur.next && val === cur.next.value) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}
