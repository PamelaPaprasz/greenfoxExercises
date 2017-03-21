current_hours = 14
current_minutes = 34
current_seconds = 42

current_hour_in_seconds = 60 * 60 * 14

current_minutes_in_seconds = 60 * 34

day_in_seconds = 60 * 60 * 24

print(day_in_seconds - (current_hour_in_seconds + current_minutes_in_seconds + current_seconds))
