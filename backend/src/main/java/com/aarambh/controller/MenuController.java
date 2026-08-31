package com.aarambh.controller;

import com.aarambh.entity.MenuItem;
import com.aarambh.repository.MenuItemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuItemRepository menuRepo;

    public MenuController(MenuItemRepository menuRepo) {
        this.menuRepo = menuRepo;
    }

    @GetMapping
    public List<MenuItem> getAllMenu() {
        return menuRepo.findAll();
    }
    
    @GetMapping("/available")
    public List<MenuItem> getAvailableMenu() {
        return menuRepo.findByIsAvailableTrue();
    }
}
