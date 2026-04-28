import json

with open("raw_data.txt", "r") as f:
    lines = [line.strip() for line in f if line.strip()]

# First 6 lines are headers, skip them
data_lines = lines[6:]

records = []
for i in range(0, len(data_lines), 6):
    chunk = data_lines[i:i+6]
    if len(chunk) < 6:
        break
    records.append({
        "season": chunk[0],
        "ranking_period": chunk[1],
        "division": chunk[2],
        "ranking": int(chunk[3]),
        "rating": float(chunk[4]),
        "group": chunk[5]
    })

with open("data/squash_rankings.json", "w") as f:
    json.dump(records, f, indent=2)

print(f"Converted {len(records)} records to data/squash_rankings.json")
print("Sample (first 3 records):")
for r in records[:3]:
    print(r)
