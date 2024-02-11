import sys

N = int(sys.stdin.readline().rstrip())
res = 0


def validate(s):
    tmp = [s[0]]
    cur = s[0]
    for i in s[1:]:
        if i != cur and i in tmp:
            return False
        else:
            tmp.append(i)
        cur = i
    return True


for i in range(N):
    word = sys.stdin.readline().rstrip()
    res = res + 1 if validate(word) else res
print(res)
