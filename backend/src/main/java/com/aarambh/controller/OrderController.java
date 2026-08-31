package com.aarambh.controller;

import com.aarambh.entity.Order;
import com.aarambh.repository.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepo;

    public OrderController(OrderRepository orderRepo) {
        this.orderRepo = orderRepo;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        // Generate a simple order number
        order.setOrderNumber("AR" + (1000 + orderRepo.count()));
        
        // Link items to the order properly
        if (order.getItems() != null) {
            order.getItems().forEach(item -> item.setOrder(order));
        }
        
        Order savedOrder = orderRepo.save(order);
        return ResponseEntity.ok(savedOrder);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        return orderRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
