/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {

        ListNode *prev=nullptr;
        ListNode *curr=head;
        int count=0;

        while(curr!=NULL){
            curr=curr->next;
            count++;
        }
        if(n>count){
            return head;
        }
        curr=head;
        int final_count=count-n;

        while(final_count>0){
            prev=curr;
            curr=curr->next;
            final_count--;
        }
        if(prev!=nullptr){
            if(curr->next!=nullptr){
                prev->next=curr->next;
            }
            else{
                prev->next=nullptr;
            }
        }
        else{
            head=head->next;
            delete curr;
        }
        return head;
        
    }
};
