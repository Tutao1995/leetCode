/*
链表的合并
*/

//  输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function ListNode() {
    this.value = "";
    this.next = null;
}

const mergeTwoLists = (l1, l2) => {
    let head = new ListNode();
    let cur = head;
    while (l1 && l2) {
        if (l1.value <= l2.value) {
            cur.value = l1.value;
            l1 = l1.next;
        } else {
            cur.value = l2.value;
            l2 = l2.next;
        }
        // “针”在串起一个结点后，也会往前一步
        cur = cur.next;
    }
    cur.next = l1 !== null ? l1 : l2;
    return head.next;
};

/*
    链表节点的删除
*/

const deleteLists = (l1) => {
    let cur = l1;
    while (cur !== null && cur.next !== null) {
        if (cur.next.value === cur.value) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return l1;
};

/*
    dummy 节点

    它可以帮我们处理掉头结点为空的边界问题，帮助我们简化解题过程。因此涉及链表操作、尤其是涉及结点删除的题目（对前驱结点的存在性要求比较高）
*/

const deleteListsDummy = (head) => {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.value === cur.next.next.value) {
            let val = cur.next.value;
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while (cur.next && val === cur.next.value) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

/*
快慢指针

删除链表倒数第N个节点

给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*/

const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};

/*
多指针法
链表的反转
真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

*/

const reverseList = (list) => {
    let pre = null;
    let cur = list;
    while (cur !== null) {
        let next = cur.next; // 缓存下一节点
        cur.next = pre; // 连接前置节点
        pre = cur; // 结果输出
        cur = next; // 用下一节点替换当前节点
        console.log(JSON.stringify(pre));
    }
    return pre;
};

/*
局部反转一个链表

反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

*/

const test = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: null,
                    },
                },
            },
        },
    },
};

console.log(reverseList(test));
