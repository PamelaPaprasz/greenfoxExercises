accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]


def dataname(clients):

	cn = ''
	for i in clients:
		cn += i['client_name'] + ': '+ str(i['balance']) + '\n'
	return cn

print(dataname(accounts))

# Create function that returns the name and balance of cash on an accoun

def transfer(faccount, taccount, transfer):
	frombalance = 0
	tobalance= 0

	for i in accounts:
		if i == faccount:
			frombalance += i['balance'] - transfer

	for e in accounts:
		if e == taccount:
			tobalance += e['balance'] + transfer

	return frombalance, tobalance

print(transfer(accounts[0], accounts[1], 8973520))

# Create function that transfers an balance of cash from one account to another
# it should have three parameters:
#  - from account_number
#  - to account_number
#  - balance
#
# Print "404 - account not found" if any of the account numbers don't exist
