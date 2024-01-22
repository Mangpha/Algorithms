num = int(input())
nums = []
for i in range(num):
    nums.append(int(input()))

for i in range(1, num):
    tmp = nums[i]
    prevIdx = i - 1
    while (prevIdx >= 0) and nums[prevIdx] > tmp:
        nums[prevIdx + 1] = nums[prevIdx]
        prevIdx -= 1
    nums[prevIdx + 1] = tmp

print("\n".join(map(str, nums)))
