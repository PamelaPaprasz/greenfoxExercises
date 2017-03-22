# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end

nimals = ["kuty", "macs", "cic"]
string = 'a'
animals = [element + string for element in nimals]
print(animals)
