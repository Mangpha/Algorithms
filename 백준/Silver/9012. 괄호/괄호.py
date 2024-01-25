n = int(input())
inputs = []
for i in range(n):
    inputs.append(str(input()))
for i in inputs:
    tmp = []
    res = True
    for ps in i:
        if ps == "(":
            tmp.append(ps)
        if ps == ")":
            if len(tmp) == 0:
                res = False
                break
            else:
                tmp.pop()
    if len(tmp) > 0 or not res:
        print("NO")
    else:
        print("YES")
