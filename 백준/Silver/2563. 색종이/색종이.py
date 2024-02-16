import sys

N = int(sys.stdin.readline().rstrip())
matrix = [[0 for j in range(100)] for i in range(100)]
ans = 0
for _ in range(N):
    i, j = list(map(int, sys.stdin.readline().rstrip().split()))
    for row in range(i, i + 10):
        for col in range(j, j + 10):
            if matrix[row][col] != 1:
                matrix[row][col] = 1
                ans += 1
print(ans)
