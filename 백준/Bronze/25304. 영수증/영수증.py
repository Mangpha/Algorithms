total = int(input())
n = int(input())
nums = 0
for i in range(n):
    a, b = list(map(int, input().split()))
    nums += a * b
print("Yes") if total == nums else print("No")