using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DBInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {

            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "kenan",
                    Email = "kenan@test.com"

                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });
            }







            if (context.Products.Any()) return;

            var products = new List<Product>{
                //Laptops
                new Product
                {
                    Name = "ROG Flow X16 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4070 Laptop GPU, Windows 11 Pro, 13th Gen Intel® Core™ i9-13900H, ROG Nebula HDR Display, 16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz, 2TB PCIe® 4.0 NVMe™ M.2 SSD",
                    Price = 200000,
                    PictureUrl = "/images/products/rogflowx16.png",
                    Brand = "ROG Flow",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Flow Z13-ACRNM",
                    Description = "NVIDIA® GeForce RTX™ 4070 Laptop GPU, Windows 11 Pro, 13th Gen Intel® Core™ i9-13900H, ROG Nebula Display, 13.4 inch, QHD+ 16:10(2560 x 1600, WQXGA), Refresh Rate:165Hz, 1TB PCIe® 4.0 NVMe™ M.2 SSD(2230)",
                    Price = 150000,
                    PictureUrl = "/images/products/rogflowz13.png",
                    Brand = "ROG Flow",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Flow Z13 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 2050, Windows 11 Pro,13th Gen Intel® Core™ i9-13900H,ROG Nebula Display,13.4 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:165Hz,512GB PCIe® 4.0 NVMe™ M.2 SSD (2230)",
                    Price = 180000,
                    PictureUrl = "/images/products/rogflowz13g.png",
                    Brand = "ROG Flow",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix G15 (2022)",
                    Description =
                        "GeForce RTX™ 3050 Laptop GPU,Windows 11 Home,AMD Ryzen™ 9 6900HX,15.6 inch, FHD (1920 x 1080) 16:9, Refresh Rate:300Hz,512GB PCIe® 4.0 NVMe™ M.2 SSD",
                    Price = 200000,
                    PictureUrl = "/images/products/rogstrixg15.png",
                    Brand = "ROG Strix",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix G16 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4080 Laptop GPU,Windows 11 Pro,13th Gen Intel® Core™ i9-13980HX,ROG Nebula Display,16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz,2TB PCIe® 4.0 NVMe™ M.2 SSD",
                    Price = 250000,
                    PictureUrl = "/images/products/rogstrixg16.png",
                    Brand = "ROG Strix",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix SCAR 17 X3D (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4090 Laptop GPU,Windows 11 Pro,AMD Ryzen™ 9 7945HX3D,17.3 inch, WQHD (2560 x 1440) 16:9, Refresh Rate:240Hz,2TB PCIe® 4.0 NVMe™ M.2 Performance SSD",
                    Price = 120000,
                    PictureUrl = "/images/products/rogstrixscar17.png",
                    Brand = "ROG Strix",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Zephyrus Duo 16 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4090 Laptop GPU,Windows 11 Pro,AMD Ryzen™ 9 7945HX,16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz,Additional Display: 14 3840 x 1100(4K) IPS-level Panel,2TB + 2TB PCIe® 4.0 NVMe™ M.2 Performance SSD (RAID 0)",
                    Price = 1000000,
                    PictureUrl = "/images/products/rogzephyrusduo.png",
                    Brand = "ROG Zephyrus",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Zephyrus G14 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4060 Laptop GPU,Windows 11 Pro,AMD Ryzen™ 9 7940HS,ROG Nebula Display,14 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:165Hz,1TB PCIe® 4.0 NVMe™ M.2 SSD",
                    Price = 80000,
                    PictureUrl = "/images/products/rogzephyrusg14.png",
                    Brand = "ROG Zephyrus",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Zephyrus M16 (2023)",
                    Description =
                        "NVIDIA® GeForce RTX™ 4070 Laptop GPU,Windows 11 Pro,13th Gen Intel® Core™ i9-13900H,ROG Nebula HDR Display,16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz,2TB PCIe® 4.0 NVMe™ M.2 SSD",
                    Price = 150000,
                    PictureUrl = "/images/products/rogzephyrusm16.png",
                    Brand = "ROG Zephyrus",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Zephyrus S17",
                    Description =
                        "GeForce RTX™ 3070 Laptop GPU,Windows 10 Pro,Free Upgrade to Windows 11¹,11th Gen Intel® Core™ i9-11900H,17.3 inch, 4K UHD (3840 x 2160) 16:9, Refresh Rate:120Hz,1TB + 1TB + 1TB PCIe® NVMe™ M.2 Performance SSD (RAID0)",
                    Price = 180000,
                    PictureUrl = "/images/products/rogzephyruss17.png",
                    Brand = "ROG Zephyrus",
                    Type = "Laptop",
                    QuantityInStock = 100
                },
               
                //MotherBoards
                new Product
                {
                    Name = "ROG MAXIMUS Z790 DARK HERO",
                    Description =
                        "Intel® Z790 LGA 1700 ATX motherboard with 20 + 1 power stages, DDR5, Wi-Fi 7 with ASUS WiFi Q-Antenna, five M.2 slots, PCIe® 5.0 NVMe® SSD slot onboard, PCIe 5.0 x16 SafeSlots with Q-Release, two Thunderbolt™ 4 ports, USB 20Gbps Type-C® front-panel connector with Quick Charge 4+ up to 60W, AI Overclocking, AI Cooling II, AI Networking, Two-way AI Noise Cancelation, and Aura Sync RGB lighting",
                    Price = 150000,
                    PictureUrl = "/images/products/rogmaximus.png",
                    Brand = "ROG Maximus",
                    Type = "Mother Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG MAXIMUS Z790 HERO EVA-02",
                    Description =
                        "Intel® Z790 LGA 1700 ATX motherboard with 20 + 1 power stages, DDR5, five M.2 slots, PCIe® 5.0 NVMe® SSD slot on Hyper M.2 Card, PCIe 5.0 x16 SafeSlots with Q-Release, Wi-Fi 6E, two Thunderbolt™ 4 ports, USB 20Gbps Type-C® front-panel connector with Quick Charge 4+ up to 60W, AI Overclocking, AI Cooling II, and Aura Sync RGB lighting",
                    Price = 160000,
                    PictureUrl = "/images/products/rogmaximushero.png",
                    Brand = "ROG Maximus",
                    Type = "Mother Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG STRIX Z790-H GAMING WIFI",
                    Description =
                        "Intel® Z790 LGA 1700 ATX motherboard with 16 + 1 power stages, DDR5 up to 7800 MT/s, PCIe 5.0 x16 SafeSlot with Q-Release, four PCIe 4.0 M.2 slots, WiFi 6E, USB 3.2 Gen 2x2 Type-C® rear I/O port and additional front-panel connector, AI Overclocking, AI Cooling II, and Aura Sync RGB lighting",
                    Price = 140000,
                    PictureUrl = "/images/products/rogmaximusz7.png",
                    Brand = "ROG Maximus",
                    Type = "Mother Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG STRIX B760-A GAMING WIFI",
                    Description =
                        "Intel® B760 LGA 1700 white ATX motherboard with 12 + 1 power stages, DDR5 up to 7800 MT/s, PCIe 5.0 x16 SafeSlot, three PCIe 4.0 M.2 slots, WiFi 6E, USB 3.2 Gen 2x2 Type-C®, Two-Way AI Noise Cancelation, and Aura Sync RGB lighting",
                    Price = 250000,
                    PictureUrl = "/images/products/rogstrixb7.png",
                    Brand = "ROG Strix",
                    Type = "Mother Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG STRIX Z790-A GAMING WIFI",
                    Description =
                        "Intel® Z790 LGA 1700 ATX motherboard with 16 + 1 power stages, DDR5 up to 7800 MT/s, four M.2 slots, PCIe® 5.0 x16 SafeSlot with Q-Release, WiFi 6E, USB 3.2 Gen 2x2 Type-C® rear I/O port and additional front-panel connector with PD 3.0 up to 30W, AI Overclocking, AI Cooling II, and Aura Sync RGB lighting",
                    Price = 189990,
                    PictureUrl = "/images/products/rogstrixz7.png",
                    Brand = "ROG Strix",
                    Type = "Mother Boards",
                    QuantityInStock = 100
                },
                
                //Graphics Cards
                new Product
                {
                    Name = "ROG Strix GeForce RTX™ 4060 Ti Advanced Edition 16GB GDDR6",
                    Description =
                        "ROG Strix GeForce RTX™ 4060 Ti Advanced Edition 16GB GDDR6 with DLSS 3 and chart-topping thermal performance",
                    Price = 199990,
                    PictureUrl = "/images/products/rtx4060.png",
                    Brand = "Nvidia",
                    Type = "Graphics Cards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix GeForce RTX™ 4060 Ti OC Edition 16GB GDDR6",
                    Description = "ROG Strix GeForce RTX™ 4060 Ti OC Edition 16GB GDDR6 with DLSS 3 and chart-topping thermal performance",
                    Price = 150000,
                    PictureUrl = "/images/products/rtx4060ti.png",
                    Brand = "Nvidia",
                    Type = "Graphics Cards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix GeForce RTX™ 4090 24GB GDDR6X OC EVA-02 Edition",
                    Description =
                        "ROG Strix GeForce RTX™ 4090 24GB GDDR6X OC EVA-02 Edition with DLSS 3 and chart-topping thermal performance.",
                    Price = 180000,
                    PictureUrl = "/images/products/rtx4090.png",
                    Brand = "Nvidia",
                    Type = "Graphics Cards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix LC Radeon™ RX 6950 XT OC Edition 16GB GDDR6",
                    Description =
                        "ROG Strix LC Radeon™ RX 6950 XT is a liquid-cooled leviathan.",
                    Price = 160000,
                    PictureUrl = "/images/products/rx6950.png",
                    Brand = "Amd",
                    Type = "Graphics Cards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix Radeon™ RX 7600 OC Edition 8GB GDDR6",
                    Description =
                        "ROG Strix Radeon™ RX 7600 OC Edition 8GB GDDR6 optimized inside and out for lower temps and durability",
                    Price = 180000,
                    PictureUrl = "/images/products/rx7600.png",
                    Brand = "Amd",
                    Type = "Graphics Cards",
                    QuantityInStock = 100
                },

                //Monitors
                new Product
                {
                    Name = "ROG Swift PG27UQR-W",
                    Description =
                        "ROG Swift PG27UQR-W Gaming Monitor — 27”, 4K UHD (3840 x2160), Fast IPS, 160 Hz, 1 ms GTG, NVidia G-Sync, Variable Overdrive, DisplayHDR 600",
                    Price = 180000,
                    PictureUrl = "/images/products/rogswift.png",
                    Brand = "ROG Swift",
                    Type = "Monitors",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Swift PG32UQXR",
                    Description =
                        "ROG Swift PG32UQXR 4K 160Hz gaming monitor ― 32-inch 4K UHD (3840 x 2160), 160Hz (above 144Hz), 1ms, Fast IPS, DisplayHDR™ 1000, 96% DCI-P3, mini LED, local dimming, Quantum Dot technology, FreeSync Premium Pro, HDMI 2.1, DP 2.1",
                    Price = 150000,
                    PictureUrl = "/images/products/rogswiftpg.png",
                    Brand = "ROG Swift",
                    Type = "Monitors",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Swift OLED PG27AQDM",
                    Description =
                        "ROG Swift OLED PG27AQDM gaming monitor ― 27-inch (26.5-inch viewable) 1440p OLED panel, 240 Hz, 0.03ms response, G-SYNC® compatible, anti-glare, custom heatsink, intelligent voltage optimization, uniform brightness, DisplayWidget Center",
                    Price = 175000,
                    PictureUrl = "/images/products/swiftoled.png",
                    Brand = "ROG Swift",
                    Type = "Monitors",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix XG259QN",
                    Description =
                        "ROG Strix XG259QN eSports Gaming Monitor — 25 inch (24.5 inch viewable) FHD (1920 x 1080), 380 Hz (OC), Fast IPS, 1 ms GTG (0.3 ms minimum), HDR",
                    Price = 160000,
                    PictureUrl = "/images/products/strix.png",
                    Brand = "ROG Strix",
                    Type = "Monitors",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Strix XG438QR",
                    Description =
                        "ROG Strix XG438QR HDR Large Gaming Monitor — 43-inch, 4K (3840 x 2160), 120 Hz, FreeSync™ Premium Pro, DisplayHDR™ 600, DCI-P3 90%, Shadow Boost, 10W Speaker*2, Remote Control",
                    Price = 170000,
                    PictureUrl = "/images/products/strixxg.png",
                    Brand = "ROG Strix",
                    Type = "Monitors",
                    QuantityInStock = 100
                },

                //Phones
                new Product
                {
                    Name = "ROG Phone 7 Ultimate",
                    Description ="Qualcomm Snapdragon 8 Gen 2,LPDDR5X 16GB",
                    Price = 80000,
                    PictureUrl = "/images/products/phone7u.png",
                    Brand = "ROG Phone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Phone 7",
                    Description ="Qualcomm Snapdragon 8 Gen 2,LPDDR5X 16GB",
                    Price = 70000,
                    PictureUrl = "/images/products/phone7.png",
                    Brand = "ROG Phone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Phone 6 Diablo Immortal Edition",
                    Description =
                        "Qualcomm Snapdragon 8+ Gen 1,LPDDR5 16GB,UFS3.1 512GB,6000mAh battery",
                    Price = 75000,
                    PictureUrl = "/images/products/phone6d.png",
                    Brand = "ROG Phone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Phone 6 BATMAN Edition",
                    Description =
                        "MediaTek Dimensity 9000+,LPDDR5X 12GB,UFS3.1 256GB,6000mAh battery",
                    Price = 80000,
                    PictureUrl = "/images/products/phone6b.png",
                    Brand = "ROG Phone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "ROG Phone 6D Ultimate",
                    Description =
                        "MediaTek Dimensity 9000+,LPDDR5X 16GB,UFS3.1 512GB,6000mAh battery",
                    Price = 60000,
                    PictureUrl = "/images/products/phone6du.png",
                    Brand = "ROG Phone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();
        }
    }
}