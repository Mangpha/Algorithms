import sys

arr = [i for i in range(1, 31)]
for i in range(28):
    arr.remove(int(sys.stdin.readline().rstrip()))
print("\n".join(list(map(str, arr))))
