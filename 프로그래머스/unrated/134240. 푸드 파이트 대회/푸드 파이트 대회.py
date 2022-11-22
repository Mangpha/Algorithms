def solution(food):
    ans = ""
    for idx, i in enumerate(food[1:]):
        if i<=1: continue
        ans += str(idx + 1) * (i // 2)
    return ans + "0" + ans[::-1]