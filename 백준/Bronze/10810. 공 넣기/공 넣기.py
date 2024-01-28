N, M = list(map(int, input().split()))
balls = [0 for i in range(N)]
for i in range(M):
    i, j, k = list(map(int, input().split()))
    for n in range(i - 1, j):
        balls[n] = k
print(" ".join([str(balls[i]) for i in range(len(balls))]))
