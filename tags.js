//use gaero
db.gaero.ensureIndex({"geometry" : "2dsphere"})
var warsaw = {type: "Point", coordinates: [ 21.011878967285156, 52.244945526123047 ]}
//wynik=db.gaero.find( { geometry : { $near :{ $geometry :warsaw,  $maxDistance : 1000000 }}})
wynik=db.gaero.find({geometry: {$geoWithin: {$geometry: {type : "Polygon" ,coordinates: [ [ [ 6, 55 ], [ 15, 55 ], [ 15, 47 ], [ 6, 47 ],[ 6, 55 ] ] ]}}}})
db.wynikgeo2.insert(wynik.toArray())