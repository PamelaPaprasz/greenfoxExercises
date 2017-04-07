
# 
# 
# def median(pool):
#     return pool[int((len(pool) - 1) / 2)]
    
    
def median(pool):
    pool.sort()
    
    if len(pool) % 2 != 0:
        return pool[len(pool) // 2]
    
    elif len(pool) % 2 == 0:
        return (pool[(len(pool) // 2)] + pool[(len(pool) // 2)-1]) // 2

