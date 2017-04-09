class Carrier():
    
    all_aircrafts = []
    
    def __init__(self, store_of_ammo, health_point):
        self.store_of_ammo = store_of_ammo
        self.health_point = health_point
        
        
    def add_aircraft(self, type_of_aircraft):
        self.all_aircrafts.append(type_of_aircraft)
                            
                    
    def get_status(self):
        total_demage = 0
        for i in self.all_aircrafts:
            total_demage += i.base_demage * i.current_ammo
        print('Aircraft count: {}, Ammo Storage: {}, Total demage: {}'.format(len(self.all_aircrafts), self.store_of_ammo, total_demage))
        
        for i in self.all_aircrafts:
            print(i.get_status())
            
            # def fill(self):
            #     for i in store_of_aircrafts:
            #         
            #             
            #             
            # def fight(self):
            #     self.store_of_ammo = 0
            
        
class Aircraft():
    
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
        
    
    def get_type(self):
        print(self.machine_type)
        
        
    def get_status(self):
        print('Type: {}, Ammo: {}, Base Demage: {}, All Demage: {}'.format(self.machine_type, self.current_ammo, self.base_demage, self.base_demage * self.current_ammo))
        
                
        
f16 = Aircraft('F16', 8, 0, 30)
f35_a = Aircraft('F35', 12, 0, 50)
f35_b = Aircraft('F35', 12, 0, 50)
f35_c = Aircraft('F35', 12, 0, 50)
f35_d = Aircraft('F35', 12, 0, 50)
carrier01 = Carrier(400, 3000)
carrier01.add_aircraft(f35_a)
carrier01.add_aircraft(f35_b)
carrier01.add_aircraft(f35_c)
carrier01.add_aircraft(f35_d)
carrier01.add_aircraft(f16)
#print(carrier01.store_of_aircrafts)
f16.get_status()
f16.refill(400)
f16.get_status()
f16.fight()
f16.get_status() 
carrier01.get_status()   
    