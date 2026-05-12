const polarExpressData = {
  company: {
    name: "Polar Express",
    slogan: "Fast delivery across the coldest regions",
    founded: 2012,
    headquarters: "Anchorage, Alaska",
  },

  services: [
    {
      id: 1,
      title: "Arctic Delivery",
      description: "Quick package shipping to distant northern areas.",
      priceFrom: 25
    },
    {
      id: 2,
      title: "Frozen Cargo Transport",
      description: "Transportation for frozen and temperature-sensitive products.",
      priceFrom: 40
    },
    {
      id: 3,
      title: "Northern Logistics",
      description: "Business logistics services for polar territories.",
      priceFrom: 100
    },
    {
      id: 4,
      title: "Expedition Supply",
      description: "Supply delivery for scientific and polar expeditions.",
      priceFrom: 60
    }
  ],

  branches: [
    {
      id: 1,
      city: "Anchorage",
      country: "USA",
      address: "221 Glacier Road",
      phone: "+1 907 555 0134",
      email: "anchorage@polarexpress.com",
      workingHours: {
        monday: "08:00 - 18:00",
        tuesday: "08:00 - 18:00",
        wednesday: "08:00 - 18:00",
        thursday: "08:00 - 18:00",
        friday: "08:00 - 18:00",
        saturday: "10:00 - 16:00",
        sunday: "Closed"
      }
    },
    {
      id: 2,
      city: "Reykjavik",
      country: "Iceland",
      address: "14 Aurora Street",
      phone: "+354 555 8821",
      email: "reykjavik@polarexpress.com",
      workingHours: {
        monday: "09:00 - 17:00",
        tuesday: "09:00 - 17:00",
        wednesday: "09:00 - 17:00",
        thursday: "09:00 - 17:00",
        friday: "09:00 - 16:00",
        saturday: "Closed",
        sunday: "Closed"
      }
    },
    {
      id: 3,
      city: "Tromsø",
      country: "Norway",
      address: "88 Northern Lights Ave",
      phone: "+47 77 55 21 09",
      email: "tromso@polarexpress.com",
      workingHours: {
        monday: "08:30 - 17:30",
        tuesday: "08:30 - 17:30",
        wednesday: "08:30 - 17:30",
        thursday: "08:30 - 17:30",
        friday: "08:30 - 16:30",
        saturday: "Closed",
        sunday: "Closed"
      }
    }
  ],

  stats: [
    { label: "Packages delivered", value: "1.2M+" },
    { label: "Active branches", value: 18 },
    { label: "Countries covered", value: 9 },
    { label: "Years of experience", value: 13 }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      company: "Arctic Research Group",
      text: "Polar Express delivered critical research equipment to our expedition base faster than expected."
    },
    {
      id: 2,
      name: "Jonas Berg",
      company: "Nordic Fisheries",
      text: "Reliable cold-chain delivery. Perfect for transporting frozen seafood."
    }
  ]
};