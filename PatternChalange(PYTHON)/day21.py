# 🌸 Beautiful Diamond Pattern 🌸

rows = int(input("Enter number of rows: "))

# Upper part
for i in range(1, rows + 1):
    print(" " * (rows - i) + "* " * i)

# Lower part
for i in range(rows - 1, 0, -1):
    print(" " * (rows - i) + "* " * i)
