#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isPalindrome(const char *s) {
    int i = 0;
    int j = strlen(s) - 1;
    while (i < j) {
        // Skip non‐alphabet characters (optional)
        while (i < j && !isalnum(s[i])) i++;
        while (i < j && !isalnum(s[j])) j--;
        if (tolower(s[i]) != tolower(s[j])) {
            return 0;  // Not a palindrome
        }
        i++;
        j--;
    }
    return 1;  // Is a palindrome
}

int main() {
    char str[1000];
    printf("Enter a string: ");
    if (fgets(str, sizeof(str), stdin) != NULL) {
        // Remove newline if present
        size_t len = strlen(str);
        if (len > 0 && str[len‐1] == '\n') {
            str[len‐1] = '\0';
        }
        if (isPalindrome(str)) {
            printf("\"%s\" is a palindrome.\n", str);
        } else {
            printf("\"%s\" is not a palindrome.\n", str);
        }
    }
    return 0;
}
