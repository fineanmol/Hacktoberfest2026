#include <bits/stdc++.h>
using namespace std;

void printBoard(const array<char,9>& b) {
    cout << "\n";
    for (int r = 0; r < 3; ++r) {
        cout << " ";
        for (int c = 0; c < 3; ++c) {
            int i = r*3 + c;
            cout << (b[i] == ' ' ? char('1' + i) : b[i]);
            if (c < 2) cout << " | ";
        }
        cout << "\n";
        if (r < 2) cout << "-----------\n";
    }
    cout << "\n";
}

char checkWin(const array<char,9>& b) {
    // Rows, Cols, Diags
    const int W[8][3] = {
        {0,1,2}, {3,4,5}, {6,7,8}, // rows
        {0,3,6}, {1,4,7}, {2,5,8}, // cols
        {0,4,8}, {2,4,6}           // diags
    };
    for (auto &w : W) {
        if (b[w[0]] != ' ' && b[w[0]] == b[w[1]] && b[w[1]] == b[w[2]])
            return b[w[0]]; // 'X' or 'O'
    }
    return ' '; // no winner yet
}

bool boardFull(const array<char,9>& b) {
    for (char ch : b) if (ch == ' ') return false;
    return true;
}

int getMove(const array<char,9>& b, char player) {
    int pos;
    while (true) {
        cout << "Player " << player << ", enter position (1-9): ";
        if (!(cin >> pos)) {
            // invalid non-int input
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input. Please enter a number 1-9.\n";
            continue;
        }
        if (pos < 1 || pos > 9) {
            cout << "Choose a number between 1 and 9.\n";
            continue;
        }
        if (b[pos-1] != ' ') {
            cout << "That cell is already taken. Pick another.\n";
            continue;
        }
        return pos-1;
    }
}

int main() {
    cout << "Tic-Tac-Toe (2 players)\n";
    while (true) {
        array<char,9> board;
        board.fill(' ');
        char current = 'X';
        char winner = ' ';
        printBoard(board);

        while (true) {
            int idx = getMove(board, current);
            board[idx] = current;
            printBoard(board);

            winner = checkWin(board);
            if (winner != ' ') {
                cout << "Player " << winner << " wins! 🎉\n";
                break;
            }
            if (boardFull(board)) {
                cout << "It's a draw.\n";
                break;
            }
            current = (current == 'X') ? 'O' : 'X';
        }

        cout << "Play again? (y/n): ";
        char choice;
        cin >> choice;
        if (choice != 'y' && choice != 'Y') break;
        cout << "\n\n";
    }
    cout << "Thanks for playing!\n";
    return 0;
}
