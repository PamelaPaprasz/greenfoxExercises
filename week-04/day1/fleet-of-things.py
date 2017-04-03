from fleet import Fleet
from thing import Thing

milk = Thing('Get milk')
obst = Thing('Remove the obstacles')
stand = Thing('Stand up')
stand.complete()
eat = Thing('Eat lunch')
eat.complete()

fleet = Fleet()
fleet.add(milk)
fleet.add(obst)
fleet.add(stand)
fleet.add(eat)

print(fleet)

# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch
