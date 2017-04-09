class Carrier():
    
    def __init__(self, store_of_ammo, health_point):
        
        self.store_of_aircrafts = []
        self.store_of_ammo = store_of_ammo
        self.health_point = health_point
        
        
    def add_aircraft(self, type_of_aircraft):
        
        self.store_of_aircrafts.append(type_of_aircraft)
            
    #         
    # def fill(self):
    #             
    #             
    # def fight(self):
    #                 
    #                 
    # def get_status(self):
    #     
        
        
        
class Aircraft(Carrier):
    
    def __init__(self, machine_type = 'None', max_ammo = 0, current_ammo = 0, base_demage = 0):
        self.machine_type = machine_type
        self.max_ammo = max_ammo
        self.current_ammo = current_ammo
        self.base_demage = base_demage
        
    
    def fight(self):
        
        demage = self.base_demage * self.current_ammo
        self.current_ammo = 0
        return demage, self.current_ammo
        
        
    def refill(self, number_of_ammo):
        self.number_of_ammo = number_of_ammo
        
        self.number_of_ammo -= self.max_ammo - self.current_ammo
        self.current_ammo += self.max_ammo - self.current_ammo
        
        
    
    def get_type(self, machine_type = ''):
        
        self.machine_type = machine_type
        return machine_type
        
        
        
    def get_status(self):
        print('Type: {}, Ammo: {}, Base Demage: {}, All Demage: {}'.format(self.machine_type, self.current_ammo, self.base_demage, self.base_demage * self.current_ammo))
        
        

        
        
aircraft01 = Aircraft('F16', 8, 0, 30)
f35 = Aircraft('F35', 12, 0, 50)
carrier01 = Carrier(400, 3000)
carrier01.add_aircraft(aircraft01)
print(carrier01.store_of_aircrafts)
aircraft01.get_status()
aircraft01.refill(400)
aircraft01.get_status()
aircraft01.fight()
aircraft01.get_status()
    
    
    
    
    
    
    
    
    
    
    