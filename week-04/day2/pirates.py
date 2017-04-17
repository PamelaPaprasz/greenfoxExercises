class Pirate():
    def __init__(self):
        self.rum_counter = 0
        self.dead = 0
    
    def drink_some_rum(self):
        self.rum_counter += 1
        
    def hows_it_going_mate(self):
        
        if self.rum_counter <= 4 and self.dead == 0: 
            print('Pour me anudder!')
        elif self.dead == 1:
            print('He is dead.')
        else:
            print('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
        
    def die(self):
        self.dead = 1
    
    def brawl(self, another_pirate):
        pass
        
    def get_status(self):
        print('Drunk: {}, dead: {}.'.format(self.rum_counter,  self.dead))
        
        
class Ship(Pirate):
    def __init__(self, pirate = 0, captain = 0):
        self.crew = []
        self.pirate = pirate
        self.captain = captain
    
    def fill_ship(self):
        self.pirate += 1
        if self.captain == 0:
            self.captain += 1
        self.crew.append(self.pirate)
        self.crew.append(self.captain)
        


pirate1 = Pirate()
pirate2 = Pirate()
captain = Pirate()
ship = Ship()
for i in range(10):
    ship.fill_ship()
pirate1.get_status()
#ship.get_status()
pirate1.drink_some_rum()
pirate1.hows_it_going_mate()
pirate2.die()
pirate2.hows_it_going_mate()

        
        