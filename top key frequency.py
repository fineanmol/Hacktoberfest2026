# Sample dictionary of frequencies
data = {"apple": 5, "banana": 2, "mango": 8, "orange": 3, "grapes": 8}

# Sort by value (frequency) in descending order
sorted_items = sorted(data.items(), key=lambda x: x[1], reverse=True)

# Get top 3 frequent keys
top_3 = sorted_items[:3]

print("Top 3 frequent keys:")
for key, value in top_3:
    print(f"{key}: {value}")
