N, M = list(map(int, input().split()))
b = [i + 1 for i in range(N)]
for n in range(M):
    i, j = list(map(int, input().split()))
    b[i - 1 : j] = list(reversed(b[i - 1 : j]))
print(" ".join(list(map(str, b))))
