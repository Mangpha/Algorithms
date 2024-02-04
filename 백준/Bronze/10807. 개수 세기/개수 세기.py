import sys

N = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().rstrip().split()))
find = int(sys.stdin.readline().rstrip())
print(len([i for i, x in enumerate(arr) if x == find]))
