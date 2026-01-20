interface VehicleInfo {
    modelo: string;
    matricula: string;
    año: number;
    motor: string;
    imagen: string;
}


export const vehiculos = new Map<string, VehicleInfo>([
    ["ABC-123", { modelo: "Audi TT", matricula: "ABC-123", año: 2020, motor: "Gasolina", imagen: "https://www.pngmart.com/files/22/Audi-TT-RS-PNG-Isolated-Image.png" }],
    ["DEF-456", { modelo: "Mercedes AMG GT", matricula: "DEF-456", año: 2021, motor: "Gasolina", imagen: "https://static.vecteezy.com/system/resources/previews/059/867/581/non_2x/mercedes-amg-gt-black-series-car-free-png.png" }],
    ["GHI-789", { modelo: "BMW M3", matricula: "GHI-789", año: 2019, motor: "Gasolina", imagen: "https://freepngimg.com/download/bmw/22706-1-bmw-m3-clipart.png" }],
    ["JKL-012", { modelo: "Volkswagen Golf GTI", matricula: "JKL-012", año: 2018, motor: "Gasolina", imagen: "https://www.pngmart.com/files/22/Volkswagen-Golf-GTI-PNG-Photo.png" }],
    ["MNO-345", { modelo: "Porsche 911", matricula: "MNO-345", año: 2022, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20240325/ourmid/pngtree-car-isolated-on-white-background-porsche-911-png-image_12235239.png" }],
    ["PQR-678", { modelo: "Tesla Model 3", matricula: "PQR-678", año: 2023, motor: "Eléctrico", imagen: "https://platform.cstatic-images.com/in/v2/stock_photos/647f7618-2ed2-450f-a867-47fbb148f362/4080ffe6-e9b5-4154-9e51-e659fd1cc302.png" }],
    ["STU-901", { modelo: "Ford Mustang", matricula: "STU-901", año: 2020, motor: "Gasolina", imagen: "https://file.aiquickdraw.com/imgcompressed/img/compressed_363d15ab5d5e1828cba2ded6e7836234.webp" }],
    ["VWX-234", { modelo: "Chevrolet Camaro", matricula: "VWX-234", año: 2019, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20250506/ourmid/pngtree-sleek-yellow-chevrolet-camaro-sports-car-png-image_16213971.png" }],
    ["YZA-567", { modelo: "Toyota Corolla", matricula: "YZA-567", año: 2017, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20240731/ourmid/pngtree-toyota-corolla-sport-car-png-image_13319387.png" }],
    ["BCD-890", { modelo: "Honda Civic", matricula: "BCD-890", año: 2018, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-sleek-red-honda-civic-sedan-sporty-design-aggressive-front-grille-black-png-image_15456934.png" }],
    ["EFG-111", { modelo: "Nissan GTR", matricula: "EFG-111", año: 2021, motor: "Gasolina", imagen: "https://static.foxdealer.com/679/2024/08/2024_NissanGT-R_SolidRed.png" }],
    ["HIJ-222", { modelo: "Mazda MX-5", matricula: "HIJ-222", año: 2020, motor: "Gasolina", imagen: "https://www.mazdausa.com/siteassets/vehicles/2025/mx-5-st/06_btv/001_trims/34-jellies/sport/2025-mazda-mx-5-miata-sport" }],
    ["KLM-333", { modelo: "Lamborghini Huracán", matricula: "KLM-333", año: 2022, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-lamborghini-huracan-luxury-stylish-sport-car-on-dark-black-background-png-image_12693402.png" }],
    ["NOP-444", { modelo: "Ferrari F8", matricula: "NOP-444", año: 2021, motor: "Gasolina", imagen: "https://png.pngtree.com/png-vector/20240302/ourmid/pngtree-ferrari-f8-car-illustrator-png-image_11889659.png" }],
    ["QRS-555", { modelo: "Seat León", matricula: "QRS-555", año: 2019, motor: "Diésel", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["TUV-666", { modelo: "Renault Clio", matricula: "TUV-666", año: 2018, motor: "Gasolina", imagen: "https://png.pngtree.com/png-clipart/20250128/original/pngtree-renault-clio-5-s-dynamic-front-perspective-with-transparent-background-on-png-image_20344373.png" }],
    ["WXY-777", { modelo: "Peugeot 308", matricula: "WXY-777", año: 2020, motor: "Diésel", imagen: "https://kifalstorage.s3.amazonaws.com/new/img/peugeot/308/principal.png" }],
    ["ZAB-888", { modelo: "Hyundai i30", matricula: "ZAB-888", año: 2019, motor: "Gasolina", imagen: "https://fergaehijos.com/wp-content/uploads/2019/03/i30_cleancut-01_16x9.png" }],
    ["CDE-999", { modelo: "Kia Sportage", matricula: "CDE-999", año: 2021, motor: "Híbrido", imagen: "https://www.grupogamboa.com/img/gama/kia/sportage/637fc8dd-4ac0-40d5-b0fa-0275a13b855b.png" }],
    ["FGH-101", { modelo: "Volvo XC60", matricula: "FGH-101", año: 2022, motor: "Híbrido", imagen: "https://mystrongad.com/VCF_VolvoofFredericksburg/Interactive/XC60/2024/2024-Volvo-XC60-Crystal-White.png" }],
    ["IJK-202", { modelo: "Jeep Wrangler", matricula: "IJK-202", año: 2017, motor: "Gasolina", imagen: "https://www.pngmart.com/files/22/Jeep-Wrangler-2018-Transparent-PNG.png" }],
    ["LMN-303", { modelo: "Land Rover Defender", matricula: "LMN-303", año: 2020, motor: "Diésel", imagen: "https://purepng.com/public/uploads/large/purepng.com-startech-land-rover-defender-sixty8-carcarvehicletransportland-roverdefenderstartech-961524655287ikysm.png" }],
    ["OPQ-404", { modelo: "Skoda Octavia", matricula: "OPQ-404", año: 2018, motor: "Diésel", imagen: "https://cdn-datak.motork.net/configurator-imgs/cars/es/800/SKODA/OCTAVIA/44153_WAGON-5-DOORS/skoda-octavia-wagon.png" }],
    ["RST-505", { modelo: "Subaru Impreza", matricula: "RST-505", año: 2019, motor: "Gasolina", imagen: "https://ik.imagekit.io/2ero5nzbxo2/tr:di-placeholder.png,q-70,w-280,q-70/FILES/generations/Mw2eV8EBsFflAtuz5Lf3TbBMWDsqT32vL2J9c2Uw.png?ik-sdk-version=php-2.0.0" }],
    ["UVW-606", { modelo: "Mini Cooper S", matricula: "UVW-606", año: 2021, motor: "Gasolina", imagen: "https://www.thecleanmove.es/imagenes/modelos/43-1.png" }]
]);





    

