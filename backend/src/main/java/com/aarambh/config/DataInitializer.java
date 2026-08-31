package com.aarambh.config;

import com.aarambh.entity.MenuItem;
import com.aarambh.entity.AppUser;
import com.aarambh.repository.MenuItemRepository;
import com.aarambh.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(MenuItemRepository menuRepo, AppUserRepository userRepo, PasswordEncoder passwordEncoder) {
        return args -> {
            if (menuRepo.count() == 0) {
                System.out.println("Seeding database with Aarambh Menu...");
                
                menuRepo.saveAll(List.of(
                    new MenuItem(null, "Paneer Dhamaka", "Paneer", "Toast Paneer, Cheese Tadka, Red Gravy", new BigDecimal("329"), null, true, true, true, null),
                    new MenuItem(null, "Veg Egg Curry", "Main Course", "Special vegetarian egg curry in rich gravy", new BigDecimal("369"), null, true, true, true, null),
                    new MenuItem(null, "Aarambh Special Thali", "Thali", "Tomato Soup, Roasted Papad, Dal, 2 Punjabi Subji, 2 Roti, Jeera Rice, Gulab Jamun, Butter Milk", new BigDecimal("309"), null, true, false, true, null),
                    new MenuItem(null, "Bamboo Biryani", "Rice & Biryani", "Aromatic biryani cooked traditionally in bamboo", new BigDecimal("350"), null, true, true, true, null),
                    new MenuItem(null, "Masala Dosa", "South Indian", "Crispy crepe made from rice and lentils with potato filling", new BigDecimal("120"), null, true, false, false, null)
                ));
                
                System.out.println("Menu seeded successfully!");
            }
            
            if (userRepo.count() == 0) {
                System.out.println("Seeding default Admin user...");
                AppUser admin = new AppUser();
                admin.setName("Admin User");
                admin.setEmail("admin@aarambh.com");
                admin.setPasswordHash(passwordEncoder.encode("admin123"));
                admin.setRole(AppUser.Role.ADMIN);
                userRepo.save(admin);
            }
        };
    }
}
