num = int(input())
arr = []
res = [
    [1],
    [2, 4, 8, 6],
    [3, 9, 7, 1],
    [4, 6],
    [5],
    [6],
    [7, 9, 3, 1],
    [8, 4, 2, 6],
    [9, 1],
]

for i in range(num):
    arr.append(map(int, input().split()))

for i in arr:
    a, b = list(i)
    a = str(a)[-1]
    if a == "0":
        print(10)
    elif a == "1":
        print(1)
    else:
        a = int(a)
        print(res[a - 1][b % len(res[a - 1]) - 1])