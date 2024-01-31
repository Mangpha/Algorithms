N, M = list(map(int, input().split()))
b = [i + 1 for i in range(N)]
for n in range(M):
    i, j = list(map(int, input().split()))
    tmp = b[i - 1]
    b[i - 1] = b[j - 1]
    b[j - 1] = tmp
print(" ".join(list(map(str, b))))
