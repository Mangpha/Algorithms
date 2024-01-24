nums = list(map(int, input().split()))
dic = {}
for i in range(len(nums)):
    dic[nums[i]] = 1 if not dic.get(nums[i]) else (dic[nums[i]] + 1)
n = max(dic, key=dic.get)
l = len(dic.keys())
if l == 1:
    print(10000 + n * 1000)
elif l == 2:
    print(1000 + n * 100)
else:
    print(max(dic.keys()) * 100)