# 1) 1 3 2 7  pump = 2   // 1
# 2) 9 2 4 8  pump = 1 2 3 4 5 6 7 8 9   // 1 1 0 1 0 1 0 1 0 

def func():
    n, p, k, m = map(int, input().split())

    pump = list(map(int, input().split()))
    for i in pump:

        while i <= m:
            if (m-i) % p == 0:
                print(1, end=" ")
                break
            elif k > 1:
                i *= k
            else:
                break
        else:
            print(0, end=" ")

func()