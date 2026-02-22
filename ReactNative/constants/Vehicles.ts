interface VehicleInfo {
    modelo: string;
    matricula: string;
    año: number;
    motor: string;
    imagen: string;
}


export const vehiculos = new Map<string, VehicleInfo>([
    ["ABC-123", { modelo: "Audi TT", matricula: "ABC-123", año: 2020, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["DEF-456", { modelo: "Mercedes AMG GT", matricula: "DEF-456", año: 2021, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["GHI-789", { modelo: "BMW M3", matricula: "GHI-789", año: 2019, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["JKL-012", { modelo: "Volkswagen Golf GTI", matricula: "JKL-012", año: 2018, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["MNO-345", { modelo: "Porsche 911", matricula: "MNO-345", año: 2022, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["PQR-678", { modelo: "Tesla Model 3", matricula: "PQR-678", año: 2023, motor: "Eléctrico", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["STU-901", { modelo: "Ford Mustang", matricula: "STU-901", año: 2020, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["VWX-234", { modelo: "Chevrolet Camaro", matricula: "VWX-234", año: 2019, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["YZA-567", { modelo: "Toyota Corolla", matricula: "YZA-567", año: 2017, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["BCD-890", { modelo: "Honda Civic", matricula: "BCD-890", año: 2018, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["EFG-111", { modelo: "Nissan GTR", matricula: "EFG-111", año: 2021, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["HIJ-222", { modelo: "Mazda MX-5", matricula: "HIJ-222", año: 2020, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["KLM-333", { modelo: "Lamborghini Huracán", matricula: "KLM-333", año: 2022, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["NOP-444", { modelo: "Ferrari F8", matricula: "NOP-444", año: 2021, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["QRS-555", { modelo: "Seat León", matricula: "QRS-555", año: 2019, motor: "Diésel", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["TUV-666", { modelo: "Renault Clio", matricula: "TUV-666", año: 2018, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["WXY-777", { modelo: "Peugeot 308", matricula: "WXY-777", año: 2020, motor: "Diésel", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["ZAB-888", { modelo: "Hyundai i30", matricula: "ZAB-888", año: 2019, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["CDE-999", { modelo: "Kia Sportage", matricula: "CDE-999", año: 2021, motor: "Híbrido", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["FGH-101", { modelo: "Volvo XC60", matricula: "FGH-101", año: 2022, motor: "Híbrido", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["IJK-202", { modelo: "Jeep Wrangler", matricula: "IJK-202", año: 2017, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["LMN-303", { modelo: "Land Rover Defender", matricula: "LMN-303", año: 2020, motor: "Diésel", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["OPQ-404", { modelo: "Skoda Octavia", matricula: "OPQ-404", año: 2018, motor: "Diésel", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["RST-505", { modelo: "Subaru Impreza", matricula: "RST-505", año: 2019, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }],
    ["UVW-606", { modelo: "Mini Cooper S", matricula: "UVW-606", año: 2021, motor: "Gasolina", imagen: "https://cdn.cars2buy.co.uk/assets/images/vehicles/Pix/SEAT/Leon/4/5Hatchback%20Business/seat_25leonmhevbizhb4fr_lowaggressive.png" }]
]);





    

