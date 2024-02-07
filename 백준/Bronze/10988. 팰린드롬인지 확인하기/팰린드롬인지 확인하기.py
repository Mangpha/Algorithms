import sys

s = sys.stdin.readline().rstrip()
res = True
for i in range(len(s) // 2):
    if s[i] != s[len(s) - i - 1]:
        res = False
        break
print(1) if res else print(0)
