function kenaRazia(date, data) {
    const ganjilGenapRoutes = [
      "Gajah Mada",
      "Hayam Wuruk",
      "Sisingamangaraja",
      "Panglima Polim",
      "Fatmawati",
      "Tomang Raya"
    ];
  
    const isEvenDate = date % 2 === 0;
    const result = [];
  
    for (let i = 0; i < data.length; i++) {
      const vehicle = data[i];
  
      if (vehicle.type === "Mobil") {
        const platNumber = vehicle.plat.split(" ")[1];
        const lastDigit = parseInt(platNumber[platNumber.length - 1]);
        const isEvenPlat = lastDigit % 2 === 0;
  
        if (isEvenPlat !== isEvenDate) {
          let tilangCount = 0;
          for (let j = 0; j < vehicle.rute.length; j++) {
            if (ganjilGenapRoutes.indexOf(vehicle.rute[j]) !== -1) {
              tilangCount++;
            }
          }
          if (tilangCount > 0) {
            result.push({ name: vehicle.name, tilang: tilangCount });
          }
        }
      }
    }
  
    return result;
  }
  
  console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: [
          "Pintu Besar Selatan",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang"
        ]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: [
          "Fatmawati",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang",
          "Gajah Mada"
        ]
      }
    ])
  );
  