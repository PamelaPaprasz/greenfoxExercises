class Pirate():
    def __init__(self, captain = False):
        self.rum_counter = 0
        self.dead = False
        self.captain = captain
    
    def drink_some_rum(self):
        self.rum_counter += 1
        
    def hows_it_going_mate(self):
        
        if self.rum_counter <= 4 and self.dead == False: 
            print('Pour me anudder!')
        elif self.dead == True:
            print('He is dead.')
        else:
            print('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
        
    def die(self):
        self.dead = True
    
    def brawl(self, another_pirate):
        pass
        
    def get_status(self):
        print('Is he the captain? {} How many rum did hi drink? {} Is he dead already? {}.'.format(self.captain, self.rum_counter,  self.dead))
        
        
class Ship(Pirate):
    def __init__(self):
        self.crew = []
    
    def fill_ship(self, pirate):
        self.crew.append(pirate)

    def get_ship_status(self):
        print('The ship has {} pirates on the board'.format(len(self.crew)))
        for pirate in self.crew:
            pirate.get_status()
        
                
pirate1 = Pirate()
pirate2 = Pirate()
captain = Pirate(captain = True)
ship = Ship()
ship.fill_ship(pirate1)
ship.fill_ship(pirate2)
ship.fill_ship(captain)
pirate1.drink_some_rum()
pirate1.hows_it_going_mate()
pirate2.die()
pirate2.hows_it_going_mate()
ship.get_ship_status()
    