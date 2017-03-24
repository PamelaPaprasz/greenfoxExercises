
queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]


def safe_go(people):

    for elements in people:

        if elements['alcohol'] < 1 and elements['guns'] < 1:
            print(elements['name'])

safe_go(queue)




def gun_plus(people):

    watchlist = []

    for elements in people:

        if elements['guns'] > 0:
            watchlist.append(elements['name'])
    return watchlist

ready_watchlist = gun_plus(queue)
print(ready_watchlist)


def with_alcohol(people):

    security_alchol_loot = 0

    for elements in people:

        if elements['alcohol'] > 0:
            security_alchol_loot += elements['alcohol']

    return security_alchol_loot

cleaned_people = with_alcohol(queue)
print(cleaned_people)

# Queue of festivalgoers at entry
# no. of alcohol units
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
