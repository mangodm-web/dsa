class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
      if not list1:
        return list2
      if not list2:
        return list1
      
      dummy = ListNode()
      tail = dummy

      while list1 and list2:
          if list1.val > list2.val:
              tail.next = ListNode(list2.val)
              list2 = list2.next
          else:
              tail.next = ListNode(list1.val)
              list1 = list1.next
          tail = tail.next
      if list1:
          tail.next = list1
      if list2:
          tail.next = list2
      return dummy.next
    