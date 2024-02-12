import sys

data = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0,
}

t = 0
d = 0

for i in range(20):
    a, b, c = list(map(str, sys.stdin.readline().split()))
    if c == "P":
        continue
    t += float(b) * data[c]
    d += float(b)
print(round(t / d, 6)) if d != 0 else print("0.000000")
