from opencage.geocoder import OpenCageGeocode

key = 'cc883e1187fd40c9893e4d053b456051'
geocoder = OpenCageGeocode(key)
query = 'London, UK'
results = geocoder.geocode(query)
print(results)

def extract_location(data):
    if data and 'geometry' in data and 'formatted' in data:
        lat = data['geometry']['lat']
        lon = data['geometry']['lng']
        description = data['formatted']
        return {"lat": lat, "lon": lon, "description": description}
    return None

print(extract_location(results))



Boston (42.360081, -71.058884)
Cape Cod (41.668789, -70.296242)
Providence (41.823990, -71.412834)
Albany (41.823990, -71.412834)
Montreal (45.501690, -73.567253)
Mont Tremblant (46.118549, -74.592957)
Lake Placid (44.282330, -73.982964)
New Haven (41.308273, -72.927879)
Philadelphia (39.952583, -75.165222)
Sea Isle City (39.153419, -74.692902)
Washington DC (38.907192, -77.036873)
Miami (38.907192, -77.036873)
Punta Cana (-25.105591, -50.123020)
Dallas (32.776665, -96.796989)
San Francisco (37.774929, -122.419418)
San Jose (37.338207, -121.886330)
Manaus (37.338207, -121.886330)
Lisbon (38.722252, -9.139337)
Dublin (53.349804, -6.260310)
Barcelona (41.385063, 2.173404)
Ibiza (39.020012, 1.482148)
Montpellier (43.608292, 3.879600)
Marseille (43.296482, 5.369780)
Naples (40.851799, 14.268120)
Sorrento (40.626320, 14.375740)
Rome (41.902782, 12.496365)
Milan (45.464203, 9.189982)
Bern (46.947975, 7.447447)
Zurich (47.369019, 8.538030)
Zermatt (46.020714, 7.749117)
Grindelwald (46.624329, 8.034030)
Munich (48.139130, 11.580220)
Capri (40.550911, 14.242930)

Rio De Janiero (-22.928126, -43.178643)
Sao Paulo (-23.550938, -46.638772)
Cahuita (9.764540, -82.874777)
Cancún (21.154304, -86.843918)
San Juan (18.433218, -66.065162)
Seattle (47.594323, -122.331516)
Salt Lake City (40.748924, -111.900258)
Denver (39.704859, -104.990583)
Oklahoma City (35.418562, -97.443576)
Nashville (36.095882, -86.703768)
Chicago (41.832101, -87.639110)
Kamloops (50.671861, -120.407276)
Warsaw (52.201257, 21.067017)
Hyderabad (17.394750, 78.473448)
Sri Lanka (6.979811, 79.916322)
Keralla (9.307580, 76.751043)
Mumbai (19.063308, 72.947976)
