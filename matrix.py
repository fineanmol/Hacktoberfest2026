a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
b = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

res = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

for i in range(len(a)):
    for j in range(len(a[0])):
        res[i][j] = a[i][j] + b[i][j]

for r in res:
    print(r)
